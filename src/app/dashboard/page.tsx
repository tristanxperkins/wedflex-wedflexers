"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/wedflexer");
  }, [router]);

  return (
    <main className="min-h-[50vh] flex items-center justify-center">
      <p className="text-sm text-slate-600">Loading dashboard…</p>
    </main>
  );
}
