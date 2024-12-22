import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Sidebar from "~/components/app-sidebar/sidebar"; // Import your custom TailwindCSS sidebar component

export const metadata: Metadata = {
  title: "RivalsPro",
  description: "RivalsPro",
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdlYmhvb2siPjxwYXRoIGQ9Ik0xOCAxNi45OGgtNS45OWMtMS4xIDAtMS45NS45NC0yLjQ4IDEuOUE0IDQgMCAwIDEgMiAxN2MuMDEtLjcuMi0xLjQuNTctMiIvPjxwYXRoIGQ9Im02IDE3IDMuMTMtNS43OGMuNTMtLjk3LjEtMi4xOC0uNS0zLjFhNCA0IDAgMSAxIDYuODktNC4wNiIvPjxwYXRoIGQ9Im0xMiA2IDMuMTMgNS43M0MxNS42NiAxMi43IDE2LjkgMTMgMTggMTNhNCA0IDAgMCAxIDAgOCIvPjwvc3ZnPg==",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex bg-black text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
