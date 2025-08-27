
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";

const ScheduleDonation = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-primary to-purple-900 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-white">
        <CardContent className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <span className="text-xl font-bold text-primary">BloodBridge Naija</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Donation</h1>
            <p className="text-gray-600">Choose a convenient date, time, and location to donate blood.</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="donation-center" className="font-medium">Preferred Donation Center</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="City Hospital" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city-hospital">City Hospital</SelectItem>
                  <SelectItem value="general-hospital">General Hospital</SelectItem>
                  <SelectItem value="blood-bank">Blood Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location" className="font-medium">Location</Label>
              <Input 
                id="location" 
                placeholder="Enter your location" 
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-medium">Date of Donation</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal mt-1",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "MMMM dd, yyyy") : "September 30, 2025"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="time-slot" className="font-medium">Time Slot</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Morning" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="blood-group" className="font-medium">Blood Group <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="O+" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="o-positive">O+</SelectItem>
                  <SelectItem value="o-negative">O-</SelectItem>
                  <SelectItem value="a-positive">A+</SelectItem>
                  <SelectItem value="a-negative">A-</SelectItem>
                  <SelectItem value="b-positive">B+</SelectItem>
                  <SelectItem value="b-negative">B-</SelectItem>
                  <SelectItem value="ab-positive">AB+</SelectItem>
                  <SelectItem value="ab-negative">AB-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="last-donation" className="font-medium">Last Donation Date</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="First time donor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-time">First time donor</SelectItem>
                  <SelectItem value="3-months">3 months ago</SelectItem>
                  <SelectItem value="6-months">6 months ago</SelectItem>
                  <SelectItem value="1-year">1 year ago</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes" className="font-medium">Special notes/Preferences</Label>
              <Textarea 
                id="notes" 
                placeholder="Enter any special notes or preferences" 
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="healthy" defaultChecked />
                <Label htmlFor="healthy" className="text-sm">I am feeling healthy today.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="agree" defaultChecked />
                <Label htmlFor="agree" className="text-sm">
                  I agree to donate blood voluntarily and understand the eligibility requirements.
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium">
              Schedule Donation
            </Button>

            {/* Warning */}
            <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-red-50 rounded-lg">
              <span className="text-red-500 text-xl">⚠️</span>
              <span className="text-red-700 text-sm">Drink water and eat healthy before donation.</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleDonation;
