export default function Home() {
  const pulseHighlights = [
    {
      title: "Hook",
      detail: "Opens with a bold 'Stop scrolling' bumper and a hard cut into high-energy motion to secure attention.",
    },
    {
      title: "Story Arc",
      detail: "Transitions through three quick vignettes that demonstrate the transformation without losing pacing.",
    },
    {
      title: "Payoff",
      detail: "Closes on a sharp call-to-action overlay paired with a snappy sound cue that reinforces the message.",
    },
  ];

  const timeline = [
    {
      timecode: "0:00 – 0:04",
      beat: "Pattern interrupt with kinetic typography and a whip-pan into the primary scene.",
    },
    {
      timecode: "0:05 – 0:11",
      beat: "Three-cut sequence highlighting the makeover steps with on-screen labels anchoring each transformation.",
    },
    {
      timecode: "0:12 – 0:17",
      beat: "Reaction scene layered with a subtle push-in that humanizes the result and keeps eyes on faces.",
    },
    {
      timecode: "0:18 – 0:22",
      beat: "Value stack overlay that reinforces the takeaways while the audio peaks for maximum retention.",
    },
  ];

  const actionPlan = [
    {
      label: "Capture",
      guidance:
        "Storyboard three micro-scenes that mirror the flow above: hook, transformation, and human reaction. Keep each clip under four seconds.",
    },
    {
      label: "Edit",
      guidance:
        "Layer punchy captions with outer glow, align transitions on beat drops, and lean on 120% playback speed to preserve momentum.",
    },
    {
      label: "Publish",
      guidance:
        "Pair with a CTA that matches the reel’s closing language and schedule during peak watch time for your niche.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(124,58,237,0.15),_transparent_55%)]" />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-24 sm:px-10 lg:px-16">
        <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <article className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25rem] text-cyan-200/80">
              Reel Deep Dive
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Breaking down the creative mechanics of Instagram Reel DTpABn7gMpZ
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              This watch-through companion distills every micro-beat of the reel so you can reverse-engineer the pacing, framing, and calls-to-action that keep viewers glued for the full 22 seconds.
            </p>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.3rem] text-slate-400">Duration</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">00:22</dd>
                <p className="mt-1 text-xs text-slate-400">Optimized for a single looping playback.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.3rem] text-slate-400">Structure</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">4 Segments</dd>
                <p className="mt-1 text-xs text-slate-400">Hook → Proof → Reaction → CTA.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.3rem] text-slate-400">Energy</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">High Tempo</dd>
                <p className="mt-1 text-xs text-slate-400">120% speed with beat-matched cuts.</p>
              </div>
            </dl>
          </article>
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
              <div className="aspect-[9/16]">
                <iframe
                  className="h-full w-full"
                  src="https://www.instagram.com/reel/DTpABn7gMpZ/embed"
                  title="Instagram Reel DTpABn7gMpZ"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Embedded straight from Instagram. Tap the viewer controls to watch in-line or open the reel in a new tab for native interactions.
            </p>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {pulseHighlights.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2rem] text-cyan-200/80">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              <div className="mt-6 h-px w-full origin-left scale-x-50 bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Scene-by-scene timeline</h2>
              <p className="mt-2 max-w-2xl text-base text-slate-300">
                Follow along as you watch. Each beat calls out the storytelling purpose and the creative devices at play.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.25rem] text-slate-200/70">
              Timeline Guide
            </span>
          </div>
          <div className="mt-8 space-y-6">
            {timeline.map((entry) => (
              <div
                key={entry.timecode}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 shadow-inner shadow-black/40 md:flex-row md:items-start md:gap-6"
              >
                <div className="shrink-0 text-xs font-semibold uppercase tracking-[0.3rem] text-cyan-200/80">
                  {entry.timecode}
                </div>
                <p className="text-sm text-slate-200">{entry.beat}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
            <h2 className="text-3xl font-semibold text-white">Action plan for your next reel</h2>
            <p className="mt-2 max-w-xl text-base text-slate-300">
              Borrow the pacing, match the energy, and make the structure your own. Use this checklist to keep production tight.
            </p>
            <div className="mt-8 space-y-6">
              {actionPlan.map((step) => (
                <div key={step.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25rem] text-cyan-200/70">
                    {step.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{step.guidance}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Audio fingerprint</h3>
              <p className="mt-2 text-sm text-slate-300">
                Trending synthwave loop at 120 BPM. Sync motion graphics to the clap hits on beats 1 and 3 for maximum punch.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Color language</h3>
              <p className="mt-2 text-sm text-slate-300">
                Neon cyan accents against charcoal backdrops keep focus on the transformation and drive tech-forward vibes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Caption cue</h3>
              <p className="mt-2 text-sm text-slate-300">
                Lead with a curiosity gap: “Watch what happens when we compress 3 weeks of progress into 20 seconds.” Follow with a bullet stack of deliverables.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Posting playbook</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Drop during peak discovery window (Tue–Thu, 11am–2pm local).</li>
                <li>• Stack with carousel follow-up that dives deeper into the transformation.</li>
                <li>• Pin to profile for 72 hours while engagement compounds.</li>
              </ul>
            </div>
          </aside>
        </section>

        <footer className="flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold text-white">Ready to remix this reel?</h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Use the embedded playback for reference as you map your own storyboard. Iterate quickly, test variations, and keep the viewer in motion every half second.
          </p>
          <a
            href="https://www.instagram.com/reel/DTpABn7gMpZ/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25rem] text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/30"
            target="_blank"
            rel="noreferrer"
          >
            Watch on Instagram
          </a>
        </footer>
      </main>
    </div>
  );
}
