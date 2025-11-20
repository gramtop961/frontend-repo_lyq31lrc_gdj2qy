export default function CTA() {
  return (
    <section id="join" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Join Moneylabs</h2>
              <p className="mt-3 text-slate-600">Get access to community sprints, weekly office hours, and upcoming Discord AI agents that help you ideate, script, and automate.</p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input type="email" required placeholder="Enter your email" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#298ffb]" />
                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-[#298ffb] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md">Get Invite</button>
              </form>
              <p className="mt-2 text-xs text-slate-500">We’ll send a private access link. No spam, unsubscribe anytime.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="grid gap-3 text-sm text-slate-700">
                <li>• Weekly growth challenges</li>
                <li>• Automation templates & SOPs</li>
                <li>• Private creator forum</li>
                <li>• Early access to AI agent beta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
