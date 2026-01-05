"use client";

import React from 'react';
import { DynamicWidget, DynamicContextProvider, useIsLoggedIn, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { SolanaWalletConnectors } from '@dynamic-labs/solana';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Rocket, BookOpen, Layers, CheckCircle2, Coins, TrendingUp, Lock } from 'lucide-react';
import { Wallet } from 'lucide-react';

const TOKEN_DATA = [
  { name: 'Public Sale', value: 85, color: '#f97316' }, // Orange
  { name: 'Team', value: 10, color: '#fbbf24' },        // Gold
  { name: 'Marketing', value: 5, color: '#4b5563' },      // Dark Gray
];

const ROADMAP = [
  { phase: "Phase 1", title: "The Vault", items: ["Smart Contract Audit", "Fair Launch"], status: "Done" },
  { phase: "Phase 2", title: "Money Bin", items: ["DEX Listing", "Staking Live"], status: "Active" },
  { phase: "Phase 3", title: "Empire", items: ["Governance", "Multi-chain Bridge"], status: "Future" }
];

function MainContent() {
  const isLoggedIn = useIsLoggedIn();
  const { setShowAuthFlow } = useDynamicContext();

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orange-500">
      
      {/* 1. BACKGROUND IMAGE & OVERLAY */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: "url('/scrooge-bg.jpg')", 
          filter: "brightness(0.3) contrast(1.1)",
          backgroundPosition: "75% center" // This shifts the image so the face stays on the right
        }}
      />
      
      {/* 2. NAVIGATION BAR (Glassmorphism) */}
      <nav className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-black/40 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Coins className="text-white" size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic text-orange-400">McDuck</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-300">
          <a href="#tokenomics" className="hover:text-orange-400 transition-all">Economy</a>
          <a href="#roadmap" className="hover:text-orange-400 transition-all">Journey</a>
          <a href="#" className="flex items-center gap-1 hover:text-orange-400">Whitepaper <BookOpen size={14} /></a>
        </div>

        <DynamicWidget variant="dropdown" />
      </nav>

      <main className="max-w-7xl mx-auto px-4">
        {/* 3. HERO SECTION */}
      <header className="py-32 text-left px-4 max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 px-4 py-2 mb-8 border border-orange-500/20 rounded-full bg-orange-500/5 backdrop-blur-sm text-orange-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Solana Native Ecosystem
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase">
            DIGITAL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600">
              GOLD
            </span>
          </h1>
          <p className="text-gray-400 max-w-md text-lg font-medium leading-relaxed">
            The most secure wealth distribution protocol on Solana. 
            Built for those who swim in coins.
          </p>
          {/* NEW CONNECT BUTTON */}
          {!isLoggedIn ? (
            <button 
              onClick={() => setShowAuthFlow(true)}
              className="group relative flex items-center justify-center gap-3 w-fit px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black italic uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            >
              <Wallet size={20} className="group-hover:rotate-12 transition-transform" />
              Connect Phantom
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
          ) : (
            <div className="flex items-center gap-3 text-emerald-400 font-bold italic uppercase tracking-tighter bg-emerald-500/10 w-fit px-4 py-2 rounded-lg border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Vault Access Active
            </div>
          )}
        </div>
        
        {/* This empty div acts as a spacer so the text stays on the left and the face on the right stays clear */}
        <div className="hidden md:block"></div>
      </header>

        {/* 4. GATED DASHBOARD (The Bento Grid) */}
        <section id="tokenomics" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* TOKENOMICS CARD */}
            <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl relative overflow-hidden group">
               <div className="flex items-center gap-3 mb-8">
                  <Layers className="text-orange-500" />
                  <h2 className="text-3xl font-black italic uppercase">Scrooge-nomics</h2>
               </div>
               
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    {TOKEN_DATA.map((item) => (
                      <div key={item.name} className="relative">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">{item.name}</span>
                          <span className="text-orange-400 font-mono font-bold">{item.value}%</span>
                        </div>
                        <div className="w-full bg-white/5 h-3 rounded-full">
                          <div className="h-full rounded-full bg-gradient-to-r from-orange-600 to-yellow-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]" style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-[300px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={TOKEN_DATA} innerRadius={80} outerRadius={120} paddingAngle={10} dataKey="value" stroke="none">
                          {TOKEN_DATA.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                        </Pie>
                        <Tooltip contentStyle={{ background: '#000', border: '1px solid #333', borderRadius: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
               </div>
            </div>

            {/* STATUS CARD (Gated) */}
            <div className="bg-gradient-to-br from-orange-600 to-yellow-700 rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl shadow-orange-900/20 group relative overflow-hidden">
               {isLoggedIn ? (
                 <>
                   <div>
                     <TrendingUp className="mb-4 text-white" size={40} />
                     <h3 className="text-4xl font-black italic leading-none">YOUR <br/> VAULT</h3>
                   </div>
                   <div className="mt-8 space-y-2">
                     <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Available Balance</p>
                     <p className="text-5xl font-mono font-black tracking-tighter text-white">1.2M <span className="text-xl">$SM</span></p>
                   </div>
                 </>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mb-4">
                      <Lock className="text-white/80" />
                    </div>
                    <p className="font-black italic uppercase text-white">Vault Locked</p>
                    <p className="text-white/60 text-xs mt-2">Connect wallet to view holdings</p>
                 </div>
               )}
               {/* Background Glow Effect */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </div>

          </div>
        </section>

        {/* 5. ROADMAP SECTION */}
        <section id="roadmap" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">The Journey</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ROADMAP.map((step, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.05] transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${step.status === 'Done' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {step.status === 'Done' ? <CheckCircle2 size={24} /> : <Rocket size={24} />}
                </div>
                <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em]">{step.phase}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-orange-400 transition-colors italic">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map(i => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-500/40 rounded-full" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-xs tracking-widest uppercase font-bold">
        © 2026 Scrooge McDuck Protocol • Built on Solana
      </footer>
    </div>
  );
}

export default function Web3LandingPageWrapper() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || 'id',
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      <MainContent />
    </DynamicContextProvider>
  );
}