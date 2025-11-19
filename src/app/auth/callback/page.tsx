"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "../../supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;

      const url = new URL(window.location.href);
      const supabase = supabaseBrowser();

      const params = url.searchParams;

      // Where do we go after auth?
      const next = params.get("next") || "/feed"; // <-- change to "/dashboard/wedflexer" if you prefer

      const hash = url.hash.startsWith("#") ? url.hash.slice(1) : url.hash;
      const search = url.search.startsWith("?") ? url.search.slice(1) : url.search;
      const hasCode = params.get("code");

      try {
        let error: unknown = null;

        if (hash) {
          // Magic link flow – tokens in hash fragment
          const res = await supabase.auth.exchangeCodeForSession(hash);
          error = res.error;
        } else if (hasCode) {
          // OAuth-style flow – tokens in query string
          const res = await supabase.auth.exchangeCodeForSession(search);
          error = res.error;
        } else {
          // Nothing to exchange – probably hit directly
          router.replace("/auth/signin");
          return;
        }

        if (error) {
          console.error("Supabase exchange error:", error);
          router.replace(
            "/auth/signin?error=" +
              encodeURIComponent(
                (error as { message?: string })?.message || "Sign-in failed",
              ),
          );
          return;
        }

        // Success – go wherever initiated the auth flow
        router.replace(next);
      } catch (e) {
        console.error("Auth callback fatal error:", e);
        router.replace("/auth/signin");
      }
    })();
  }, [router]);

  return (
    <main className="min-h-[50vh] flex items-center justify-center">
      <p className="text-sm text-slate-600">Signing you in…</p>
    </main>
  );
}
