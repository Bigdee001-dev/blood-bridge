
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Home, Clock, Plus, Users, Calendar, LogOut, Award, Search, User } from "lucide-react";

const UrgentBloodRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">+</span>
            </div>
            <span className="text-xl font-bold">BLOODBRIDGE NAIJA</span>
          </div>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg">
              <Home className="w-5 h-5" />
              View Nearby requests
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg">
              <Clock className="w-5 h-5" />
              Donation History
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg">
              <Calendar className="w-5 h-5" />
              Schedule Donation
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg">
              <User className="w-5 h-5" />
              Profile
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg">
              <Award className="w-5 h-5" />
              Badges & Rewards
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg">
              <LogOut className="w-5 h-5" />
              Logout
            </a>
          </nav>
          
          <div className="mt-8">
            <h3 className="font-medium mb-3">Urgency Level</h3>
            <RadioGroup defaultValue="high">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high">High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low">Low</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-400" />
            <Input placeholder="Search" className="w-64" />
          </div>
          <div className="flex items-center gap-4">
            <User className="w-8 h-8 text-gray-400" />
            <span className="font-medium">Admin</span>
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-8">Request Urgent Blood Donation</h1>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="blood-type" className="text-lg font-medium">Blood Type Required</Label>
                  <div className="mt-2 p-4 border rounded-lg">
                    <span className="text-2xl font-bold">O+</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="units" className="text-lg font-medium">Units Required</Label>
                  <div className="mt-2 p-4 border rounded-lg">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="hospital" className="text-lg font-medium">Hospital/Clinic Name</Label>
                  <Input id="hospital" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="location" className="text-lg font-medium">Location/Address</Label>
                  <Input id="location" className="mt-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-person" className="text-lg font-medium">Contact Person</Label>
                    <Input id="contact-person" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-lg font-medium">Phone</Label>
                    <Input id="phone" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-lg font-medium">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    className="mt-2" 
                    placeholder="Emergency Surgery Patient"
                    rows={4}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3">
                    Send Request
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Illustration */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Donors nearby will be notified instantly.</h2>
              </div>
              <div className="w-full max-w-md">
                <img 
                  src="/lovable-uploads/bd1f956f-37d5-478e-b772-7af16f463837.png" 
                  alt="Blood donation illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentBloodRequest;
