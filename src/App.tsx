
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import DonorSignup from "./pages/DonorSignup";
import HospitalSignup from "./pages/HospitalSignup";
import DonorDashboard from "./pages/DonorDashboard";
import HospitalDashboard from "./pages/HospitalDashboard";
import SignIn from "./pages/SignIn";
import UserSettings from "./pages/UserSettings";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import BloodInventory from "./pages/BloodInventory";
import HospitalSettings from "./pages/HospitalSettings";
import UrgentBloodRequest from "./pages/UrgentBloodRequest";
import ScheduleDonation from "./pages/ScheduleDonation";
import DonationHistory from "./pages/DonationHistory";
import MyRequests from "./pages/MyRequests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/donor-signup" element={<DonorSignup />} />
          <Route path="/hospital-signup" element={<HospitalSignup />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
          <Route path="/user-settings" element={<UserSettings />} />
          <Route path="/blood-inventory" element={<BloodInventory />} />
          <Route path="/hospital-settings" element={<HospitalSettings />} />
          <Route path="/urgent-blood-request" element={<UrgentBloodRequest />} />
          <Route path="/schedule-donation" element={<ScheduleDonation />} />
          <Route path="/donation-history" element={<DonationHistory />} />
          <Route path="/my-requests" element={<MyRequests />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
