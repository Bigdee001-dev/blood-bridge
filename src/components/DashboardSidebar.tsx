
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  History, 
  Plus, 
  Settings, 
  User,
  Hospital,
  Calendar,
  AlertCircle
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface SidebarProps {
  userType: 'donor' | 'hospital';
}

const DashboardSidebar = ({ userType }: SidebarProps) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const donorMenuItems = [
    { title: "Dashboard", url: "/donor-dashboard", icon: Home },
    { title: "Donation History", url: "/donation-history", icon: History },
    { title: "My Requests", url: "/my-requests", icon: Plus },
    { title: "Settings", url: "/user-settings", icon: Settings },
  ];

  const hospitalMenuItems = [
    { title: "Dashboard", url: "/hospital-dashboard", icon: Home },
    { title: "Blood Inventory", url: "/blood-inventory", icon: History },
    { title: "Urgent Requests", url: "/urgent-blood-request", icon: AlertCircle },
    { title: "Schedule", url: "/schedule-donation", icon: Calendar },
    { title: "Settings", url: "/hospital-settings", icon: Settings },
  ];

  const menuItems = userType === 'donor' ? donorMenuItems : hospitalMenuItems;

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent className="bg-deep-blue">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-white hover:bg-white/10 data-[active=true]:bg-white/20">
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                          isActive 
                            ? 'bg-white/20 text-white font-medium' 
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
