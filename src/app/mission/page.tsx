export default function MissionPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-900">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Wedlex is for Marriage and Community.
      </h1>

      <p className="text-lg leading-relaxed text-slate-700 mb-8">
        At WedFlex, we believe that the cost of a wedding should not
          be a financial burden that marks the beginning of a marriage.
      </p>

      <div className="space-y-6 text-slate-800 text-base leading-relaxed">
        <p>
          We know in our core that successful marriages 
          are the foundation of successful communities. But recently the wedding industry has become
          excessively overpriced. The industry has forgotten that supporting marriage is the whole point. 
          
          <p className="text-lg leading-relaxed text-slate-700 mb-8">
          The Wedding Tax ❌
        </p>
        Through research on the cost of weddings, we uncovered the "Wedding Tax". The wedding tax is not an actual tax, but it is the very real 30-60% markup
          that traditional wedding vendors charge for services simply because it is a wedding. Couples who want to get married deserve better. 
          
          Everything we do at WedFlex is centered around eliminating the Wedding Tax and fixing the overpriced wedding industry for good.
          We will pursue these values passionately and with urgency...for marriage and community. 👊 

<p className="text-lg leading-relaxed text-slate-700 mb-8">
          Our Values
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Getting married should not cause financial stress.",
            "Successful marriages are the foundation of successful communities",
            "Prioritize trust and safety for Couples and WedFlexers",
            ].map((label) => (
            <div
              key={label}
              className="border rounded-2xl px-3 py-4 bg-slate-50 flex items-start gap-2 text-sm"
            >
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-500" />
              <span>{label}</span>
            </div>
          ))}
        </div>
        </p>

        <p className="text-lg leading-relaxed text-slate-700 mb-8">
          Join the WedFlex Revolution Today!
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="www.wedflex.com"
          className="border border-purple-700 text-purple-700 text-sm font-medium px-5 py-3 rounded-md hover:bg-purple-50"
        >
          WedFlex Your Wedding →
        </a>
        
        <a
          href="/earn-money"
          className="border border-purple-700 text-purple-700 text-sm font-medium px-5 py-3 rounded-md hover:bg-purple-50"
        >
          Become a WedFlexer →
        </a>
      </div>
    </main>
  );
}
