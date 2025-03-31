import Navbar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <LoginForm />
      </div>
    </main>
  );
} 