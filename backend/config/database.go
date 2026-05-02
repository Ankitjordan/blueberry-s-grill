package config

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

var (
	DB   *pgxpool.Pool
	once sync.Once
)

func ConnectDB() *pgxpool.Pool {
	once.Do(func() {
		dsn := os.Getenv("DATABASE_URL")
		if dsn == "" {
			dsn = "postgres://postgres:ankit123@localhost:5432/postgres?sslmode=disable"
		}

		config, err := pgxpool.ParseConfig(dsn)
		if err != nil {
			log.Fatalf("Unable to parse DATABASE_URL: %v", err)
		}

		// Configure pool settings
		config.MaxConns = 10
		config.MinConns = 2
		config.MaxConnLifetime = time.Hour
		config.MaxConnIdleTime = 30 * time.Minute

		pool, err := pgxpool.NewWithConfig(context.Background(), config)
		if err != nil {
			log.Fatalf("Unable to create connection pool: %v", err)
		}

		// Test connection
		err = pool.Ping(context.Background())
		if err != nil {
			log.Fatalf("Unable to connect to database: %v", err)
		}

		DB = pool
		fmt.Println("Successfully connected to local PostgreSQL instance via pgx")
	})
	return DB
}

func DisconnectDB() {
	if DB != nil {
		DB.Close()
		fmt.Println("Database connection pool closed")
	}
}
