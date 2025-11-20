import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Courses', href: '#courses' },
    { label: 'Playbooks', href: '#features' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Join', href: '#join' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#298ffb] shadow-[0_0_0_3px_rgba(41,143,251,0.2)]" />
            <span className="font-semibold tracking-tight text-slate-900">Moneylabs</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#join" className="inline-flex items-center rounded-lg bg-[#298ffb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow">
              Join Discord
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded-md text-slate-700 hover:bg-slate-50">
                  {item.label}
                </a>
              ))}
              <a href="#join" className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#298ffb] px-3 py-2 text-sm font-semibold text-white">
                Join Discord
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
