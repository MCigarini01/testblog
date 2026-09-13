<?php
declare(strict_types=1);


spl_autoload_register(function (string $class): void {
    $prefix = 'App\\';
    $baseDir = rtrim(__DIR__ . '/..', '/');

    if (!str_starts_with($class, $prefix)) {
        return;
    }

    $relativeClass = substr($class, strlen($prefix));
    $segments = explode('\\', $relativeClass);
    $segments[count($segments) - 1] .= '.php';

    $currentPath = $baseDir;
    foreach ($segments as $segment) {
        if (!is_dir($currentPath)) {
            return;
        }

        $found = null;
        foreach (scandir($currentPath) as $entry) {
            if (strcasecmp($entry, $segment) === 0) {
                $found = $entry;
                break;
            }
        }

        if ($found === null) {
            return; // Nessuna corrispondenza: PHP segnalerà la classe mancante.
        }

        $currentPath .= '/' . $found;
    }

    if (is_file($currentPath)) {
        require $currentPath;
    }
});

use App\Repositories\Database;
use App\Repositories\UserRepository;
use App\Repositories\PostRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\TagRepository;
use App\Repositories\CommentRepository;
use App\Services\AuthService;
use App\Services\PostService;
use App\Services\CategoryService;
use App\Services\TagService;
use App\Services\CommentService;
use App\Services\UserService;
use App\Services\UserFactory;
use App\Services\CommentFactory;
use App\Controllers\AuthController;
use App\Controllers\PostController;
use App\Controllers\CategoryController;
use App\Controllers\TagController;
use App\Controllers\CommentController;
use App\Controllers\UserController;


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}


$database = Database::getInstance();

$userFactory = new UserFactory();
$commentFactory = new CommentFactory();

$userRepository = new UserRepository($database, $userFactory);
$postRepository = new PostRepository($database);
$categoryRepository = new CategoryRepository($database);
$tagRepository = new TagRepository($database);
$commentRepository = new CommentRepository($database);

$authSecret = getenv('AUTH_SECRET') ?: 'change-me-in-production';

$authService = new AuthService($userRepository, $authSecret);
$postService = new PostService($postRepository, $categoryRepository, $tagRepository);
$categoryService = new CategoryService($categoryRepository);
$tagService = new TagService($tagRepository);
$commentService = new CommentService($commentRepository, $commentFactory);
$userService = new UserService($userRepository, $userFactory);

$authController = new AuthController($authService);
$postController = new PostController($authService, $postService);
$categoryController = new CategoryController($authService, $categoryService);
$tagController = new TagController($authService, $tagService);
$commentController = new CommentController($authService, $commentService);
$userController = new UserController($authService, $userService);


$routes = [
    ['POST', '/login', [$authController, 'login']],
    ['POST', '/logout', [$authController, 'logout']],
	['POST', '/register', [$userController, 'register']],

    ['GET', '/posts/search', [$postController, 'index']],
    ['GET', '/posts', [$postController, 'index']],
    ['GET', '/posts/{id}', [$postController, 'show']],
    ['POST', '/posts', [$postController, 'store']],
    ['PUT', '/posts/{id}', [$postController, 'update']],
    ['DELETE', '/posts/{id}', [$postController, 'destroy']],

    ['GET', '/categories', [$categoryController, 'index']],
    ['GET', '/categories/{id}', [$categoryController, 'show']],
    ['POST', '/categories', [$categoryController, 'store']],
    ['PUT', '/categories/{id}', [$categoryController, 'update']],
    ['DELETE', '/categories/{id}', [$categoryController, 'destroy']],

    ['GET', '/tags', [$tagController, 'index']],
    ['GET', '/tags/{id}', [$tagController, 'show']],
    ['POST', '/tags', [$tagController, 'store']],
    ['PUT', '/tags/{id}', [$tagController, 'update']],
    ['DELETE', '/tags/{id}', [$tagController, 'destroy']],

    ['GET', '/comments', [$commentController, 'index']],
    ['GET', '/comments/{id}', [$commentController, 'show']],
    ['POST', '/comments', [$commentController, 'store']],
    ['PUT', '/comments/{id}/approve', [$commentController, 'approve']],
    ['PUT', '/comments/{id}/reject', [$commentController, 'reject']],
    ['DELETE', '/comments/{id}', [$commentController, 'destroy']],

    ['GET', '/users', [$userController, 'index']],
    ['GET', '/users/{id}', [$userController, 'show']],
    ['POST', '/users', [$userController, 'store']],
    ['PUT', '/users/{id}/role', [$userController, 'updateRole']],
    ['PUT', '/users/{id}', [$userController, 'update']],
    ['DELETE', '/users/{id}', [$userController, 'destroy']],
];


$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$path = rtrim((string) $path, '/');
if ($path === '') {
    $path = '/';
}


$scriptDir = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '')), '/');
if ($scriptDir !== '' && str_starts_with($path, $scriptDir)) {
    $path = substr($path, strlen($scriptDir));
}
if ($path === '') {
    $path = '/';
}

foreach ($routes as [$routeMethod, $pattern, $handler]) {
    if ($routeMethod !== $method) {
        continue;
    }

    $regex = '#^' . preg_replace('/\{(\w+)\}/', '(?P<$1>\d+)', $pattern) . '$#';

    if (preg_match($regex, $path, $matches)) {
        $params = array_values(array_filter(
            $matches,
            fn($key) => is_string($key),
            ARRAY_FILTER_USE_KEY
        ));

        try {
            call_user_func_array($handler, array_map('intval', $params));
        } catch (\Throwable $e) {
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Errore interno del server']);
        }

        exit;
    }
}

http_response_code(404);
header('Content-Type: application/json');
echo json_encode(['error' => 'Rotta non trovata']);
