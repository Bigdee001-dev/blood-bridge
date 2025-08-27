
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Home, Clock, Plus, Users, User, Bell } from "lucide-react";

const HospitalSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900 flex">
      {/* Sidebar */}
      <div className="w-16 bg-deep-blue flex flex-col items-center py-6 space-y-6">
        <Home className="w-6 h-6 text-white/60" />
        <Clock className="w-6 h-6 text-orange-400" />
        <Plus className="w-6 h-6 text-white/60" />
        <Users className="w-6 h-6 text-white/60" />
      </div>

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-white" />
            <User className="w-6 h-6 text-white bg-white/20 rounded-full p-1" />
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hospital Profile */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Hospital Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">BB</span>
                </div>
                <h3 className="font-semibold text-lg">Blood Bridge</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Address</label>
                  <p className="text-sm text-muted-foreground">Opposite FUTMINNA, Bosso, Minna</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Contact</label>
                  <p className="text-sm text-muted-foreground">info@bloodbridge.com</p>
                </div>
                <div>
                  <label className="text-sm font-medium">License & Certification</label>
                  <div className="flex gap-2 mt-2">
                    <div className="w-16 h-12 bg-gray-100 rounded border-2 border-red-500"></div>
                    <div className="w-16 h-12 bg-gray-100 rounded border-2 border-red-500"></div>
                  </div>
                  <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">Upload Certificate</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>New Blood Request</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span>Appointment Confirmation</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span>Low Inventory Alert</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span>Rejected Blood</span>
                <Switch defaultChecked />
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Push Notification Preference</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked />
                    <label className="text-sm">Email</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked />
                    <label className="text-sm">SMS</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked />
                    <label className="text-sm">Push</label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data and Compliance */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-orange-500">⚠️</span>
                Data and Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Backup frequency</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Daily" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Data retention policy</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="2 years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1year">1 year</SelectItem>
                    <SelectItem value="2years">2 years</SelectItem>
                    <SelectItem value="5years">5 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Consent form templates</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="2 years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="detailed">Detailed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">GDPR/HIPAA Compliance</span>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Interface preference */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-green-500">⚙️</span>
                Interface preference
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Light/Dark Mode</span>
                <Switch />
              </div>
              
              <div>
                <label className="text-sm font-medium">Language</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Font Scaling</label>
                <div className="flex items-center gap-4">
                  <span className="text-xs">A</span>
                  <Slider defaultValue={[50]} max={100} step={1} className="flex-1" />
                  <span className="text-lg">A</span>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Layout Compactness</label>
                <div className="mt-2 text-sm text-muted-foreground">
                  Adjust interface density
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HospitalSettings;
