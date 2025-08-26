import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HospitalDashboard = () => {
  const upcomingAppointments = [
    { date: "July 2025", day: 2, status: "booked" },
    { date: "July 2025", day: 5, status: "available" },
    { date: "July 2025", day: 11, status: "available" },
    { date: "July 2025", day: 12, status: "available" },
    { date: "July 2025", day: 15, status: "busy" },
    { date: "July 2025", day: 22, status: "available" },
    { date: "July 2025", day: 28, status: "available" },
    { date: "July 2025", day: 29, status: "available" },
  ];

  const rejectionReasons = [
    { reason: "Low Hemoglobin", count: 15 },
    { reason: "High blood pressure", count: 8 },
    { reason: "Recent donor", count: 5 },
    { reason: "Other", count: 10 },
  ];

  const inventory = [
    { type: "A+", units: 45 },
    { type: "O+", units: 38 },
    { type: "B+", units: 22 },
    { type: "AB+", units: 12 },
    { type: "A-", units: 18 },
    { type: "O-", units: 25 },
    { type: "B-", units: 15 },
    { type: "AB-", units: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">+</span>
          </div>
          <span className="text-primary text-xl font-semibold">BloodBridge</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <span className="text-primary">A+</span>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-white min-h-screen border-r p-4">
          <nav className="space-y-2">
            <div className="p-3 bg-blood-red/10 text-blood-red rounded-lg font-medium">
              🏠 Dashboard
            </div>
            <div className="p-3 text-muted-foreground hover:bg-gray-50 rounded-lg">
              📊 Analytics
            </div>
            <div className="p-3 text-muted-foreground hover:bg-gray-50 rounded-lg">
              🩸 Inventory
            </div>
            <div className="p-3 text-muted-foreground hover:bg-gray-50 rounded-lg">
              👥 Donors
            </div>
            <div className="p-3 text-muted-foreground hover:bg-gray-50 rounded-lg">
              ➕ Add Request
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Activity Feed */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-lg font-semibold">Activity Feed</h2>
              <Badge variant="outline" className="text-green-600 border-green-200">
                Blood donor is registered
              </Badge>
              <Badge variant="outline" className="text-orange-600 border-orange-200">
                Blood request is registered
              </Badge>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blood-red mb-2">1,475</div>
                <div className="text-sm text-muted-foreground">Total Requests</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">800</div>
                <div className="text-sm text-muted-foreground">Blood Units Available</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">720</div>
                <div className="text-sm text-muted-foreground">Pending Requests</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-success-green mb-2">19</div>
                <div className="text-sm text-muted-foreground">Upcoming Appointments</div>
              </CardContent>
            </Card>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Inventory */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Inventory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {inventory.map((item) => (
                      <div key={item.type} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.type.includes('A') ? 'bg-red-500' : 
                            item.type.includes('B') ? 'bg-orange-500' : 
                            item.type.includes('AB') ? 'bg-green-500' :
                            'bg-blue-500'
                          }`}></div>
                          <span className="font-medium">{item.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{item.units}</span>
                          <span className="text-muted-foreground">Units</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Minor Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Minor Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">General Information</span>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Blood Group</span>
                        <span className="text-sm font-medium">O+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Last Donation</span>
                        <span className="text-sm font-medium">12 Weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Eligibility</span>
                        <span className="text-sm font-medium">17 Weeks</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Phone</span>
                      <span className="text-sm">09091079465</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <span className="text-sm">g.p.c2019@gmail.com</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blood-red hover:bg-blood-red/90 text-white">
                    More Options
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                  <div className="text-center text-primary font-medium">July 2025</div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="text-center text-sm text-muted-foreground font-medium py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({length: 31}, (_, i) => i + 1).map((day) => {
                      const appointment = upcomingAppointments.find(a => a.day === day);
                      return (
                        <div
                          key={day}
                          className={`text-center text-sm py-2 rounded ${
                            appointment?.status === 'booked' 
                              ? 'bg-blood-red text-white' 
                              : appointment?.status === 'busy'
                              ? 'bg-purple-500 text-white'
                              : 'text-foreground hover:bg-gray-100'
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                  <Button className="w-full mt-4 bg-blood-red hover:bg-blood-red/90 text-white">
                    Request Donation
                  </Button>
                </CardContent>
              </Card>

              {/* Weekly Donation Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Chart visualization area</span>
                  </div>
                </CardContent>
              </Card>

              {/* Blood Type Donated Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Blood Type Donated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Blood type distribution chart</span>
                  </div>
                </CardContent>
              </Card>

              {/* Rejection Reasons */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rejection Reasons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {rejectionReasons.map((item) => (
                      <div key={item.reason} className="flex justify-between items-center">
                        <span className="text-sm">{item.reason}</span>
                        <Badge variant="outline">{item.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;