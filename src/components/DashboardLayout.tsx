
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from './DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'donor' | 'hospital';
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar userType={userType} />
        
        <div className="flex-1 flex flex-col">
          {/* Top Navigation Bar */}
          <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blood-red rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">+</span>
                </div>
                <span className="text-foreground text-xl font-semibold hidden sm:block">BloodBridge</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-8 h-8 bg-muted rounded-full hidden sm:block"></div>
              <div className="w-8 h-8 bg-muted rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success-green rounded-full"></div>
                <span className="text-foreground hidden sm:block">A+</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-4 lg:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
