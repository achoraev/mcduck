"use client";

import React from 'react';
import { 
  DynamicWidget, 
  DynamicContextProvider, 
  useIsLoggedIn 
} from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { SolanaWalletConnectors } from '@dynamic-labs/solana';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Shield, Rocket, BookOpen, Layers, CheckCircle2, Coins, TrendingUp } from 'lucide-react';

// --- DATA CONFIGURATIONS ---
const TOKEN_DATA = [
  { name: 'Public Sale', value: 85, color: '#3b82f6' },
  { name: 'Team', value: 10, color: '#f59e0b' },
  { name: 'Marketing', value: 5, color: '#8b5cf6' },
];

const ROADMAP = [
  { phase: "Phase 1", title: "Genesis", items: ["Whitepaper Release", "Smart Contract Audit"], status: "Done" },
  { phase: "Phase 2", title: "Expansion", items: ["DEX Listing", "MetaMask & Phantom Integration"], status: "Active" },
  { phase: "Phase 3", title: "Maturity", items: ["Governance Portal", "Staking Rewards"], status: "Future" }
];

// This sub-component handles the gated content logic
function MainContent() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
      
      {/* NAVIGATION BAR */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10 sticky top-0 bg-black/60 backdrop-blur-xl z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold italic text-white text-xs">SM</div>
          <span className="text-xl font-bold tracking-tight">Scrooge McDuck</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#tokenomics" className="hover:text-blue-400 transition-colors">Tokenomics</a>
          <a href="#roadmap" className="hover:text-blue-400 transition-colors">Roadmap</a>
          <a href="/whitepaper.pdf" className="hover:text-blue-400 transition-colors flex items-center gap-1">
             Whitepaper <BookOpen size={14} />
          </a>
        </div>

        <DynamicWidget variant="dropdown" />
      </nav>

      {/* HERO SECTION */}
      <header className="py-24 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
          Solana & Ethereum Supported
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          Swim in <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">
            Digital Gold
          </span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          The ultimate treasure chest for the modern investor. Connect your Phantom or MetaMask wallet to dive in.
        </p>
      </header>

      {/* GATED DASHBOARD SECTION (Only visible when logged in) */}
      {isLoggedIn && (
        <section className="py-12 max-w-6xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500 rounded-lg"><TrendingUp size={24} /></div>
              <h2 className="text-3xl font-bold italic uppercase">Investor Dashboard</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-400 text-xs uppercase mb-1">Your $SMCD Balance</p>
                <p className="text-3xl font-black font-mono">1,250,000</p>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-400 text-xs uppercase mb-1">Staking Rewards</p>
                <p className="text-3xl font-black font-mono text-emerald-400">+12.5%</p>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-400 text-xs uppercase mb-1">Vault Status</p>
                <p className="text-3xl font-black font-mono text-blue-400">SECURE</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TOKENOMICS SECTION */}
      <section id="tokenomics" className="py-24 border-y border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Layers size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">Economy</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 italic underline decoration-blue-500 underline-offset-8">Scroogeonomics</h2>
            <div className="space-y-4">
              {TOKEN_DATA.map((item) => (
                <div key={item.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                    <span className="font-mono text-blue-400 font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[450px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={TOKEN_DATA} innerRadius={100} outerRadius={140} paddingAngle={8} dataKey="value" stroke="none">
                  {TOKEN_DATA.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '16px', background: '#111', border: '1px solid #333', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <Coins className="mx-auto mb-2 text-blue-500" size={32} />
              <p className="text-2xl font-black">1B SUPPLY</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section id="roadmap" className="py-24 max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <Rocket className="text-blue-500 mb-4" size={32} />
          <h2 className="text-5xl font-black italic tracking-tighter uppercase">Building the Money Bin</h2>
        </div>
        <div className="relative border-l-2 border-dashed border-white/20 ml-6">
          {ROADMAP.map((step, idx) => (
            <div key={idx} className="mb-16 ml-10 relative">
              <div className={`absolute -left-[51px] top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#050505] ${step.status === 'Done' ? 'bg-emerald-500' : 'bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)]'}`}>
                 {step.status === 'Done' ? <CheckCircle2 size={18} /> : <span className="text-xs font-bold">{idx + 1}</span>}
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-all group shadow-xl">
                <span className="text-blue-400 text-xs font-black tracking-[0.2em] uppercase">{step.phase}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-blue-300 transition-colors italic">{step.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.items.map(i => (
                    <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 Scrooge McDuck. Wealth is better when it's digital.</p>
      </footer>
    </div>
  );
}

// Wrapper for the Dynamic Context
export default function Web3LandingPageWrapper() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || 'some-id',
        walletConnectors: [
          SolanaWalletConnectors
        ],
      }}
    >
      <MainContent />
    </DynamicContextProvider>
  );
}