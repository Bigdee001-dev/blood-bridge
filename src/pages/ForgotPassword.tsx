
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">+</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blood-red">BloodBridge</h1>
              <p className="text-blood-red">Naija</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-primary mb-2">Forgot Password</h2>
          <p className="text-gray-600">
            Enter your email or phone number and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Enter email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 text-center"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-blood-red hover:bg-blood-red/90 text-white text-lg"
          >
            Reset Password
          </Button>
        </form>

        <div className="text-center">
          <Link
            to="/signin"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
