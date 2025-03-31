package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"lockr.io/backend/auth"
)

type Config struct {
	Supabase struct {
		ProjectID string `json:"project_id"`
		APIKey    string `json:"api_key"`
		URL       string `json:"url"`
		AnonKey   string `json:"anon_key"`
	} `json:"supabase"`
}

func loadConfig() (*Config, error) {
	file, err := os.Open("config.json")
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var config Config
	if err := json.NewDecoder(file).Decode(&config); err != nil {
		return nil, err
	}
	return &config, nil
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {
	// Load configuration
	config, err := loadConfig()
	if err != nil {
		log.Fatalf("Failed to load configuration: %v", err)
	}

	// Initialize authentication handler
	authHandler := auth.NewHandler(config.Supabase.URL, config.Supabase.AnonKey)

	// Define API routes
	http.Handle("/api/auth/signup", corsMiddleware(http.HandlerFunc(authHandler.SignUp)))
	http.Handle("/api/auth/login", corsMiddleware(http.HandlerFunc(authHandler.Login)))
	http.Handle("/api/auth/google", corsMiddleware(http.HandlerFunc(authHandler.GoogleAuth)))

	// Start the server
	port := "8080"
	fmt.Printf("Server started on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
