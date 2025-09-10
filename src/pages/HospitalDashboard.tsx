
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/DashboardLayout";

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

  const bloodTypeData = [
    { type: "O-", percentage: 15, color: "bg-red-600" },
    { type: "O+", percentage: 38, color: "bg-red-500" },
    { type: "A-", percentage: 6, color: "bg-orange-500" },
    { type: "A+", percentage: 34, color: "bg-yellow-500" },
    { type: "B-", percentage: 2, color: "bg-green-500" },
    { type: "B+", percentage: 9, color: "bg-blue-500" },
    { type: "AB-", percentage: 1, color: "bg-purple-500" },
    { type: "AB+", percentage: 3, color: "bg-pink-500" },
  ];

  return (
    <DashboardLayout userType="hospital">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Activity Feed with Hero Image */}
        <div className="mb-6">
          <div className="relative mb-6">
            <img 
              src="/lovable-uploads/1cafaa86-c65e-44b3-97cd-b51c5738dea0.png" 
              alt="Healthcare team collaborating with medical technology"
              className="w-full h-48 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
              <h1 className="text-white text-2xl md:text-4xl font-bold text-center">Hospital Dashboard</h1>
            </div>
          </div>
          
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blood-red mb-2">1,475</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Total Requests</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">800</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Blood Units Available</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">720</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Pending Requests</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-success-green mb-2">19</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Upcoming Appointments</div>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Inventory */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Inventory</CardTitle>
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
                        <span className="font-medium text-sm sm:text-base">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base">{item.units}</span>
                        <span className="text-muted-foreground text-sm">Units</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Minor Management */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Minor Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">General Information</span>
                    <Button variant="ghost" size="sm" className="text-xs">Edit</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm">Blood Group</span>
                      <span className="text-xs sm:text-sm font-medium">O+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm">Last Donation</span>
                      <span className="text-xs sm:text-sm font-medium">12 Weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm">Eligibility</span>
                      <span className="text-xs sm:text-sm font-medium">17 Weeks</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Phone</span>
                    <span className="text-xs sm:text-sm">09091079465</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Email</span>
                    <span className="text-xs sm:text-sm">g.p.c2019@gmail.com</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blood-red hover:bg-blood-red/90 text-white text-sm">
                  More Options
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Upcoming Appointments</CardTitle>
                <div className="text-center text-primary font-medium">July 2025</div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                    <div key={day} className="text-center text-xs sm:text-sm text-muted-foreground font-medium py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {Array.from({length: 31}, (_, i) => i + 1).map((day) => {
                    const appointment = upcomingAppointments.find(a => a.day === day);
                    return (
                      <div
                        key={day}
                        className={`text-center text-xs sm:text-sm py-1 sm:py-2 rounded ${
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
                <Button className="w-full mt-4 bg-blood-red hover:bg-blood-red/90 text-white text-sm">
                  Request Donation
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Donation Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Weekly Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 sm:h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Chart visualization area</span>
                </div>
              </CardContent>
            </Card>

            {/* Blood Type Donated Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Blood Type Donated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {bloodTypeData.map((item) => (
                    <div key={item.type} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <span className="text-sm flex-1">{item.type}</span>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rejection Reasons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Rejection Reasons</CardTitle>
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
    </DashboardLayout>
  );
};

export default HospitalDashboard;
