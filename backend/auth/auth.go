package auth

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
)

// Handler manages authentication operations
type Handler struct {
	supabaseURL string
	supabaseKey string
}

// User represents the user data
type User struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// AuthResponse is the standard response format
type AuthResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Token   string `json:"token,omitempty"`
}

// NewHandler creates a new authentication handler
func NewHandler(url, key string) *Handler {
	return &Handler{
		supabaseURL: url,
		supabaseKey: key,
	}
}

// SignUp handles user registration
func (h *Handler) SignUp(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		respondWithError(w, "Invalid request data", http.StatusBadRequest)
		return
	}

	// Validate user input
	if user.Email == "" || user.Password == "" {
		respondWithError(w, "Email and password are required", http.StatusBadRequest)
		return
	}

	// Create auth request to Supabase
	reqURL := fmt.Sprintf("%s/auth/v1/signup", h.supabaseURL)
	reqBody, _ := json.Marshal(map[string]string{
		"email":    user.Email,
		"password": user.Password,
	})

	req, err := http.NewRequest("POST", reqURL, strings.NewReader(string(reqBody)))
	if err != nil {
		respondWithError(w, "Error creating request", http.StatusInternalServerError)
		return
	}

	// Set required headers
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("apikey", h.supabaseKey)

	// Send request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		respondWithError(w, "Error connecting to authentication service", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	// Read and process response
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		respondWithError(w, "Error reading response", http.StatusInternalServerError)
		return
	}

	// Forward the response status
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(resp.StatusCode)
	w.Write(body)
}

// Login handles user authentication
func (h *Handler) Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		respondWithError(w, "Invalid request data", http.StatusBadRequest)
		return
	}

	// Validate user input
	if user.Email == "" || user.Password == "" {
		respondWithError(w, "Email and password are required", http.StatusBadRequest)
		return
	}

	// Create auth request to Supabase
	reqURL := fmt.Sprintf("%s/auth/v1/token?grant_type=password", h.supabaseURL)
	reqBody, _ := json.Marshal(map[string]string{
		"email":    user.Email,
		"password": user.Password,
	})

	req, err := http.NewRequest("POST", reqURL, strings.NewReader(string(reqBody)))
	if err != nil {
		respondWithError(w, "Error creating request", http.StatusInternalServerError)
		return
	}

	// Set required headers
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("apikey", h.supabaseKey)

	// Send request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		respondWithError(w, "Error connecting to authentication service", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	// Read and process response
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		respondWithError(w, "Error reading response", http.StatusInternalServerError)
		return
	}

	// Forward the response status
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(resp.StatusCode)
	w.Write(body)
}

// GoogleAuth initiates Google OAuth authentication
func (h *Handler) GoogleAuth(w http.ResponseWriter, r *http.Request) {
	// We'll redirect to Supabase OAuth URL for Google
	authURL := fmt.Sprintf("%s/auth/v1/authorize?provider=google", h.supabaseURL)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"url": authURL,
	})
}

// Helper function to respond with an error
func respondWithError(w http.ResponseWriter, message string, statusCode int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(AuthResponse{
		Success: false,
		Message: message,
	})
}
