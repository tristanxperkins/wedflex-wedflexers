import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "WedFlex",
  description: "Make Money off of Weddings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* brand base colors */}
      <body className="bg-white text-slate-900">
        {/* Single, sticky, white nav row */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <Nav />
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

         <footer className="mt-12 bg-purple-700 text-white">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 text-left">
              <span className="font-bold text-lg">WedFlex</span>
              <span className="opacity-90">
                On a mission to make weddings affordable.
              </span>
            </div>
            <span className="opacity-80 text-xs md:text-sm text-right">
              © {2025} WedFlex. Built for Marriage and Community.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
