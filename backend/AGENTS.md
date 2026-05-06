# Repository Guidelines

## Project Structure & Module Organization
This directory contains the Go backend for the repository. `main.go` boots the Gin server and registers routes. Keep database setup in `config/`, HTTP handlers in `controllers/`, and route wiring in `routes/`. Reserve `middlewares/`, `models/`, `services/`, and `utils/` for shared request logic, domain types, business logic, and helper code as those layers are added. Temporary build artifacts belong in `tmp/`; do not commit generated binaries such as `backend.exe`.

## Build, Test, and Development Commands
Run commands from `backend/`.

- `go run .` starts the API locally on `:8080`.
- `go test -v ./...` runs the full backend test suite; this is required by CI even though no tests exist yet.
- `go build -v ./...` verifies the project compiles across all packages.
- `go fmt ./...` formats Go source before review.

The root CI workflow runs `go test -v ./...` and `go build -v ./...` from this folder on pull requests to `main`.

## Coding Style & Naming Conventions
Follow standard Go formatting and import ordering with `go fmt`. Use tabs and idiomatic Go naming: exported identifiers in `PascalCase`, unexported helpers in `camelCase`, and file names in `snake_case` such as `bookings_controller.go`. Keep handlers thin: request parsing and response shaping in controllers, business rules in `services/`, and shared infrastructure in `config/` or `utils/`.

## Testing Guidelines
Place tests next to the code they cover using `*_test.go` files, for example `config/database_test.go`. Prefer table-driven tests for handlers and service logic. Add coverage for new routes, database-facing logic, and failure cases before opening a PR. Run `go test -v ./...` locally before pushing.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit subjects with a prefix such as `fix: use Bun for frontend build in CI`. Keep that pattern for backend work, for example `feat: add booking validation`. PRs should include a concise description, linked issue if applicable, test results, and sample request or response details for API changes.

## Security & Configuration Tips
Use `DATABASE_URL` for local and deployed database connections. Avoid hardcoding secrets in source files, keep `.env` local, and prefer environment-specific overrides instead of editing `config/database.go` directly.
