import Nav from "./components/Nav";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-slate-900">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          You can make money off of weddings.
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed text-slate-700">
          Turn your talents into cash helping couples in your community get married. Become a WedFlexer today to start earning money.
        </p>

        <div className="flex flex-wrap gap-3">
                    <Link
            href="/earn-money"
            className="inline-flex items-center px-4 py-2 rounded-md border border-purple-700 text-purple-700 text-sm font-medium hover:bg-purple-50"
          >
            Start earning money
          </Link>
      
          <Link
            href="/auth/signin?role=wedflexer&next=/feed"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium border border-purple-700 text-purple-700 hover:bg-purple-50"
          >
            Already a WedFlexer? Sign in!
          </Link>
        </div>
</section>
      <section className="grid md:grid-cols-3 gap-8 text-sm">
        <div className="border rounded-lg p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Who Are WedFlexers?
          </h2>
          <p className="text-slate-700">
            WedFlexers are talented locals - not traditional wedding vendors. They are everyday people with hidden talents such as
            like retired professionals, college students, hobbyist, and side-hustlers using their skills to help people get married
            without the high mark up of traditional vendors.
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            How WedFlex Works
          </h2>
          <p className="text-slate-700">
            Browse Offers from couples. Accept Offers that work for you. Show up and get paid.
          </p>
        </div>
      </section>
    </main>
  );
}
