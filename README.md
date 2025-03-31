# Lockr - Secure Password Management

Lockr is a secure password management solution that helps you keep your credentials safe and accessible.

## Project Structure

- `/src` - Next.js frontend
- `/backend` - Go backend services for authentication

## Getting Started

### Frontend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Configure Supabase credentials in `config.json`:
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

3. Run the setup and start the server:
   ```bash
   make setup
   make run
   ```

4. The Go backend will run on [http://localhost:8080](http://localhost:8080).

## Features

- Secure user authentication with email/password and Google OAuth
- Modern, clean UI with responsive design
- End-to-end encryption for password storage
- Integration with Supabase for secure data management

## Security

- Credentials are stored in `.env.local` and `backend/config.json` files that are ignored by git
- Never commit sensitive information to the repository

