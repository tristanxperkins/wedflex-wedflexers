"use client";

import Link from "next/link";
import { supabaseBrowser } from "../supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const sb = supabaseBrowser();
      const { data } = await sb.auth.getUser();
      if (data?.user?.email) setEmail(data.user.email);
    };
    load();
  }, []);

  async function handleSignOut() {
    const sb = supabaseBrowser();
    await sb.auth.signOut();

    // 🔥 ALWAYS return to home page
    router.push("/");
    router.refresh();
  }

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
<Link href="/" className="text-xl font-bold text-brand-primary">
        WedFlex
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">

        <Link href="/" className="hover:text-purple-700">
          Home
        </Link>

        <Link href="/mission" className="hover:text-purple-700">
          Mission
        </Link>

        {email ? (
          <>
            <Link href="/dashboard" className="hover:text-purple-700">
              Dashboard
            </Link>

            <span className="text-slate-600">{email}</span>

            <button
              onClick={handleSignOut}
              className="text-red-600 hover:text-red-700"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            href="/auth/signin?role=wedflexer&next=/feed"
            className="hover:text-purple-700"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

