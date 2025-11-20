import { Sparkles, Rocket, Timer, Workflow, Youtube, Bot, Blocks, Zap } from 'lucide-react'

const features = [
  {
    icon: <Youtube className="h-5 w-5" />, 
    title: 'YouTube Growth Systems',
    desc: 'Nail topics, titles, and retention with proven frameworks and data-backed templates.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />, 
    title: 'TikTok Momentum',
    desc: 'Short-form strategies to spark velocity and repurpose long-form content the smart way.'
  },
  {
    icon: <Workflow className="h-5 w-5" />, 
    title: 'No-Code Automations',
    desc: 'Zapier, Make, and native integrations that save hours and scale your content engine.'
  },
  {
    icon: <Bot className="h-5 w-5" />, 
    title: 'AI Agent Integrations',
    desc: 'Coming soon: Discord-native agents to ideate, script, and ship on command.'
  },
  {
    icon: <Timer className="h-5 w-5" />, 
    title: 'Ship Fast Playbooks',
    desc: 'Step-by-step launch guides with checklists — from zero to first $ online.'
  },
  {
    icon: <Zap className="h-5 w-5" />, 
    title: 'Vibe Coding',
    desc: 'Creative dev flows to prototype tools, landing pages, and dashboards without friction.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to build and grow</h2>
          <p className="mt-3 text-slate-600">Actionable curriculum, community accelerators, and automation recipes that compound.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#298ffb]/10 text-[#298ffb]">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
