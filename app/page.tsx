"use client";
export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { 
  DynamicWidget, 
  DynamicContextProvider, 
  useIsLoggedIn, 
  useDynamicContext 
} from '@dynamic-labs/sdk-react-core';
import { SolanaWalletConnectors } from '@dynamic-labs/solana';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { 
  Rocket, BookOpen, Layers, CheckCircle2, 
  Coins, TrendingUp, Lock, Wallet 
} from 'lucide-react';
import Link from 'next/link';

import { useClipboard } from '@/hooks/useClipboard';
import { CONTRACT_ADDRESS, TOKEN_DATA, FAQ_DATA, ROADMAP} from '@/lib/constants';
import CountdownTimer from '@/components/CountdownTimer';
import Navbar from '@/components/Navbar';
import WhalesAI from '@/components/WhalesAI';
import NFTVault from '@/components/NFTVault';
import Socials from '@/components/Socials';

function MainContent() {
  const isLoggedIn = useIsLoggedIn();
  const { copied, copy } = useClipboard();
  const { setShowAuthFlow } = useDynamicContext();
  const contractAddress = CONTRACT_ADDRESS;

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-cover bg-no-repeat" style={{ backgroundImage: "url('/scrooge-bg.jpg')", filter: "brightness(0.25) contrast(1.1)", backgroundPosition: "75% center" }} />

      <Navbar />
    
      <main className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <header className="py-24 grid md:grid-cols-2 gap-12 min-h-[70vh] items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-orange-500/20 rounded-full bg-orange-500/5 backdrop-blur-sm text-orange-400 text-[10px] font-black uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Solana Native
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase">
              DIGITAL <br/>
              <span className="inline-block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600">
                GOLD
              </span>
            </h1>
            <p className="text-gray-400 max-w-md text-lg mb-10">Wealth distribution for the diamond-handed. Join the money bin.</p>
            
            <div className="flex flex-col gap-6 max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`} target="_blank" className="flex-1 group relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl font-black uppercase italic tracking-wider hover:scale-105 transition-all shadow-xl shadow-orange-900/20">
                  <TrendingUp size={18} className="group-hover:animate-bounce" /> Buy Now
                </a>
                <div className="flex-1">
                  {!isLoggedIn ? (
                    <button onClick={() => setShowAuthFlow(true)} className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl font-black uppercase italic transition-all">
                      <Wallet size={18} /> Connect Wallet
                    </button>
                  ) : (
                    <div className="w-full flex items-center justify-center gap-2 text-emerald-400 font-bold bg-emerald-500/10 px-6 py-4 rounded-2xl border border-emerald-500/20">
                      <CheckCircle2 size={18} /> Active
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-gray-800"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+5}`} /></div>)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest"><span className="text-orange-400">100+</span> Holders</span>
                </div>
                
                <button onClick={() => copy(contractAddress)} className="flex items-center gap-3 px-4 py-2 bg-orange-500/5 border border-orange-500/20 rounded-xl hover:bg-orange-500/10 transition-all">
                  <span className="text-[10px] font-mono text-orange-400 uppercase">CA: {CONTRACT_ADDRESS}</span>
                  {copied ? <CheckCircle2 size={12} className="text-emerald-500" /> : <Layers size={12} className="text-orange-400" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        <Socials />
        
        {/* BENTO GRID (Tokenomics & Gated Vault) */}
        <section id="tokenomics" className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl group relative">
            <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3"><Layers className="text-orange-500" /> Scroogenomics</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                {TOKEN_DATA.map(item => (
                  <div key={item.name}>
                    <div className="flex justify-between text-[10px] font-bold uppercase mb-2"><span>{item.name}</span><span className="text-orange-400">{item.value}%</span></div>
                    <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden"><div className="h-full bg-orange-500" style={{ width: `${item.value}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="h-[250px]">
                <ResponsiveContainer><PieChart>
                <Pie 
                  data={TOKEN_DATA} 
                  innerRadius={60} 
                  outerRadius={100} 
                  paddingAngle={8} 
                  dataKey="value" 
                  stroke="none"
                  label={({ percent }) => 
                    percent !== undefined ? `${(percent * 100).toFixed(0)}%` : ""
                  }
                  labelLine={false} 
                >
                  
                  {TOKEN_DATA.map((entry, index) => (
                    <Cell 
                      key={index} 
                      fill={entry.color} 
                      style={{ outline: 'none' }} 
                    />
                  ))}
                </Pie>
                  </PieChart></ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-yellow-700 rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl overflow-hidden relative">
            {isLoggedIn ? (
              <div className="animate-in fade-in slide-in-from-bottom-4">
                <TrendingUp size={48} className="mb-6" />
                <h3 className="text-3xl font-black italic">YOUR VAULT</h3>
                <div className="mt-10"><p className="text-white/60 text-xs font-bold uppercase mb-1">Balance</p><p className="text-5xl font-black italic tracking-tighter">1.2M <span className="text-xl">$tokens</span></p></div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Lock size={48} className="mb-4 opacity-50" />
                <p className="font-black italic uppercase">Vault Locked</p>
                <p className="text-xs opacity-60 mt-2 px-6">Connect your Solana wallet to unlock your holdings</p>
              </div>
            )}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">The Journey</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest mt-2 text-xs">From Duckburg to the Moon</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ROADMAP.map((step, idx) => (
            <div key={idx} className="relative bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group overflow-hidden">
              {/* Status Indicator Badge */}
              <div className={`absolute top-6 right-8 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter ${
                step.status === 'Done' ? 'bg-emerald-500/20 text-emerald-400' : 
                step.status === 'Active' ? 'bg-orange-500/20 text-orange-400 animate-pulse' : 'bg-white/5 text-white/30'
              }`}>
                {step.status}
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-2xl ${
                step.status === 'Done' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                'bg-orange-500/10 text-orange-400 border border-orange-500/20'
              }`}>
                {step.status === 'Done' ? <CheckCircle2 size={28} /> : <Rocket size={28} />}
              </div>

              <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">{step.phase}</span>
              <h3 className="text-3xl font-black italic mb-8 group-hover:text-orange-400 transition-colors uppercase leading-none">{step.title}</h3>
              
              <div className="space-y-6">
                {step.items.map((item, i) => (
                  <div key={i} className="relative pl-4 border-l border-white/10 group/item">
                    <div className="absolute -left-[1px] top-0 h-4 w-[2px] bg-orange-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <p className="text-sm font-black italic text-gray-200 uppercase tracking-tight mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <WhalesAI />
      <NFTVault />

      {/* 6. FAQ SECTION */}
      <section id="faq" className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Common Inquiries</h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Everything you need to know about the vault</p>
          </div>
          
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="group bg-white/[0.02] border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-all">
                <h4 className="text-lg font-bold italic text-orange-400 mb-2 uppercase tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  {item.question}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-medium pl-3.5">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-xs uppercase font-bold tracking-widest">
        © 2026 Scrooge McDuck • Built on Solana
      </footer>
    </div>
  );
}

export default function Web3LandingPageWrapper() {
  return (
      <MainContent />
  );
}