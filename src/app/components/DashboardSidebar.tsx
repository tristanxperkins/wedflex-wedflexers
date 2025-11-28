"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const wedflexerItems = [
  { href: "/dashboard/wedflexer", label: "Dashboard" },
  { href: "/dashboard/wedflexer/profile", label: "Profile Settings" },
  { href: "/dashboard/wedflexer/calendar", label: "Calendar" },
  { href: "/dashboard/wedflexer/earnings", label: "Earnings" },
  { href: "/dashboard/wedflexer/messages", label: "Messages" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border rounded-xl p-4 h-max bg-white">
      <nav className="flex flex-col gap-2">
        {wedflexerItems.map((i) => {
          const active = pathname === i.href;
          return (
            <Link
              key={i.href}
              href={i.href}
              className={
                "px-3 py-2 rounded text-sm transition " +
                (active
                  ? "bg-purple-100 text-purple-800 font-medium"
                  : "hover:bg-purple-50 text-slate-700")
              }
            >
              {i.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
