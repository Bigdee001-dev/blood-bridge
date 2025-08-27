
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Clock, Plus, Users, Bell, User } from "lucide-react";

const BloodInventory = () => {
  const bloodUnits = [
    { type: "A+", quantity: 70, collected: "May 22, 2025", expires: "Nov 22, 2025" },
    { type: "A-", quantity: 50, collected: "July 22, 2025", expires: "Nov 22, 2025" },
    { type: "AB+", quantity: 70, collected: "May 22, 2025", expires: "Nov 22, 2025" },
    { type: "AB-", quantity: 70, collected: "May 22, 2025", expires: "Nov 22, 2025" },
    { type: "B+", quantity: 70, collected: "May 22, 2025", expires: "Nov 22, 2025" },
    { type: "B-", quantity: 70, collected: "May 22, 2025", expires: "Nov 22, 2025" },
    { type: "O+", quantity: 70, collected: "May 22, 2025", expires: "Nov 22, 2025" },
    { type: "O-", quantity: 70, collected: "May 22, 2025", expires: "Nov 22, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900 flex">
      {/* Sidebar */}
      <div className="w-16 bg-deep-blue flex flex-col items-center py-6 space-y-6">
        <Home className="w-6 h-6 text-orange-400" />
        <Clock className="w-6 h-6 text-white/60" />
        <Plus className="w-6 h-6 text-white/60" />
        <Users className="w-6 h-6 text-white/60" />
      </div>

      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Blood Inventory</h1>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-white" />
            <User className="w-6 h-6 text-white bg-white/20 rounded-full p-1" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl">🩸</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Donation (This Month)</p>
                  <p className="text-2xl font-bold">1,475</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-500 text-xl">🩸</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Blood Units Available</p>
                  <p className="text-2xl font-bold">800</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div className="mb-8">
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-lg">Activity Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">M</span>
                </div>
                <span>Donor Mercy booked an appointment</span>
                <span className="text-sm text-white/60 ml-auto">1 hour ago</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blood Units Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {bloodUnits.map((unit, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Blood Type</span>
                    <span className="font-bold text-lg">{unit.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Quantity</span>
                    <span>{unit.quantity} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Date Collected</span>
                    <span>{unit.collected}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Expires on</span>
                    <span>{unit.expires}</span>
                  </div>
                  <div className="flex gap-2 pt-3">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add New Units Button */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add New Units
        </Button>
      </div>
    </div>
  );
};

export default BloodInventory;
