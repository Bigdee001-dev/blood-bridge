
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ScheduleDonation = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [location, setLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [notes, setNotes] = useState("");

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Donation scheduled:", {
      date: selectedDate,
      time: selectedTime,
      location,
      contactInfo,
      notes
    });
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/donor-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Blood Donation</h1>
          <p className="text-gray-600">Choose your preferred date and time for blood donation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Select Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Form Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Donation Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Time Selection */}
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Preferred Location
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter hospital or donation center"
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-2">
                  <Label htmlFor="contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Number
                  </Label>
                  <Input
                    id="contact"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="Your phone number"
                  />
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any special requirements or notes"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!selectedDate || !selectedTime || !location || !contactInfo}
                >
                  Schedule Donation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Before Donation</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Get adequate sleep (7-8 hours)</li>
                <li>• Eat a healthy meal</li>
                <li>• Stay hydrated</li>
                <li>• Avoid alcohol 24 hours prior</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-900 mb-2">What to Bring</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Valid ID (Driver's license, etc.)</li>
                <li>• List of current medications</li>
                <li>• Comfortable clothing</li>
                <li>• Positive attitude!</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-red-900 mb-2">After Donation</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Rest for 10-15 minutes</li>
                <li>• Drink plenty of fluids</li>
                <li>• Avoid heavy lifting</li>
                <li>• Eat iron-rich foods</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDonation;
