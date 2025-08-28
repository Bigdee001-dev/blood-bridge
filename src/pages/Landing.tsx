
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900">
      {/* Navigation - Made sticky with red background */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-blood-red backdrop-blur-sm border-b border-blood-red/30">
        <div className="flex items-center gap-2">
          {/* Blood drop logo */}
          <div className="w-8 h-8 flex items-center justify-center">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M16 2C16 2 8 10 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 10 16 2 16 2Z" 
                fill="currentColor"
              />
              <circle cx="13" cy="16" r="2" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>
          <span className="text-white text-xl font-semibold">BloodBridge Naija</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-white/80 transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-white/80 transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/donor-signup">
            <Button variant="outline" className="text-white border-white bg-success-green/20 hover:bg-success-green hover:text-white hover:border-success-green transition-all">
              Donor
            </Button>
          </Link>
          <Link to="/hospital-signup">
            <Button variant="outline" className="text-white border-white bg-deep-blue/20 hover:bg-deep-blue hover:text-white hover:border-deep-blue transition-all">
              Hospital
            </Button>
          </Link>
          <Link to="/signin">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              SignIn
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Be The Hero, Save a Life.
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-400 rounded-full mx-auto"></div>
                <p className="text-sm text-muted-foreground italic">
                  "I got an alert just 5km from my location. I donated within 2 hours. BloodBridge made saving a life so easy"
                </p>
                <p className="text-sm font-semibold">- Akin, 24, Lagos</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-pink-400 rounded-full mx-auto"></div>
                <p className="text-sm text-muted-foreground italic">
                  "As a first-time donor, I was nervous. But the app guided me through everything, and now I donate regularly"
                </p>
                <p className="text-sm font-semibold">- Fatima, Donor since May 2025</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto"></div>
                <p className="text-sm text-muted-foreground italic">
                  "This app reduced our emergency blood search time by over 70%. It's a lifesaver literally"
                </p>
                <p className="text-sm font-semibold">- Dr. Adeola, Lagos State Teaching Hospital, Ikeja</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-400 rounded-full mx-auto"></div>
                <p className="text-sm text-muted-foreground italic">
                  "With BloodBridge, we now reach matching donors in minutes, not hours. It's become part of our emergency protocol"
                </p>
                <p className="text-sm font-semibold">- Blood Bank Admin, Abuja</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-4xl font-bold text-blood-red mb-2">500+</h3>
              <p className="text-white/80">Pints Donated by donor heroes</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-success-green mb-2">40+</h3>
              <p className="text-white/80">Hospitals using the dashboard</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">700+</h3>
              <p className="text-white/80">lives saved in 3 months</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-400 mb-2">90%</h3>
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
