import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">+</span>
            </div>
            <span className="text-primary text-xl font-semibold">BloodBridge Naija</span>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Welcome Back</CardTitle>
          <p className="text-muted-foreground">Sign in to your account</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="rounded" />
              <Label htmlFor="remember" className="text-sm">Remember me</Label>
            </div>
            <Link to="/forgot-password" className="text-sm text-blood-red hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button className="w-full bg-blood-red hover:bg-blood-red/90 text-white py-3 text-lg">
            Sign In
          </Button>

          <div className="text-center">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/donor-signup" className="text-blood-red hover:underline font-medium">
              Sign Up as Donor
            </Link>
          </div>

          <div className="text-center">
            <Link to="/hospital-signup" className="text-primary hover:underline font-medium">
              Register Hospital Account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;