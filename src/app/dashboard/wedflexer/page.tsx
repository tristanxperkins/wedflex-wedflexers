"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RequireAuth from "../../components/RequireAuth";
import DashboardSidebar from "../../components/DashboardSidebar";
import { supabaseBrowser } from "../../supabase/client";

type WedflexerProfile = {
  user_id: string;
  intro: string | null;
  city: string | null;
  skills: string[] | null;
};

export default function WedflexerDashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<WedflexerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        const sb = supabaseBrowser();
        const { data: userData, error: userErr } = await sb.auth.getUser();
        if (userErr) throw userErr;
        const user = userData.user;

        if (!user) {
          router.replace("/auth/signin?role=wedflexer&next=/dashboard");
          return;
        }

        const { data, error } = await sb
          .from("wedflexer_profiles")
          .select("user_id, intro, city, skills")
          .eq("user_id", user.id);

        if (error) throw error;

        const row = (data && data[0]) as WedflexerProfile | undefined;
        setProfile(row ?? null);
      } catch (e) {
        setErr(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  const skillsDisplay =
    profile?.skills == null || profile.skills.length === 0
      ? "No skills selected yet"
      : profile.skills.join(", ");

  return (
    <RequireAuth>
      <main className="max-w-6xl mx-auto p-6 grid gap-6 lg:grid-cols-[240px_1fr]">
        <DashboardSidebar />

        <section className="space-y-6">
          <header className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Your WedFlexer Dashboard
              </h1>
              <p className="text-sm text-slate-600">
                Manage your profile and start earning money from weddings.
              </p>
            </div>

            {/* 👉 Browse Offers button */}
            <Link
              href="/feed"
              className="inline-flex items-center rounded-md bg-purple-700 text-white px-4 py-2 text-sm font-semibold hover:bg-purple-800"
            >
              Browse Offers
            </Link>
          </header>

          {loading && (
            <p className="text-sm text-slate-600">Loading your dashboard…</p>
          )}
          {err && <p className="text-sm text-red-600">Error: {err}</p>}

          {!loading && !err && (
            <section className="border rounded-2xl p-4 bg-white shadow-sm space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">
                Profile summary
              </h2>

              {!profile ? (
                <p className="text-sm text-slate-600">
                  You haven&apos;t completed your WedFlexer profile yet.{" "}
                  <Link
                    href="/dashboard/wedflexer/profile"
                    className="text-purple-700 hover:underline"
                  >
                    Complete it now
                  </Link>
                  .
                </p>
              ) : (
                <div className="space-y-1 text-sm text-slate-700">
                  <p>
                    <span className="font-medium">City:</span>{" "}
                    {profile.city || "Not set"}
                  </p>
                  <p>
                    <span className="font-medium">Skills:</span>{" "}
                    {skillsDisplay}
                  </p>
                  <p className="mt-2">
                    <Link
                      href="/dashboard/wedflexer/profile"
                      className="text-purple-700 hover:underline"
                    >
                      Edit profile
                    </Link>
                  </p>
                </div>
              )}
            </section>
          )}
        </section>
      </main>
    </RequireAuth>
  );
}
