import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const HospitalSignup = () => {
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
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Hospital Information</h3>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hospitalName">Hospital Name</Label>
            <Input id="hospitalName" placeholder="Enter hospital name" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Hospital Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Public" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="teaching">Teaching Hospital</SelectItem>
                  <SelectItem value="specialist">Specialist Hospital</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="regNumber">Registration Number</Label>
              <Input id="regNumber" placeholder="Hospital registration number" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+234..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Official Email Address</Label>
              <Input id="email" type="email" placeholder="hospital@email.com" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Location & Contact Person</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address">Full Hospital Address</Label>
              <Input id="address" placeholder="Enter full address" />
            </div>
            <div className="space-y-2">
              <Label>State</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Abia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abia">Abia</SelectItem>
                  <SelectItem value="adamawa">Adamawa</SelectItem>
                  <SelectItem value="akwa-ibom">Akwa Ibom</SelectItem>
                  <SelectItem value="anambra">Anambra</SelectItem>
                  <SelectItem value="bauchi">Bauchi</SelectItem>
                  <SelectItem value="bayelsa">Bayelsa</SelectItem>
                  <SelectItem value="benue">Benue</SelectItem>
                  <SelectItem value="borno">Borno</SelectItem>
                  <SelectItem value="cross-river">Cross River</SelectItem>
                  <SelectItem value="delta">Delta</SelectItem>
                  <SelectItem value="ebonyi">Ebonyi</SelectItem>
                  <SelectItem value="edo">Edo</SelectItem>
                  <SelectItem value="ekiti">Ekiti</SelectItem>
                  <SelectItem value="enugu">Enugu</SelectItem>
                  <SelectItem value="gombe">Gombe</SelectItem>
                  <SelectItem value="imo">Imo</SelectItem>
                  <SelectItem value="jigawa">Jigawa</SelectItem>
                  <SelectItem value="kaduna">Kaduna</SelectItem>
                  <SelectItem value="kano">Kano</SelectItem>
                  <SelectItem value="katsina">Katsina</SelectItem>
                  <SelectItem value="kebbi">Kebbi</SelectItem>
                  <SelectItem value="kogi">Kogi</SelectItem>
                  <SelectItem value="kwara">Kwara</SelectItem>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="nasarawa">Nasarawa</SelectItem>
                  <SelectItem value="niger">Niger</SelectItem>
                  <SelectItem value="ogun">Ogun</SelectItem>
                  <SelectItem value="ondo">Ondo</SelectItem>
                  <SelectItem value="osun">Osun</SelectItem>
                  <SelectItem value="oyo">Oyo</SelectItem>
                  <SelectItem value="plateau">Plateau</SelectItem>
                  <SelectItem value="rivers">Rivers</SelectItem>
                  <SelectItem value="sokoto">Sokoto</SelectItem>
                  <SelectItem value="taraba">Taraba</SelectItem>
                  <SelectItem value="yobe">Yobe</SelectItem>
                  <SelectItem value="zamfara">Zamfara</SelectItem>
                  <SelectItem value="fct">FCT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lga">Local Government Area (LGA)</Label>
              <Input id="lga" placeholder="Enter LGA" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Person Name</Label>
              <Input id="contactName" placeholder="Contact person name" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactRole">Contact Person Role</Label>
              <Input id="contactRole" placeholder="Job title/role" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Contact Person Phone</Label>
              <Input id="contactPhone" placeholder="+234..." />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="confirm" className="border-primary" />
              <Label htmlFor="confirm" className="text-sm">
                I confirm this information is correct and I am an authorized representative of this hospital.
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-primary" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-orange-500 hover:underline">
                  Terms of Use and Privacy Policy
                </Link>
              </Label>
            </div>
          </div>

          <Button className="w-full bg-blood-red hover:bg-blood-red/90 text-white py-3 text-lg">
            Create Hospital Account
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

export default HospitalSignup;