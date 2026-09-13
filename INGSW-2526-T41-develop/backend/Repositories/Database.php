<?php
declare(strict_types=1);

namespace App\Repositories;

use PDO;
use PDOException;

/**
 * Database
 * Gestisce la connessione PDO condivisa verso MySQL.
 */
class Database
{
    private static ?Database $instance = null;
    private PDO $connection;

    private function __construct(string $host, string $dbName, string $user, string $password)
    {
        $dsn = "mysql:host={$host};dbname={$dbName};charset=utf8mb4";

        try {
            $this->connection = new PDO($dsn, $user, $password, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        } catch (PDOException $e) {
            throw new PDOException('Connessione al database fallita: ' . $e->getMessage());
        }
    }


    public static function getInstance(): self
    {
        if (self::$instance === null) {
            self::$instance = new self(
                getenv('DB_HOST') ?: 'mysql',
                getenv('DB_NAME') ?: 'blog_db',
                getenv('DB_USER') ?: 'root',
                getenv('DB_PASSWORD') ?: ''
            );
        }

        return self::$instance;
    }

    public function getConnection(): PDO
    {
        return $this->connection;
    }

    private function __clone(): void
    {
        
    }

    public function __wakeup(): void
    {
        throw new \RuntimeException('Impossibile deserializzare un Singleton');
    }
}
