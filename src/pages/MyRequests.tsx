
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MyRequests = () => {
  return (
    <DashboardLayout userType="donor">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>My Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Your blood donation requests will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MyRequests;
