import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Courses from './components/Courses'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <CTA />
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Moneylabs. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-slate-600 hover:text-[#298ffb]">Twitter/X</a>
              <a href="#" className="text-slate-600 hover:text-[#298ffb]">YouTube</a>
              <a href="#" className="text-slate-600 hover:text-[#298ffb]">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App