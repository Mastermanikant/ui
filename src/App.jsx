import React from 'react';
import { Sparkles, Globe, Shield, Code, ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* 1. MINIMAL HEADER */}
      <header className="h-16 border-b border-slate-800/80 bg-[#0d0f17]/90 backdrop-blur-md px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-base font-extrabold tracking-tight text-white flex items-center">
            FrankBase<span className="text-indigo-400">UI</span>
            <span className="ml-2 text-[10px] uppercase font-bold tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">Blank Canvas</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold text-slate-400">
          <a href="#home" className="text-white hover:text-indigo-400 transition-colors">Home</a>
          <a href="#docs" className="hover:text-indigo-400 transition-colors">Documentation</a>
          <a href="#components" className="hover:text-indigo-400 transition-colors">Components</a>
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
        </nav>

        <div className="flex items-center space-x-3">
          <a 
            href="https://github.com/Mastermanikant/ui" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* 2. BLANK CANVAS MAIN BODY (WORDPRESS STYLE BLANK HOME) */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Blank Canvas Foundation Ready</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Welcome to <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">FrankBase UI</span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Clean WordPress-style blank foundation. Ready for step-by-step modular component additions.
          </p>
        </div>
      </main>

      {/* 3. MINIMAL FOOTER */}
      <footer className="h-16 border-t border-slate-800/80 bg-[#0c0d13] px-6 md:px-12 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center space-x-2">
          <span>© 2026 FrankBase UI. All rights reserved.</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>
      </footer>

    </div>
  );
}
