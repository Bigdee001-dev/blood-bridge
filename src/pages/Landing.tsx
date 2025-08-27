
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900">
      {/* Navigation - Made sticky */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">+</span>
          </div>
          <span className="text-white text-xl font-semibold">BloodBridge Naija</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-light-blue transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-light-blue transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-light-blue transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/donor-signup">
            <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
              Donor
            </Button>
          </Link>
          <Link to="/hospital-signup">
            <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
              Hospital
            </Button>
          </Link>
          <Link to="/signin">
            <Button variant="ghost" className="text-white border-white hover:bg-white/20">
              SignIn
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-blood-red hover:bg-blood-red/90 text-white">
              SignUp
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Saving Lives with Real-Time Blood Donation Matching
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Connecting hospitals with voluntary blood donors in real time
            </p>
            <Link to="/donor-signup">
              <Button size="lg" className="bg-blood-red hover:bg-blood-red/90 text-white px-8 py-4 text-lg">
                Register Now
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blood-red rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">♥</span>
                  </div>
                  <p className="text-white font-semibold">Blood Donation</p>
                  <p className="text-white/80">Save Lives Today</p>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <Card className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-orange-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-500">5K+</p>
                  <p className="text-muted-foreground">Blood donors and counting</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Why BloodBridge Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">👩‍⚕️</span>
                </div>
                <p className="text-primary font-semibold">Medical Professional</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Why BloodBridge Naija?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blood-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">♦</span>
                </div>
                <p className="text-foreground">90% of Nigerians lack access to safe blood</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blood-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">♦</span>
                </div>
                <p className="text-foreground">Every 2 seconds, someone is in need of blood for surgeries, cancer, traumatic injuries, or even chronic illness</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blood-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">♦</span>
                </div>
                <p className="text-foreground">Most donations happen only during emergency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Testimonials
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-green-400 rounded-full mx-auto"></div>
                  <p className="text-sm text-muted-foreground italic">
                    "I never imagined donating blood could be this easy. I got a call within minutes, and that day, I helped save someone's life."
                  </p>
                  <p className="text-sm font-semibold">- Adebayo O., Lifesaver in Abuja</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute right-0 top-0 w-32 h-32">
            <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl">👨‍⚕️</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to be the change?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Donate blood and help save someone's life
          </p>
          <Link to="/donor-signup">
            <Button size="lg" className="bg-blood-red hover:bg-blood-red/90 text-white px-8 py-4 text-lg">
              Register Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">+</span>
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
                <Link to="/contact" className="block text-white/80 hover:text-white">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>+234-812-3456-789</p>
                <p>example@gmail.com</p>
                <p>Engr. Ibrahim street, off ogbomoso</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">x</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>© 2024 BloodBridge Naija. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
