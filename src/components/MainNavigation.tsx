
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, MapPin } from "lucide-react";

const MainNavigation = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src="/lovable-uploads/5a270a74-6bee-4b12-a0b5-f1d10ea44e22.png" 
            alt="BloodBridge Logo"
            className="h-10 object-contain"
          />
        </div>
        <span className="text-foreground text-xl lg:text-2xl font-black hidden sm:block">BloodBridge</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-foreground hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
          <Heart className="w-4 h-4" />
          Home
        </Link>
        <Link to="/about" className="text-foreground hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
          <Users className="w-4 h-4" />
          About
        </Link>
        <Link to="/blog" className="text-foreground hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
          <Shield className="w-4 h-4" />
          Blog
        </Link>
      </div>
      
      <div className="flex items-center gap-3">
        <Link to="/donor-signup">
          <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Donate Blood
          </Button>
        </Link>
        <Link to="/hospital-signup">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Hospital Portal
          </Button>
        </Link>
        <Link to="/signin">
          <Button variant="ghost" className="text-foreground hover:bg-muted">
            SignIn
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
