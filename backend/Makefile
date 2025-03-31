.PHONY: run build clean

# Default target
all: build

# Build the Go application
build:
	go build -o bin/lockr-server

# Run the server
run:
	go run main.go

# Clean the binary
clean:
	rm -f bin/lockr-server
	rm -rf bin/

# Get dependencies
deps:
	go mod tidy

# Initial setup
setup: deps
	mkdir -p bin 