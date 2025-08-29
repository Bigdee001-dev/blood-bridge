
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart, Users, MapPin, Shield } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900">
      {/* Navigation - Enhanced with health/blood themes */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blood-red to-deep-blue backdrop-blur-sm border-b border-blood-red/30 shadow-lg">
        <div className="flex items-center gap-3">
          {/* Enhanced Blood drop logo with health theme */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm">
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white drop-shadow-lg"
            >
              <path 
                d="M16 2C16 2 8 10 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 10 16 2 16 2Z" 
                fill="currentColor"
              />
              <circle cx="13" cy="16" r="2" fill="rgba(255,255,255,0.4)" />
              <path d="M18 14c1 0 2 1 2 2s-1 2-2 2" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
            </svg>
            <Heart className="absolute -top-1 -right-1 w-4 h-4 text-red-300 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xl font-bold tracking-wide">BloodBridge Naija</span>
            <span className="text-white/70 text-xs">Saving Lives Through Technology</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-red-200 transition-colors flex items-center gap-1">
            <Heart className="w-4 h-4" />
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-red-200 transition-colors flex items-center gap-1">
            <Users className="w-4 h-4" />
            About
          </Link>
          <Link to="/blog" className="text-white hover:text-red-200 transition-colors flex items-center gap-1">
            <Shield className="w-4 h-4" />
            Blog
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/donor-signup">
            <Button className="bg-success-green/90 hover:bg-success-green text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Donate Blood
            </Button>
          </Link>
          <Link to="/hospital-signup">
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Hospital Portal
            </Button>
          </Link>
          <Link to="/signin">
            <Button variant="ghost" className="text-white hover:bg-white/20 shadow-lg">
              SignIn
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section with blood splatter background */}
      <div 
        className="px-6 py-20 md:py-32 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/2733b4b2-094b-49b3-bf04-bb9fc7f3b253.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Be The Hero, Save a Life.
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Be the reason another person lives, come rescue others with just your blood!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donor-signup">
                <Button size="lg" className="bg-blood-red hover:bg-blood-red/90 text-white px-8 py-4 text-lg w-full sm:w-auto">
                  Donate Now!!
                </Button>
              </Link>
              <Link to="/hospital-signup">
                <Button size="lg" variant="outline" className="text-white border-white bg-deep-blue/20 hover:bg-deep-blue hover:text-white hover:border-deep-blue px-8 py-4 text-lg w-full sm:w-auto">
                  Partner as a hospital/Blood Bank
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blood-red rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">♥</span>
                  </div>
                  <p className="text-white font-semibold">Blood Donation</p>
                  <p className="text-white/80">Save Lives Today</p>
                </div>
              </div>
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
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blood-red rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <p className="text-foreground">
                  Thousands of people die from blood-related complications every year. You can save a life by signing up to get instant notification for blood donation requests within your environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blood-red rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <p className="text-foreground">
                  Every 2 minutes, a human like you needs blood to survive somewhere within your environment. Be the hero without a cape. <strong>Click donate now and save a life</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blood-red rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-2xl">🇳🇬</span>
                </div>
                <p className="text-foreground">
                  Nigeria requires about 2million pints of blood each year, but only 25% of that amount is met. You can be the reason someone lives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* For Donors and Hospitals */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-success-green/10 border-success-green/20">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-success-green">For Donors</h3>
                <p className="text-foreground">
                  You don't need superpowers to save a life. Just your phone and your willingness to help.
                </p>
                <p className="text-foreground">
                  Receive alerts, donate locally, and track your impact.
                </p>
                <Link to="/donor-signup">
                  <Button className="bg-success-green hover:bg-success-green/90 text-white">
                    Become a Donor Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-deep-blue/10 border-deep-blue/20">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-deep-blue">For Hospitals</h3>
                <p className="text-foreground">
                  Tired of blood shortages during emergencies? Post urgent requests. Get matched to nearby donors. Faster response. Better outcomes. Peace of mind.
                </p>
                <Link to="/hospital-signup">
                  <Button className="bg-deep-blue hover:bg-deep-blue/90 text-white">
                    Request Access to Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            Blood Donation Made Easy with Blood Bridge Naija
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-foreground">When you donate blood, you get a free blood screening</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-foreground">When you donate blood regularly, you reduce the risk at which you develop any heart disease or attack</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">3</span>
                </div>
                <p className="text-foreground">Every donation allows your body to increase its blood production capabilities and also improve your cardiovascular health</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">4</span>
                </div>
                <p className="text-foreground">Potential cancer reduction by lowering iron levels. You reduce every possibility of potential blood cancer by lowering your iron levels during blood donation</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Giving blood used to be difficult; now it's just a tap away
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Start your journey and be part of Nigeria's life-saving movement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donor-signup">
                <Button size="lg" className="bg-success-green hover:bg-success-green/90 text-white px-8 py-4">
                  Become a donor
                </Button>
              </Link>
              <Link to="/hospital-signup">
                <Button size="lg" variant="outline" className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white px-8 py-4">
                  Partner as Hospital/Blood Bank
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            What Our Users Say
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <ScrollArea className="h-96 w-full rounded-md border p-4">
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                          <img 
                            src={testimonial.avatar} 
                            alt={`Avatar of ${testimonial.author}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to colored circle if image fails to load
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
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Stats Section with Animated Counters */}
      <div className="px-6 py-20 bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-4xl font-bold text-blood-red mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </h3>
              <p className="text-white/80">Pints Donated by donor heroes</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-success-green mb-2">
                <AnimatedCounter end={40} suffix="+" />
              </h3>
              <p className="text-white/80">Hospitals using the dashboard</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter end={700} suffix="+" />
              </h3>
              <p className="text-white/80">lives saved in 3 months</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter end={90} suffix="%" />
              </h3>
              <p className="text-white/80">Match Rate on urgent requests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            The Impact Of Your Actions
          </h2>
          <div className="bg-blood-red/10 rounded-xl p-8 mb-8">
            <p className="text-2xl font-bold text-blood-red mb-4">
              Just one pint of your blood can save up to 3 lives.
            </p>
            <p className="text-lg text-muted-foreground">
              That's a child surviving an accident, a mother recovering from childbirth, or a patient completing surgery safely.
            </p>
          </div>
          <p className="text-xl font-semibold text-primary mb-8">
            👉 Be the reason someone lives today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donor-signup">
              <Button size="lg" className="bg-blood-red hover:bg-blood-red/90 text-white px-8 py-4">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/hospital-signup">
              <Button size="lg" variant="outline" className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white px-8 py-4">
                Join as a Hospital
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="eligibility-age" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                At what age do I start donating blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                To donate blood, you need to be between the ages of 17 and 65 years and must weigh at least 50kg before donation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="frequency" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How often do I donate blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Donation of blood for men can be every 12 weeks, while women can donate every 16 weeks.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="duration" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How long does it take to donate blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Whole Blood donation usually takes between 45-60 minutes, while apheresis takes 1-2 hours.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="screening" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What happens before donating blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Before donating blood, all donors undergo a basic health screening, conducted by a health professional to check for temperature, heart rate, blood pressure, pulse rate, respiratory rate and hemoglobin levels. These records are stored on the donor's online profile.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="testing" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How are infectious diseases tested on donated blood?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All donated blood is tested for multiple disease markers. The blood is screened for common diseases such as Hepatitis B, Hepatitis C, HIV, type 1&2, syphilis, human T-lymphotropic virus, Babesia, before transfusion.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="compatibility" className="bg-white rounded-lg px-6">
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

      {/* Newsletter Section */}
      <div className="px-6 py-20 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to receive health tips from us
          </h2>
          <p className="text-white/80 mb-8">
            Stay updated with the latest health information and blood donation tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white"
            />
            <Button className="bg-blood-red hover:bg-blood-red/90 text-white">
              Subscribe
            </Button>
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

export default Landing;
