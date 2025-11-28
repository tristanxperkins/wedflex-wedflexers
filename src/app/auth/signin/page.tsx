"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "../../supabase/client";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [nextUrl, setNextUrl] = useState("/feed"); // default for normal sign-in
  const [role, setRole] = useState("wedflexer");

  // Read next + role from the URL on the client
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const rawNext = params.get("next");
    const rawRole = params.get("role");

    if (rawRole) setRole(rawRole);

    if (rawNext) {
      // handle encoded or plain values
      try {
        setNextUrl(decodeURIComponent(rawNext));
      } catch {
        setNextUrl(rawNext);
      }
    }
  }, []);

  async function sendLink(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const sb = supabaseBrowser();

      // Build callback URL with `next` + `role` baked in
      const callback = new URL("/auth/callback", window.location.origin);
      callback.searchParams.set("next", nextUrl);
      callback.searchParams.set("role", role);

      const { error } = await sb.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: callback.toString(),
        },
      });

      if (error) throw error;

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Let&apos;s grab your account. We will send you a one-time link to sign in.</h1>

      {sent ? (
        <div className="rounded border p-4 bg-green-50">
          <p>
            A link to sign in was sent to <strong>{email}</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={sendLink} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
            />
          </div>
          <button
            type="submit"
            disabled={sending || !email}
            className="bg-black text-white rounded px-4 py-2 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send one-time sign in link"}
          </button>
          {error && <p className="text-red-600 text-sm mt-2">Error: {error}</p>}
        </form>
      )}
      {/* 💜 PURPLE BANNER — AFTER MAIN CONTENT */}
      <section className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            You don&apos;t want to miss this.
          </h1>

          <p className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            WedFlex has launched in your city and that means things are about to get crazy.
            The wedding industry has been overpriced and unfair to couples for far too long. 
            WedFlex is a revolution that puts marriage back at the center of the industry and puts money
            in the communities where marriages happen. Join us. Become a WedFlexer to make money off of weddings. 
          </p>
        </div>
      </section>
    </main>
    
  );
}
