"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* ⭐ MAIN CONTENT FIRST */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        
        {/* Left column: messaging + CTAs + cards */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-3">
            You can make money off of weddings.
          </h2>

          <p className="text-slate-700 mb-6 max-w-xl">
            Turn your talents into cash helping couples in your community get married.
            Become a WedFlexer today to start earning money.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/earn-money"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-purple-700 text-white hover:bg-purple-800"
            >
              Start earning money
            </Link>

            <Link
              href="/auth/signin?role=wedflexer&next=/dashboard"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold border border-purple-700 text-purple-700 hover:bg-purple-50"
            >
              Already a WedFlexer? Sign in!
            </Link>
          </div>

          {/* Two info cards */}
          <div className="grid gap-4 md:grid-cols-2">

            <div className="border rounded-2xl p-4 shadow-xs bg-white">
              <h3 className="font-semibold mb-2">Who Are WedFlexers?</h3>
              <p className="text-sm text-slate-700">
                WedFlexers are talented locals – not traditional vendors. Students, hobbyists,
                retirees, and creatives helping couples get married without industry markup.
              </p>
            </div>

            <div className="border rounded-2xl p-4 shadow-xs bg-white">
              <h3 className="font-semibold mb-2">How WedFlex Works</h3>
              <p className="text-sm text-slate-700">
                Browse offers from couples, accept the ones that work for you,
                show up, help out, and get paid securely right through WedFlex.
              </p>
            </div>

          </div>
        </div>

        {/* Right column: wedding image */}
        <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="public/images/WedFlexers-helping-a-couple.png"
            alt="WedFlexers helping a couple"
            width = {2000}
            height= {1200}
            className="w-full h-auto object-cover rounded-3xl"
              />
        </div>
      </section>


      {/* 💜 PURPLE BANNER — AFTER MAIN CONTENT */}
      <section className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            WedFlex is for Marriage and Community.
          </h1>

          <p className="max-w-3xl mx-auto text-sm md:text-lg text-purple-100">
            Imagine a world where the wedding industry was actually about marriage. 
            WedFlex puts marriage back at the center and gives everyday people the opportunity
            to make money supporting the families in their community. It's a win-win for everyone. 
          </p>
        </div>
      </section>
    </>
  );
}
