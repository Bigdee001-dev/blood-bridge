
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, MapPin, Shield, Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900">
      {/* Navigation */}
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

      {/* Hero Section */}
      <div className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/9e04391c-4b19-475f-9a9e-2a0cf7a02c59.png" 
              alt="Healthcare team meeting in professional hospital setting"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About BloodBridge Naija
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Bridging the gap between life and hope through technology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Problem Statement */}
          <div className="mb-16">
            <Card className="p-8 bg-blood-red/5 border-blood-red/20">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-bold text-primary mb-6">The Challenge We Face</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  Nigeria faces a critical shortage of safe, donated blood, especially during emergencies. Countless patients in emergencies, surgeries, childbirth, and accidents struggle because hospitals and blood banks can't access enough voluntary donors quickly.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  This has been the faith of the ordinary Nigerian, the health system has failed the ordinary Nigerians and at BloodBridge Naija we decided to help bridge the gap between voluntary blood donors and hospitals/blood banks that need blood to save lives in real-time.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Are */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Are</h2>
              <div className="w-24 h-1 bg-blood-red mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-8">
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed">
                    We're a platform - a digital health platform designed to improve emergency blood access in Nigeria by connecting voluntary donors with hospitals and blood banks in real time.
                  </p>
                </CardContent>
              </Card>
              <div className="relative">
                <img 
                  src="/lovable-uploads/6193fb57-cbec-4ab1-a1eb-3faa2da8115b.png" 
                  alt="Healthcare worker in professional medical environment"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-success-green/5 border-success-green/20">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-success-green" />
                  <h3 className="text-2xl font-bold text-success-green">Our Vision</h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  A Nigeria where every patient in need of blood has access to safe and timely donation without fear, delay, or scarcity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-deep-blue/5 border-deep-blue/20">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-deep-blue" />
                  <h3 className="text-2xl font-bold text-deep-blue">Our Mission</h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  To build a nationwide network of voluntary blood donors and connect them with hospitals in real time through technology, awareness, and community.
                </p>
              </CardContent>
            </Card>
          </div>

            {/* How We Achieve That */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">How We Achieve That</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 bg-success-green/5 border-success-green/20">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-success-green" />
                    <h3 className="text-xl font-bold text-success-green">For Donors</h3>
                  </div>
                  <p className="text-foreground">
                    We make it easy to register, get notified when your blood type is needed, and donate safely at certified hospitals and blood banks. You save lives with just a click.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-deep-blue/5 border-deep-blue/20">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-deep-blue" />
                    <h3 className="text-xl font-bold text-deep-blue">For Hospitals & Blood Banks</h3>
                  </div>
                  <p className="text-foreground">
                    We provide a trusted pool of ready and willing donors, reducing shortages and delays in emergency cases.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/a4ebf398-98fb-4b4c-916a-3573bf3e5e91.png" 
                alt="Modern surgical room with advanced medical equipment"
                className="w-full max-w-2xl h-48 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Technology Section */}
          <div className="mb-16">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Technology</h2>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  BloodBridge Naija uses a special technology involving geolocation to match donors with blood requests posted by hospitals/blood banks in their vicinity.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-4">Our Matching Logic Considers:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1" />
                    <span className="text-foreground">Donor blood group</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1" />
                    <span className="text-foreground">Current location</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1" />
                    <span className="text-foreground">Donation eligibility (time since last donation)</span>
                  </div>
                </div>
                
                <p className="text-foreground mt-6">
                  Hospitals can monitor blood request progress: Sent, Matched, In Progress, Fulfilled, and an option to cancel fulfilled or withdrawn requests.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blood-red to-deep-blue rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you're a donor or a healthcare provider, BloodBridge Naija makes it easier, faster, and safer to save lives. Join us to improve the Nigeria health system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donor-signup">
                <Button size="lg" className="bg-success-green hover:bg-success-green/90 text-white px-8 py-4">
                  Become a Donor
                </Button>
              </Link>
              <Link to="/hospital-signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                  Partner as Hospital
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blood-red"
                  >
                    <path 
                      d="M16 2C16 2 8 10 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 10 16 2 16 2Z" 
                      fill="currentColor"
                    />
                    <circle cx="13" cy="16" r="2" fill="rgba(255,255,255,0.3)" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">BloodBridge</span>
              </div>
              <p className="text-white/80 text-sm">Saving lives one donation at a time</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block text-white/80 hover:text-white">Home</Link>
                <Link to="/about" className="block text-white/80 hover:text-white">About</Link>
                <Link to="/blog" className="block text-white/80 hover:text-white">Blog</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>+234-812-3456-789</p>
                <p>📧 bloodbridgenaija@gmail.com</p>
                <p>📍 Plot 15,VGC, Lekki Phase 1, Lagos State, Nigeria.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61580110702321" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm">f</span>
                </a>
                <a 
                  href="https://www.instagram.com/bloodbridgenaija?igsh=cnZyZGhxdTF5dndj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm">i</span>
                </a>
                <a 
                  href="https://x.com/bloodbridg2438?s=09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm">x</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>© 2024 BloodBridge Naija. All rights reserved.</p>
            <a 
              href="https://www.notion.so/Terms-And-Conditions-2541b97b113380f2a0b4d0fb5fd477d0?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 md:mt-0"
            >
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                Terms and Conditions
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
