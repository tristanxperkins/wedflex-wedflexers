"use client";

import { useState } from "react";
// RELATIVE import = robust on Vercel
import { supabaseBrowser } from "../../supabase/client";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendLink(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const sb = supabaseBrowser();

      // Works on localhost & prod automatically
      const redirectBase = `${window.location.origin}/auth/callback`;

      const { error } = await sb.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectBase },
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
    <main className="min-h-[70vh] bg-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* LEFT: Sign-in card */}
          <section className="bg-white border border-purple-100 shadow-sm rounded-2xl p-6 md:p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-primary uppercase mb-2">
              Sign in to WedFlexer Account
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Let&apos;s grab your account.
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              We&apos;ll send you a one-time secure link to sign in. No password to
              remember, just your email.
            </p>

            {sent ? (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                <p className="font-semibold">Magic link sent ✉️</p>
                <p className="mt-1 text-[13px] md:text-sm text-green-900/80">
                  We emailed a one-time sign-in link to{" "}
                  <span className="font-semibold">{email}</span>. Open it on this
                  device to continue into your WedFlexer dashboard.
                </p>
              </div>
            ) : (
              <form onSubmit={sendLink} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending || !email}
                  className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold boarder-brand-primary text-brand-primary shadow-md disabled:opacity-60 hover:bg-brand-primary/5 transition-colors"
                >
                  {sending ? "Sending magic link…" : "Send one-time sign in link"}
                </button>

                {error && (
                  <p className="text-xs md:text-sm text-red-600">
                    Error: {error}
                  </p>
                )}

                <p className="text-[11px] md:text-xs text-slate-500">
                  By continuing, you agree to receive a one-time sign-in link from
                  WedFlex to this email address.
                </p>
              </form>
            )}
          </section>

          {/* RIGHT: Brand / info column */}
          <aside className="space-y-4 md:space-y-6">
            {/* Security / reassurance card */}
            <div className="rounded-2xl border border-purple-100 bg-white/80 backdrop-blur p-4 text-xs md:text-sm text-slate-700 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-1">
                Join the Revolution with this secure, one-time sign in 🔐
              </h3>
                        </div>
                        
            {/* Gradient brand card */}
            <div className="rounded-3xl bg-brand-primary text-white p-6 md:p-8 shadow-lg flex flex-col justify-between min-h-[220px]">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
                  Learn more about the WedFlex Revolution
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  WedFlex is putting an end to overpriced weddings❌
                </h2>
              </div>

              <ul className="mt-4 space-y-1.5 text-sm text-white list-none">
                <li>💍We believe getting married should not cause financial stress.</li>
                <li>🏘️We believe successful marriages are the foundation of successful communities</li>
                <li>🛡️We prioritize trust and safety for couples and WedFlexers</li>
              </ul>

              <p className="mt-4 text-xs text-purple-100/80">
                WedFlex is for Marriage and Community. 
              </p>
            </div>

            
          </aside>
        </div>
      </div>
    </main>
  );
}
