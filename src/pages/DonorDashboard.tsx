import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DonorDashboard = () => {
  const bloodRequests = [
    { hospital: "Bosso FMC", bloodType: "O+", location: "Bosso", date: "July 26, 2025" },
    { hospital: "Bida Clinic", bloodType: "A+", location: "Bida", date: "July 20, 2025" },
    { hospital: "Lapai FMC", bloodType: "O+", location: "Lapai", date: "July 18, 2025" },
    { hospital: "Gwaminga G H", bloodType: "O+", location: "Gwaminga", date: "July 16, 2025" },
    { hospital: "Bosso FMC", bloodType: "B+", location: "Bosso", date: "July 26, 2025" },
    { hospital: "Bosso FMC", bloodType: "O-", location: "Bosso", date: "July 26, 2025" },
    { hospital: "Bosso Blood Bank", bloodType: "O+", location: "Bosso", date: "July 26, 2025" },
    { hospital: "Bosso Blood Bank", bloodType: "A+", location: "Bosso", date: "July 26, 2025" },
    { hospital: "Bosso Blood centre", bloodType: "B-", location: "Bosso", date: "July 26, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">+</span>
          </div>
          <span className="text-white text-xl font-semibold">BloodBridge</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-success-green rounded-full"></div>
            <span className="text-white">A+</span>
          </div>
        </div>
      </nav>

      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Hi Mercy, Ready to save a life today?</h1>
          </div>

          {/* Welcome Card */}
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-green-100 border-none">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 font-medium">
                    "Welcome to BloodBridge Naija, Lifesaver!"
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    Your journey as a blood donor starts here.
                  </p>
                </div>
                <Button className="bg-blood-red hover:bg-blood-red/90 text-white">
                  Schedule Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 text-xl">🩸</span>
                </div>
                <h3 className="font-semibold text-foreground">Donations</h3>
                <p className="text-sm text-muted-foreground italic">You haven't donated yet</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-500 text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-foreground">Eligibility status</h3>
                <p className="text-sm text-muted-foreground italic">Not yet determined</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-500 text-xl">📋</span>
                </div>
                <h3 className="font-semibold text-foreground">Requests Responded</h3>
                <p className="text-sm text-muted-foreground italic">No request responded yet</p>
              </CardContent>
            </Card>
          </div>

          {/* Health & Safety Tips */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Health & Safety Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-500 text-2xl">💧</span>
                  </div>
                  <h3 className="font-semibold mb-2">Stay hydrated before donating</h3>
                  <p className="text-sm text-muted-foreground">
                    Drink plenty of water 24 hours before your appointment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-500 text-2xl">🥗</span>
                  </div>
                  <h3 className="font-semibold mb-2">Eat iron-rich meals.</h3>
                  <p className="text-sm text-muted-foreground">
                    Include red meat, spinach, or citrus fruits for better iron levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Donation History */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">My Donation History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium">Date</th>
                      <th className="text-left py-3 font-medium">Location</th>
                      <th className="text-left py-3 font-medium">Blood Type</th>
                      <th className="text-left py-3 font-medium">Status</th>
                      <th className="text-left py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-center py-8 text-muted-foreground italic">
                        No records yet - Once you donate, your journey will be recorded here.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Blood Requests Near You */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Blood Requests Near You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium">Hospital Name</th>
                      <th className="text-left py-3 font-medium">Blood Type</th>
                      <th className="text-left py-3 font-medium">Location</th>
                      <th className="text-left py-3 font-medium">Date Requested</th>
                      <th className="text-left py-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bloodRequests.map((request, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              request.bloodType.includes('O') ? 'bg-blood-red' : 
                              request.bloodType.includes('A') ? 'bg-orange-400' : 
                              'bg-success-green'
                            }`}></div>
                            {request.hospital}
                          </div>
                        </td>
                        <td className="py-3">{request.bloodType}</td>
                        <td className="py-3">{request.location}</td>
                        <td className="py-3">{request.date}</td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-success-green hover:bg-success-green/90 text-white">
                              Accept
                            </Button>
                            <Button size="sm" variant="outline" className="border-orange-400 text-orange-600 hover:bg-orange-50">
                              Message
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-50">
                              Save
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;