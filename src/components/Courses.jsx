const courses = [
  {
    tag: 'YouTube',
    title: 'Title & Thumbnail Mastery',
    blurb: 'Frameworks for winning angles and 10-second hooks that lift CTR and AVD.',
  },
  {
    tag: 'TikTok',
    title: 'Short‑Form Sprint',
    blurb: 'Batch, iterate, and publish 30 clips in 7 days with a creative system.',
  },
  {
    tag: 'Automation',
    title: 'Creator OS (No‑Code)',
    blurb: 'Automate research, planning, and publishing using Zapier and Make.',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Curriculum & Playbooks</h2>
            <p className="mt-3 max-w-xl text-slate-600">Learn by doing with templates, worksheets, and weekly sprints.
            </p>
          </div>
          <a href="#join" className="hidden sm:inline-flex items-center rounded-lg bg-[#298ffb] px-4 py-2 text-sm font-semibold text-white shadow-sm">Get Access</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#298ffb]/0 to-[#298ffb]/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{c.tag}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.blurb}</p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-[#298ffb]">View outline →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
