
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Users, Shield, MapPin, Menu } from "lucide-react";

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
      
      <div className="hidden lg:flex items-center gap-3">
        <Link to="/donor-signup">
          <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Donor Portal
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
      
      {/* Mobile/Tablet Hamburger Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              {/* Navigation Links */}
              <div className="flex flex-col gap-2 pb-4 border-b">
                <Link to="/" className="text-foreground hover:text-red-600 transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-muted">
                  <Heart className="w-4 h-4" />
                  Home
                </Link>
                <Link to="/about" className="text-foreground hover:text-red-600 transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-muted">
                  <Users className="w-4 h-4" />
                  About
                </Link>
                <Link to="/blog" className="text-foreground hover:text-red-600 transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-muted">
                  <Shield className="w-4 h-4" />
                  Blog
                </Link>
              </div>
              
              {/* Action Buttons */}
              <Link to="/donor-signup" className="w-full">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Donor Portal
                </Button>
              </Link>
              <Link to="/hospital-signup" className="w-full">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Hospital Portal
                </Button>
              </Link>
              <Link to="/signin" className="w-full">
                <Button variant="ghost" className="w-full text-foreground hover:bg-muted">
                  SignIn
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MainNavigation;
