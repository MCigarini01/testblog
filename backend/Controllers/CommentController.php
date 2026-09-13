<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Services\CommentService;
use App\Services\AuthService;


class CommentController extends Controller
{
    public function __construct(
        AuthService $authService,
        private CommentService $commentService
    ) {
        parent::__construct($authService);
    }


    public function index(): void
    {
        $postId = $_GET['post_id'] ?? null;
        $status = $_GET['status'] ?? null;

        if ($postId !== null) {
            $comments = $this->commentService->getApprovedByPost((int) $postId);
            $this->jsonResponse(['comments' => $comments], 200);
            return;
        }


        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }
        if (!$user->canModerateComments()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $comments = $status === 'pending'
            ? $this->commentService->getPending()
            : $this->commentService->getAll();

        $this->jsonResponse(['comments' => $comments], 200);
    }


    public function show(int $id): void
    {
        $comment = $this->commentService->getById($id);

        if ($comment === null) {
            $this->jsonResponse(['error' => 'Commento non trovato'], 404);
            return;
        }

        $this->jsonResponse(['comment' => $comment], 200);
    }

 
    public function store(): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canCommentPost()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $body = $this->getJsonBody();
        if (empty($body['content']) || empty($body['postId'])) {
            $this->jsonResponse(['error' => 'Il commento non può essere vuoto'], 400);
            return;
        }

        $comment = $this->commentService->create((int) $body['postId'], $user, $body['content']);
        $this->jsonResponse(['comment' => $comment, 'message' => 'Commento in attesa di approvazione'], 201);
    }


    public function approve(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canModerateComments()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $comment = $this->commentService->approve($id);
        if ($comment === null) {
            $this->jsonResponse(['error' => 'Commento non trovato'], 404);
            return;
        }

        $this->jsonResponse(['comment' => $comment], 200);
    }

  
    public function reject(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canModerateComments()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $comment = $this->commentService->reject($id);
        if ($comment === null) {
            $this->jsonResponse(['error' => 'Commento non trovato'], 404);
            return;
        }

        $this->jsonResponse(['comment' => $comment], 200);
    }


    public function destroy(int $id): void
    {
        $user = $this->requireAuthenticatedUser();
        if ($user === null) {
            return;
        }

        if (!$user->canModerateComments()) {
            $this->jsonResponse(['error' => 'Permesso negato'], 403);
            return;
        }

        $this->commentService->delete($id);
        $this->jsonResponse(['message' => 'Commento eliminato'], 200);
    }
}
