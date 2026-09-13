<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Services\UserService;
use App\Services\AuthService;

/**
 * UserController
 * Gestione utenti e assegnazione ruoli (RF9). Riservato all'Admin, tranne
 * dove diversamente specificato (register: pubblico; update: anche
 * l'utente su se stesso).
 */
class UserController extends Controller
{
    public function __construct(
        AuthService $authService,
        private UserService $userService
    ) {
        parent::__construct($authService);
    }

    /**
     * POST /register
     * Registrazione pubblica, nessuna autenticazione richiesta. Crea
     * sempre un account Editor: l'auto-registrazione come Admin non è
     * permessa — un Admin si promuove tramite PUT /users/{id}/role da un
     * altro Admin. Restituisce token + utente come /login, per
     * autenticare subito il nuovo account (RegistrationPresenter.js si
     * aspetta response.token/response.user).
     */
    public function register(): void
    {
        $body = $this->getJsonBody();

        if (empty(trim($body['username'] ?? '')) || empty(trim($body['email'] ?? '')) || empty($body['password'])) {
            $this->jsonResponse(['error' => 'Compila tutti i campi obbligatori'], 400);
            return;
        }

        if (!filter_var($body['email'], FILTER_VALIDATE_EMAIL)) {
            $this->jsonResponse(['error' => 'Formato email non valido'], 400);
            return;
        }

        try {
            $newUser = $this->userService->create('editor', $body);
            $token = $this->authService->generateToken($newUser);

            $this->jsonResponse([
                'message' => 'Registrazione completata con successo',
                'token' => $token,
                'user' => $newUser,
            ], 201);
        } catch (\PDOException $e) {
            $this->jsonResponse(['error' => 'Username o email già in uso'], 409);
        } catch (\Exception $e) {
            $this->jsonResponse(['error' => 'Errore interno del server durante la registrazione'], 500);
        }
    }

    /**
     * GET /users
     */
    public function index(): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageUsers()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $this->jsonResponse(['users' => $this->userService->getAll()], 200);
    }

    /**
     * GET /users/{id}
     */
    public function show(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageUsers()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $target = $this->userService->getById($id);
        if ($target === null) {
            $this->jsonResponse(['error' => 'Utente non trovato'], 404);
            return;
        }

        $this->jsonResponse(['user' => $target], 200);
    }

    /**
     * POST /users
     * Body atteso: { "username", "email", "password", "role": "editor"|"admin" }
     */
    public function store(): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageUsers()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        $role = $body['role'] ?? null;

        if (empty($body['username']) || empty($body['email']) || empty($body['password'])
            || !in_array($role, ['editor', 'admin'], true)) {
            $this->jsonResponse(['error' => 'Dati non validi'], 400);
            return;
        }

        $newUser = $this->userService->create($role, $body);
        $this->jsonResponse(['user' => $newUser], 201);
    }

    /**
     * PUT /users/{id}
     * Aggiornamento generale: username/email/password/role, tutti opzionali.
     * Permesso a un Admin su qualsiasi utente, oppure a un utente su se
     * stesso — in quest'ultimo caso il campo "role" viene ignorato anche
     * se presente nel body: un utente non può auto-promuoversi.
     */
    public function update(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        $isSelf = $user->userId === $id;
        if (!$user->canManageUsers() && !$isSelf) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();

        if ($isSelf && !$user->canManageUsers()) {
            unset($body['role']);
        }

        $updated = $this->userService->update($id, $body);

        if ($updated === null) {
            $this->jsonResponse(['error' => 'Utente non trovato'], 404);
            return;
        }

        $this->jsonResponse(['user' => $updated], 200);
    }

    /**
     * PUT /users/{id}/role
     * Endpoint dedicato al solo cambio ruolo, riservato all'Admin.
     * Body atteso: { "role": "editor" | "admin" }
     */
    public function updateRole(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageUsers()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        $role = $body['role'] ?? null;

        if (!in_array($role, ['editor', 'admin'], true)) {
            $this->jsonResponse(['error' => 'Ruolo non valido'], 400);
            return;
        }

        $updated = $this->userService->changeRole($id, $role);
        if ($updated === null) {
            $this->jsonResponse(['error' => 'Utente non trovato'], 404);
            return;
        }

        $this->jsonResponse(['user' => $updated], 200);
    }

    /**
     * DELETE /users/{id}
     */
    public function destroy(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canManageUsers()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $this->userService->delete($id);
        $this->jsonResponse(['message' => 'Utente eliminato'], 200);
    }
}
