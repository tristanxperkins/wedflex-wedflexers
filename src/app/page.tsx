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
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-3">
            Join WedFlex to start making money off of weddings.
          </h2>

          <p className="text-brand-charcoal mb-6 max-w-xl">
              WedFlex connects real couples with talented locals for wedding service instead of 
              going to traditional overpriced wedding vendors.
              Become a WedFlexer right now and start earning money.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/earn-money"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-brand-primary text-white hover:bg-brand-primary-dark"
            >
              Start earning money
            </Link>

            <Link
              href="/auth/signin?role=wedflexer&next=/dashboard"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold border border-brand-primary text-brand-primary hover:bg-brand-primary/5"
            >
              Already a WedFlexer? Sign in!
            </Link>
          </div>

          {/* Two info cards */}
          <div className="grid gap-4 md:grid-cols-2">
<div className="border rounded-2xl p-4 shadow-xs bg-white">
              <h3 className="font-semibold mb-2">How WedFlex Works</h3>
              <p className="text-sm text-brand-charcoal">
                 <ul className="list-none space-y-2">
                 <li>💜 Real couples post offers for wedding services they need</li>
                <li>🔍 Browse and accept offers that work for you</li>
                <li>💵 Deliver the service and get paid securely through WedFlex</li>
                <li>📅 Always control your income and your schedule</li>
                </ul>
              </p>
            </div>

            <div className="border rounded-2xl p-4 shadow-xs bg-white">
              <h3 className="font-semibold mb-2">Who Are WedFlexers?</h3>
              <p className="text-sm text-brand-charcoal">
                WedFlexers are everyday people that use WedFlex to make money off of weddings on their
                schedule. WedFlexers are:
                <ul className="list-none space-y-2">
                <li>🎨 Crafters & DIYers</li>
<li>📋 Type-A organizers and party planners</li>
<li>📸 Photographers & Content Creators</li>
<li>🍹 Servers & Bartenders</li>
<li>🍰 Chefs & Bakers </li>
<li>🎵 Musicians & Music Aficionados</li>
<li>🚀 Entrepreneurs & Side Hustlers</li>
<li>💰 Anyone with a skill they want to monetize</li>

                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Right column: wedding image */}
        <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/WedFlexers-helping-a-couple.png"
            alt="WedFlexers helping a couple"
            fill
            className="w-full h-auto object-cover rounded-3xl"
              />
        </div>
      </section>


      {/* 💜 PURPLE BANNER — AFTER MAIN CONTENT */}
      <section className="mt-12 bg-brand-primary/5 text-black">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            WedFlex is for Marriage and Community.
          </h1>

          <p className="max-w-3xl mx-auto text-sm md:text-lg text-brand-charcoal">
            Help us revolutionize the wedding industry to end overpriced weddings while supporting the communities they thrive in.
          </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/earn-money"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-brand-primary text-white hover:bg-brand-primary-dark"
            >
              Start earning money
            </Link>

            <Link
              href="/auth/signin?role=wedflexer&next=/dashboard"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold border border-brand-primary text-brand-primary hover:bg-white"
            >
              Already a WedFlexer? Sign in!
            </Link>
          </div>
          </div>
      </section>
    </>
  );
}
