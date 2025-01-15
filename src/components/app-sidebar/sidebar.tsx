import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "~/components/ui/sidebar";
import Link from "next/link";
import { Medal, Sparkle, Webhook, Home } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    url: "/",
    icon: Home,
  },
  {
    name: "Leaderboard",
    url: "/leaderboard",
    icon: Medal,
  },
  {
    name: "Tier List",
    url: "/tier-list",
    icon: Sparkle,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar className="flex w-40 flex-col items-center justify-between">
      <SidebarContent className="flex flex-col items-center gap-10 pt-5">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center py-5 hover:cursor-pointer"
          >
            <Link href={item.url}>
              <item.icon className="h-6 w-6 text-black" />
            </Link>
            <span className="mt-2 text-center">{item.name}</span>
          </div>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <h1>Footer</h1>
      </SidebarFooter>
    </Sidebar>
  );
}
