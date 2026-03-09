# TDG Configuration

## Project Information
- Language: Go
- Framework: None (standard library)
- Test Framework: go test

## Build Command
go build -o replay ./cmd/replay

## Test Command
go test ./...

## Single Test Command
go test -run ^TestName$ ./path/to/package

## Coverage Command
go test -count=1 -coverprofile=coverage.out ./...

## Test File Patterns
- Test files: *_test.go
- Test directory: Same as source (Go convention)
