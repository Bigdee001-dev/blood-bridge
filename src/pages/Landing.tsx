
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart, Users, MapPin, Shield, Phone, Mail } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Landing = () => {
  // AI-generated avatar URLs for African men and women
  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&h=64&fit=crop&crop=face",
      quote: "I got an alert just 5km from my location. I donated within 2 hours. BloodBridge made saving a life so easy",
      author: "Akin, 24, Lagos",
      bgColor: "bg-green-400"
    },
    {
      avatar: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=64&h=64&fit=crop&crop=face",
      quote: "As a first-time donor, I was nervous. But the app guided me through everything, and now I donate regularly",
      author: "Fatima, Donor since May 2025",
      bgColor: "bg-pink-400"
    },
    {
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&crop=face",
      quote: "This app reduced our emergency blood search time by over 70%. It's a lifesaver literally",
      author: "Dr. Adeola, Lagos State Teaching Hospital, Ikeja",
      bgColor: "bg-blue-400"
    },
    {
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face",
      quote: "With BloodBridge, we now reach matching donors in minutes, not hours. It's become part of our emergency protocol",
      author: "Blood Bank Admin, Abuja",
      bgColor: "bg-purple-400"
    },
    {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      quote: "The notification system is incredible. I've helped save 5 lives in the past 6 months just by being available when needed",
      author: "Emeka, Regular Donor, Port Harcourt",
      bgColor: "bg-orange-400"
    },
    {
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=64&h=64&fit=crop&crop=face",
      quote: "BloodBridge connected me with a donor for my daughter's surgery within 30 minutes. Forever grateful",
      author: "Mrs. Adebayo, Mother, Ibadan",
      bgColor: "bg-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/03edd7df-814d-436c-b314-bbccd533d65a.png" 
              alt="BloodBridge Logo"
              className="w-8 h-8 object-contain"
            />
            <Heart className="absolute -top-1 -right-1 w-4 h-4 text-blood-red animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary text-xl font-bold tracking-wide">BloodBridge Naija</span>
            <span className="text-muted-foreground text-xs">Saving Lives Through Technology</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-blood-red transition-colors flex items-center gap-1">
            <Heart className="w-4 h-4" />
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-blood-red transition-colors flex items-center gap-1">
            <Users className="w-4 h-4" />
            About
          </Link>
          <Link to="/blog" className="text-foreground hover:text-blood-red transition-colors flex items-center gap-1">
            <Shield className="w-4 h-4" />
            Blog
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/donor-signup">
            <Button className="bg-blood-red hover:bg-blood-red/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Donate Blood
            </Button>
          </Link>
          <Link to="/hospital-signup">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
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
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                To be a hero, save a life
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Be the reason another person lives, come rescue others with just your blood!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donor-signup">
                  <Button size="lg" className="bg-blood-red hover:bg-blood-red/90 text-white px-8 py-4 text-lg w-full sm:w-auto rounded-full">
                    Donate now
                  </Button>
                </Link>
                <Link to="/hospital-signup">
                  <Button size="lg" variant="outline" className="border-muted-foreground text-muted-foreground hover:bg-muted px-8 py-4 text-lg w-full sm:w-auto rounded-full">
                    Partner as a hospital
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/03edd7df-814d-436c-b314-bbccd533d65a.png" 
                alt="Blood donation hero image"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How You Can Save A Life Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            How You Can Save A Life
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Create and Account</h3>
              <p className="text-muted-foreground">
                With our quick registration framework, you can sign up and get instant notification for blood donation requests within your environment and save a life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Real time donation and matching</h3>
              <p className="text-muted-foreground">
                Every 2mins a human like you needs blood to survive somewhere within your environment! Nearby eligible donors get instant notifications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Donate and track</h3>
              <p className="text-muted-foreground">
                Accept a match, donate blood, and see your impact. Track your donation history and earn badges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* For Donors Section */}
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                For Donors
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                You don't need superpowers to save a life. Just your phone and your willingness to help.
              </p>
              <p className="text-muted-foreground mb-8">
                Receive alerts, donate locally, and track your impact.
              </p>
              <Link to="/donor-signup">
                <Button className="bg-success-green hover:bg-success-green/90 text-white px-8 py-4 rounded-full">
                  Become a Donor Now
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/99502a96-62e5-45e1-8f9d-32e6a2cb1004.png" 
                alt="For Donors"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* For Hospitals Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative md:order-1">
              <img 
                src="/lovable-uploads/99502a96-62e5-45e1-8f9d-32e6a2cb1004.png" 
                alt="For Hospitals"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                For Hospitals
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Tired of blood shortages during emergencies? Post urgent requests. Get matched to nearby donors.
              </p>
              <p className="text-muted-foreground mb-8">
                Faster response. Better outcomes. Peace of mind.
              </p>
              <Link to="/hospital-signup">
                <Button className="bg-blood-red hover:bg-blood-red/90 text-white px-8 py-4 rounded-full">
                  Register as a hospital
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Giving Blood Made Easy */}
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Giving blood used to be difficult; now it's just a tap away
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start your journey and be part of Nigeria's life-saving movement
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donor-signup">
                  <Button size="lg" className="bg-blood-red hover:bg-blood-red/90 text-white px-8 py-4 rounded-full">
                    Donate now
                  </Button>
                </Link>
                <Link to="/hospital-signup">
                  <Button size="lg" variant="outline" className="border-muted-foreground text-muted-foreground hover:bg-muted px-8 py-4 rounded-full">
                    Partner as a hospital
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/99502a96-62e5-45e1-8f9d-32e6a2cb1004.png" 
                alt="Easy blood donation"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Testimonials
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                      <img 
                        src={testimonial.avatar} 
                        alt={`Avatar of ${testimonial.author}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.className = `w-16 h-16 ${testimonial.bgColor} rounded-full flex items-center justify-center`;
                          e.currentTarget.parentElement!.innerHTML = '<span class="text-white text-xl">👤</span>';
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.author}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                The Impact Of Your Actions
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Just one pint of your blood can save up to 3 lives.
              </p>
              <p className="text-muted-foreground mb-8">
                That's a child surviving an accident, a mother recovering from childbirth, or a patient completing surgery safely.
              </p>
              <p className="text-xl font-semibold text-primary mb-8">
                👉 Be the reason someone lives today
              </p>
              
              {/* Stats Cards */}
              <div className="space-y-4">
                <div className="bg-success-green/20 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-success-green font-semibold">Pints Donated by donor heroes</span>
                  <span className="text-2xl font-bold text-success-green">
                    <AnimatedCounter end={500} suffix="+" />
                  </span>
                </div>
                <div className="bg-primary/20 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-primary font-semibold">Hospitals using the dashboard</span>
                  <span className="text-2xl font-bold text-primary">
                    <AnimatedCounter end={40} suffix="+" />
                  </span>
                </div>
                <div className="bg-success-green/20 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-success-green font-semibold">Lives saved in 3 months</span>
                  <span className="text-2xl font-bold text-success-green">
                    <AnimatedCounter end={700} suffix="+" />
                  </span>
                </div>
                <div className="bg-success-green/20 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-success-green font-semibold">Match Rate on urgent requests</span>
                  <span className="text-2xl font-bold text-success-green">
                    <AnimatedCounter end={90} suffix="%" />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/8be75413-da94-4e3c-acf9-5c0f615461d4.png" 
                alt="Impact of blood donation"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="eligibility-age" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                At what age do I start donating blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                To donate blood, you need to be between the ages of 17 and 65 years and must weigh at least 50kg before donation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="frequency" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How often do I donate blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Donation of blood for men can be every 12 weeks, while women can donate every 16 weeks.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="duration" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How long does it take to donate blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Whole Blood donation usually takes between 45-60 minutes, while apheresis takes 1-2 hours.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="screening" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What happens before donating blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Before donating blood, all donors undergo a basic health screening, conducted by a health professional to check for temperature, heart rate, blood pressure, pulse rate, respiratory rate and hemoglobin levels. These records are stored on the donor's online profile.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="testing" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How are infectious diseases tested on donated blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All donated blood is tested for multiple disease markers. The blood is screened for common diseases such as Hepatitis B, Hepatitis C, HIV, type 1&2, syphilis, human T-lymphotropic virus, Babesia, before transfusion.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="compatibility" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How do I know I'm compatible?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Further Testing are done to identify the donor's blood group and Rh type to determine compatibility with the recipient. More screening is done for atypical or unusual red cell antibodies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+234-812-3456-789</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>bloodbridgenaija@gmail.com</span>
                </div>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Plot 15,VGC, Lekki Phase 1, Lagos State, Nigeria.</span>
                </p>
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

export default Landing;
