
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatsCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
}

const StatsCard = ({ icon, title, description, iconBg }: StatsCardProps) => (
  <Card className="text-center">
    <CardContent className="p-6">
      <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-3`}>
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground italic">{description}</p>
    </CardContent>
  </Card>
);

interface DonorStatsProps {
  totalDonations?: number;
  eligibilityDays?: number;
  requestsAnswered?: number;
  pendingRequests?: number;
}

const DonorDashboardStats = ({ 
  totalDonations = 0, 
  eligibilityDays = 0, 
  requestsAnswered = 0,
  pendingRequests = 0 
}: DonorStatsProps) => {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      <StatsCard 
        icon="🩸"
        title="Donations"
        description={totalDonations > 0 ? `${totalDonations} total donations` : "You haven't donated yet"}
        iconBg="bg-orange-100"
      />
      <StatsCard 
        icon="⚡"
        title="Eligibility status"
        description={eligibilityDays > 0 ? `Eligible in ${eligibilityDays} days` : "Not yet determined"}
        iconBg="bg-yellow-100"
      />
      <StatsCard 
        icon="📋"
        title="Requests Responded"
        description={requestsAnswered > 0 ? `${requestsAnswered} requests answered` : "No request responded yet"}
        iconBg="bg-blue-100"
      />
      <StatsCard 
        icon="📋"
        title="Pending Requests"
        description={pendingRequests > 0 ? `${pendingRequests} requests pending` : "0 requests pending"}
        iconBg="bg-orange-100"
      />
    </div>
  );
};

export default DonorDashboardStats;
