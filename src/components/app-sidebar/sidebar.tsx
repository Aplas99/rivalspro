import { Medal, Sparkle, Webhook } from "lucide-react";
import Link from "next/link";

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
    <div className="group relative h-screen w-16 bg-gray-800 transition-all duration-300 hover:w-64">
      {/* Sidebar Header */}
      <div className="flex items-center p-4">
        <Webhook className="h-6 w-6 text-white" />
        <span className="ml-2 hidden text-lg font-semibold tracking-tight text-white opacity-0 transition-opacity delay-150 duration-300 group-hover:block group-hover:opacity-100">
          <Link href="/" className="hover:cursor-pointer">
            Rivals Pro
          </Link>
        </span>
      </div>

      <div className="my-2 border-b border-gray-700"></div>

      {/* Sidebar Menu */}
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.url}
              className="flex items-center gap-4 p-2 text-white transition-colors hover:bg-gray-700"
            >
              <item.icon className="h-5 w-5" />
              <span className="to hidden opacity-0 transition-opacity delay-700 duration-300 group-hover:block group-hover:opacity-100">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
