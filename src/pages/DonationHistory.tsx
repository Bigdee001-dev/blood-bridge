
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DonationHistory = () => {
  return (
    <DashboardLayout userType="donor">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Donation History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Your donation history will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DonationHistory;
