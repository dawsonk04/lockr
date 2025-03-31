# Lockr Backend

This is the backend server for the Lockr password management application. It provides authentication APIs that connect to Supabase.

## Setup

1. Make sure you have Go installed (1.16+ recommended)
2. Configure your Supabase credentials in `config.json`:
   ```json
   {
     "supabase": {
       "project_id": "lockr-db",
       "api_key": "your-api-key",
       "url": "https://your-project-url.supabase.co",
       "anon_key": "your-anon-key"
     }
   }
   ```
3. Run the setup command to install dependencies:
   ```
   make setup
   ```

## Running the Server

```
make run
```

This will start the server on port 8080.

## API Endpoints

- **POST /api/auth/signup**: Create a new user
  - Request body: `{ "email": "user@example.com", "password": "password123" }`

- **POST /api/auth/login**: Authenticate a user
  - Request body: `{ "email": "user@example.com", "password": "password123" }`

- **GET /api/auth/google**: Initiate Google OAuth authentication

## Security

- Credentials in `config.json` should never be committed to version control
- The file is listed in `.gitignore` to prevent accidental commits
- In production, use environment variables instead 