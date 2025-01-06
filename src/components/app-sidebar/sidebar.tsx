import { Medal, Sparkle, Webhook } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

const menuItems = [
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
    <div className="group relative h-screen bg-zinc-800 w-20 transition-all duration-300 hover:w-64">
      {/* Sidebar Header */}
      <div className="flex items-center p-6">
        <Webhook className="h-6 w-6 text-white" />
        <span className="p-2 text-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Link href="/" className="hover:cursor-pointer">
            Rivals Pro
          </Link>
        </span>
      </div>

      <Separator className="border-b border-gray-700" />

      {/* Sidebar Menu */}
      <ul className="space-y-2 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="flex items-center gap-4 rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-700"
          >
            <item.icon className="h-6 w-6" />
            <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.name}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
