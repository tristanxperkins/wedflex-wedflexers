// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function WedFlexerHome() {
  return (
    <main className="bg-white text-brand-charcoal">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-20">
        {/* ------------------------------------------------------------ */}
        {/* SECTION 1: HERO */}
        {/* ------------------------------------------------------------ */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          {/* LEFT */}
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
                For WedFlexers
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary leading-tight">
                Join WedFlex to start making money off of weddings.
              </h1>

              <p className="text-brand-charcoal text-sm md:text-base max-w-xl">
                WedFlex connects real couples with talented locals — instead of overpriced wedding vendors. Use your skills, set your schedule, and earn meaningful income.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/earn-money?step=1"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-brand-primary text-white shadow-sm hover:bg-brand-primary-dark transition"
              >
                Start earning money
              </Link>

              <Link
                href="/auth/signin?role=wedflexer&next=/dashboard/wedflexer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold border border-brand-primary text-brand-primary bg-white hover:bg-brand-primary/10 transition"
              >
                Already a WedFlexer? Sign in!
              </Link>
            </div>

            {/* TRUST BAR */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-brand-charcoal/70">
              <span className="uppercase tracking-[0.2em] font-semibold text-[10px]">
                Popular WedFlexer skills
              </span>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-[11px] flex items-center gap-1.5">
                  📸 <span>Photography</span>
                </span>

                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-[11px] flex items-center gap-1.5">
                  🍰 <span>Cakes & desserts</span>
                </span>

                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-[11px] flex items-center gap-1.5">
                  🎤 <span>MCs & DJs</span>
                </span>

                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-[11px] flex items-center gap-1.5">
                  💐 <span>Decor & florals</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[300px] md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/Monique-Coordinating.png"
              alt="Monique from Atlanta coordinates the day"
              fill
              className="object-cover object-center"
              style={{objectPosition:"70% 50%"}}//xy
              priority
            />
          </div>
        </section>

                {/* ------------------------------------------------------------ */}
        {/* SECTION 2: TWO-COLUMN BLOCKS */}
        {/* ------------------------------------------------------------ */}
        <section className="grid gap-8 md:grid-cols-2">
          {/* LEFT - HOW IT WORKS */}
          <div className="rounded-3xl border border-brand-primary/20 p-6 shadow-sm bg-white">
            <h3 className="text-lg font-bold text-brand-primary">How WedFlex Works</h3>
            <p className="space-y-1.5 text-sm text-brand-charcoal"> WedFlex connects couples to WedFlexers through offers </p>
            <ul className="space-y-2 mt-3 text-brand-charcoal text-sm leading-relaxed list-none">
              <li>💜 Real couples post offers for wedding services</li>
              <li>🔍 Browse and accept offers that match your skills</li>
              <li>📊 Track your bookings earnings on the WedFlexer Dashboard</li>
              <li>💸 Deliver the service and get paid through WedFlex</li>
              <li>📅 Always control your schedule and income</li>
              
              
            </ul>
          </div>

          {/* RIGHT - WHO ARE WEDFLEXERS */}
          <div className="rounded-3xl border border-brand-primary/20 p-6 shadow-sm bg-white">
            <h3 className="text-lg font-bold text-brand-primary">Who Are WedFlexers?</h3>
            <ul className="space-y-1.5 mt-3 text-brand-charcoal text-sm list-none">
              <li>🎨 Crafters, DIYers, & Creatives</li>
              <li>📋 Type-A organizers & planners</li>
              <li>📸 Photographers & Content Creators</li>
              <li>🥤 Servers & Bartenders</li>
              <li>🍰 Chefs & Bakers</li>
              <li>🎵 Musicians & Aficionados</li>
              <li>🚀 Side-hustlers & Entrepreneurs</li>
              <li>💰 Anyone with a skill they want to monetize</li>
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 3: EARNINGS SECTION */}
        {/* ------------------------------------------------------------ */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          {/* LEFT */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-brand-primary">
              WedFlexer Perks
            </h2>

            <p className="text-sm text-brand-charcoal max-w-md">
              Monetizing your skills on WedFlex to help with weddings year-round.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl p-4 bg-brand-primary text-white shadow-md space-y-1">
                <p className="uppercase tracking-wide text-xs font-semibold">
                  Flexibility
                </p>
                <p className="text-sm">Make your own schedule and work whenever you want.</p>
              </div>

              <div className="rounded-2xl p-4 bg-brand-primary/10 border border-brand-primary/20 space-y-1">
                <p className="uppercase tracking-wide text-xs font-semibold text-brand-primary">
                  Control your earnings
                </p>
                <p className="text-sm text-brand-charcoal">
                  Only accept the offers that fit your skills and what you want to make.
                </p>
              </div>

              <div className="rounded-2xl p-4 bg-white border border-brand-primary/20 space-y-1">
                <p className="uppercase tracking-wide text-xs font-semibold text-brand-primary">
                  Avg. $300 per offer*
                </p>
                <p className="text-sm text-brand-charcoal">
                  Many WedFlexers earn hundreds per event.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-brand-charcoal/60">
              *Offers are set by couples and vary by offer and location. Platform fees apply.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[250px] md:h-[320px]">
            <Image
              src="/images/WedFlexer-Collage-Design.png"
              alt="WedFlexers collage"
              fill
              className="object-cover object-center"
            />
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* SECTION 4: REQUIREMENTS */}
        {/* ------------------------------------------------------------ */}
        <section className="space-y-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-brand-primary">
            Requirements to Become a WedFlexer
          </h2>

          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="rounded-2xl border border-brand-primary/20 p-4 bg-white space-y-2">
              <p className="font-bold text-brand-primary text-sm">Legal eligibility</p>
              <p className="text-xs text-brand-charcoal">
                Must be 18+ and eligible to work as a 1099 contractor. You must maintain the licenses required by your city or state
                to perform certain services (i.e., officiants must be legally ordained).
              </p>
            </div>

            <div className="rounded-2xl border border-brand-primary/20 p-4 bg-white space-y-2">
              <p className="font-bold text-brand-primary text-sm">Transportation</p>
              <p className="text-xs text-brand-charcoal">
                Must have a reliable way to get to event locations or complete your service.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-primary/20 p-4 bg-white space-y-2">
              <p className="font-bold text-brand-primary text-sm">Professionalism</p>
              <p className="text-xs text-brand-charcoal">
                Communicate well, show up on time, and deliver what you promise.
              </p>
            </div>
          </div>

          <Link
            href="/earn-money?step=1"
            className="inline-flex px-6 py-2.5 rounded-full text-sm font-semibold bg-brand-primary text-white hover:bg-brand-primary-dark shadow-sm transition"
          >
            Ready to WedFlex?
          </Link>
        </section>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 💜 PURPLE BANNER — FINAL SECTION */}
      {/* ------------------------------------------------------------ */}
      <section className="mt-20 bg-brand-primary/5">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-3">
            WedFlex is for Marriage and Community.
          </h1>

          <p className="max-w-3xl mx-auto text-sm md:text-lg text-brand-charcoal">
            Help us revolutionize the wedding industry to end overpriced weddings and support the communities they thrive in.
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
    </main>
  );
}
