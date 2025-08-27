
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, Droplet, Plus, Users, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const Sidebar = () => (
    <div className="w-16 bg-primary min-h-screen flex flex-col items-center py-6 space-y-6">
      <Link to="/donor-dashboard" className="text-white hover:text-blood-red">
        <Home size={24} />
      </Link>
      <div className="text-white hover:text-blood-red">
        <Droplet size={24} />
      </div>
      <div className="text-white hover:text-blood-red">
        <Plus size={24} />
      </div>
      <div className="text-white hover:text-blood-red">
        <Users size={24} />
      </div>
    </div>
  );

  const ProfileTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            My profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-b from-gray-200 to-teal-400 p-6 rounded-lg w-64">
              <div className="text-center space-y-2">
                <div className="bg-blood-red text-white p-1 rounded text-xs w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  O+
                </div>
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Male</p>
                <div className="text-xs space-y-1">
                  <p>Date of Birth: 05/08/2004</p>
                  <p>Phone: 08137750287</p>
                  <p>Last donated: 04/07/2026</p>
                  <p>Eligibility: 17 days</p>
                </div>
                <div className="bg-black text-white p-1 rounded text-xs">
                  BLOODBRIDGE
                  <br />
                  VERIFIED USER
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Personal details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullname">Full name</Label>
                <Input id="fullname" defaultValue="john_doe" />
              </div>
              <div className="flex items-end">
                <Button variant="outline" size="sm">Save</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="johndoe.324@gmail.com" />
              </div>
              <div className="flex items-end">
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" defaultValue="08137750287" />
              </div>
              <div className="flex items-end">
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dob">Date of birth</Label>
                <Input id="dob" defaultValue="05/08/2004" />
              </div>
              <div className="flex items-end">
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select defaultValue="male">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="profile-photo">Profile Photo</Label>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="flex items-end">
                <Button variant="outline" size="sm">Upload</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const BloodDonationTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blood-red">
          <Droplet className="h-5 w-5" />
          Blood Donation Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Blood Type:</Label>
            <p className="font-medium">O+</p>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" size="sm">Edit</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Preferred Clinic:</Label>
            <p className="font-medium">FMC Bosso</p>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" size="sm">Edit</Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Label>Willing to donate organ</Label>
          <Switch defaultChecked />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Eligibility status</span>
            </div>
            <p className="text-lg font-semibold">Eligible in 17 days</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Last Donation Date</span>
            </div>
            <p className="text-lg font-semibold">July 14, 2025</p>
          </Card>
        </div>
      </CardContent>
    </Card>
  );

  const NotificationTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notification preference
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label>SMS Reminders</Label>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label>Email Alerts</Label>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label>Push Notification</Label>
          <Switch defaultChecked />
        </div>
        <div className="space-y-2">
          <Label>Frequency</Label>
          <Select defaultValue="urgent">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">Urgent only</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );

  const SecurityTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blood-red">
          <div className="w-5 h-5 border border-current rounded"></div>
          Security settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label>Password</Label>
            <Input type="password" value="••••••••••••••••••••" className="mt-1 w-64" disabled />
          </div>
          <Button variant="outline">Change password</Button>
        </div>
        <div className="flex items-center justify-between">
          <Label>Enable/Disable 2 - Factor Authentication</Label>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label>Push Notification</Label>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <div className="bg-white p-6 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">User Settings</h1>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-gray-500" />
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-sm">▼</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="profile" className="data-[state=active]:text-blood-red">
                My profile
              </TabsTrigger>
              <TabsTrigger value="blood" className="data-[state=active]:text-blood-red">
                Blood Donation Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:text-blood-red">
                Notification preference
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:text-blood-red">
                Security settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <ProfileTab />
            </TabsContent>
            <TabsContent value="blood">
              <BloodDonationTab />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationTab />
            </TabsContent>
            <TabsContent value="security">
              <SecurityTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
