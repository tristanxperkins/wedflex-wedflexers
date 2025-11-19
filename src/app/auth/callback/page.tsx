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

      // Decide where to go after auth
      const next = params.get("next") || "/feed";

      try {
        // 1) If we already have a session, just go there
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session) {
          router.replace(next);
          return;
        }

        // 2) Otherwise, try to exchange tokens from the URL
        const hash = url.hash.startsWith("#") ? url.hash.slice(1) : "";
        const code = params.get("code");

        let exchangeArg: string | null = null;

        // Newer flows usually use `code` in the query string
        if (code) {
          exchangeArg = code;
        } else if (hash) {
          // Older / hash-based flows – pass the hash fragment
          exchangeArg = hash;
        }

        if (!exchangeArg) {
          // Nothing to exchange – probably hit directly
          router.replace("/auth/signin");
          return;
        }

        const { error } = await supabase.auth.exchangeCodeForSession(exchangeArg);
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

        // 3) Success – go to the original destination
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
