export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track team mood from{" "}
          <span className="text-[#58a6ff]">daily standup messages</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          StandupSense connects to Slack, analyzes your team&apos;s standup messages for sentiment patterns and burnout signals, and surfaces morale trends before problems escalate.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $39/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Slack OAuth", "Sentiment Analysis", "Burnout Alerts", "Manager Dashboard", "Trend Reports"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, per workspace</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited standup channels",
              "Real-time sentiment scoring",
              "Burnout risk alerts",
              "Weekly morale trend reports",
              "Manager dashboard",
              "Slack OAuth integration",
              "Email digest for managers"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does StandupSense connect to Slack?</h3>
            <p className="text-[#8b949e] text-sm">
              You authorize StandupSense via Slack OAuth. It then listens to designated standup channels using Slack&apos;s Events API and processes messages in real time — no manual exports needed.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my team&apos;s data private and secure?</h3>
            <p className="text-[#8b949e] text-sm">
              Yes. Messages are analyzed and aggregated into anonymized sentiment scores. Raw message content is never stored long-term. All data is encrypted in transit and at rest.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What counts as a &quot;standup message&quot;?</h3>
            <p className="text-[#8b949e] text-sm">
              Any message posted in the Slack channels you designate as standup channels. You control which channels are monitored — StandupSense only reads what you explicitly allow.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} StandupSense. All rights reserved.
      </footer>
    </main>
  );
}
