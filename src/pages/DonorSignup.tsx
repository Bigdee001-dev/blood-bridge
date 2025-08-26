import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const DonorSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">+</span>
            </div>
            <span className="text-primary text-xl font-semibold">BloodBridge Naija</span>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Create Your Account</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+234..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Male" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label>Blood Group <span className="text-blood-red">*</span></Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="O+" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="o+">O+</SelectItem>
                  <SelectItem value="o-">O-</SelectItem>
                  <SelectItem value="a+">A+</SelectItem>
                  <SelectItem value="a-">A-</SelectItem>
                  <SelectItem value="b+">B+</SelectItem>
                  <SelectItem value="b-">B-</SelectItem>
                  <SelectItem value="ab+">AB+</SelectItem>
                  <SelectItem value="ab-">AB-</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Genotype</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="AA" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aa">AA</SelectItem>
                <SelectItem value="as">AS</SelectItem>
                <SelectItem value="ss">SS</SelectItem>
                <SelectItem value="ac">AC</SelectItem>
                <SelectItem value="sc">SC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Any pre-existing medical condition?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="diabetes">Diabetes</SelectItem>
                <SelectItem value="hypertension">Hypertension</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Last Donation Date</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="First time donor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-time">First time donor</SelectItem>
                  <SelectItem value="3-months">3 months ago</SelectItem>
                  <SelectItem value="6-months">6 months ago</SelectItem>
                  <SelectItem value="1-year">1 year ago</SelectItem>
                  <SelectItem value="more">More than 1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Current Location <span className="text-blood-red">*</span></Label>
              <Input id="location" placeholder="Enter your location" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Preferred Donation Radius</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="10km" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5km">5km</SelectItem>
                  <SelectItem value="10km">10km</SelectItem>
                  <SelectItem value="25km">25km</SelectItem>
                  <SelectItem value="50km">50km</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="centers">Preferred Donation Center(s)</Label>
              <Input id="centers" placeholder="Select centers" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-primary" />
              <Label htmlFor="terms" className="text-sm">
                I agree to donate blood voluntarily and understand the eligibility requirements.
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="contact" className="border-primary" />
              <Label htmlFor="contact" className="text-sm">
                I allow BloodBridge Naija to contact me for donation reminders and nearby requests.
              </Label>
            </div>
          </div>

          <Button className="w-full bg-blood-red hover:bg-blood-red/90 text-white py-3 text-lg">
            Sign Up
          </Button>

          <div className="text-center">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/signin" className="text-blood-red hover:underline font-medium">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonorSignup;