import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[86vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 backdrop-blur-md">
            <span className="inline-block h-2 w-2 rounded-full bg-[#298ffb]"></span>
            Build, Grow, Automate
          </span>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Moneylabs: Master YouTube, TikTok, and No‑Code Automations
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-base text-slate-600 sm:text-lg">
            Learn creator growth, vibe coding, and automation playbooks. Launch faster with community support and future AI agent integrations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#join" className="inline-flex items-center rounded-lg bg-[#298ffb] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition">
              Join the Community
            </a>
            <a href="#courses" className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Explore Courses
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
    </section>
  )
}
