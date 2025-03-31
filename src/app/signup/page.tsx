import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <SignupForm />
      </div>
    </main>
  );
} 