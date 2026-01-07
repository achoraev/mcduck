"use client";

import React, { useState } from 'react';
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

// --- DATA ---
const TOKEN_DATA = [
  { name: 'Public Sale', value: 85, color: '#f97316' },
  { name: 'Team', value: 10, color: '#fbbf24' },
  { name: 'Marketing', value: 5, color: '#4b5563' },
];

const ROADMAP = [
  { phase: "Phase 1", title: "The Vault", items: ["Smart Contract Audit", "Fair Launch"], status: "Done" },
  { phase: "Phase 2", title: "Money Bin", items: ["DEX Listing", "Staking Live"], status: "Active" },
  { phase: "Phase 3", title: "Empire", items: ["Governance", "Multi-chain Bridge"], status: "Future" }
];

function MainContent() {
  const isLoggedIn = useIsLoggedIn();
  const { setShowAuthFlow } = useDynamicContext();
  const [copied, setCopied] = useState(false);
  
  const contractAddress = "FVVcwtS1qeh9PBqjKd2D1jgGkFfqoAX6SdaCepgZpump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const PriceTicker = () => (
    <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Live $SMCD</span>
        <span className="text-sm font-mono font-bold text-orange-400">$0.00427</span>
        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1 rounded">+5.2%</span>
      </div>
      <a href={`https://pump.fun/coin/${contractAddress}`} target="_blank" className="text-[10px] font-black text-orange-500 hover:text-orange-400 uppercase underline underline-offset-4">
        Trade Now →
      </a>
      <div className="w-[1px] h-4 bg-white/10" />
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">M-Cap</span>
        <span className="text-sm font-mono font-bold text-white">$4.2M</span>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-cover bg-no-repeat" style={{ backgroundImage: "url('/scrooge-bg.jpg')", filter: "brightness(0.25) contrast(1.1)", backgroundPosition: "75% center" }} />

      <nav className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-black/40 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center"><Coins size={20} /></div>
          <span className="text-2xl font-black italic text-orange-400 uppercase">McDuck</span>
        </div>
        <PriceTicker />
        <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-300">
          <a href="#tokenomics" className="hover:text-orange-400">Economy</a>
          <a href="#roadmap" className="hover:text-orange-400">Journey</a>
        </div>
        <DynamicWidget variant="dropdown" />
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <header className="py-24 grid md:grid-cols-2 gap-12 min-h-[70vh] items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-orange-500/20 rounded-full bg-orange-500/5 backdrop-blur-sm text-orange-400 text-[10px] font-black uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Solana Native
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-6 italic leading-none tracking-tighter uppercase">
              Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Gold</span>
            </h1>
            <p className="text-gray-400 max-w-md text-lg mb-10">Wealth distribution for the diamond-handed. Join the money bin.</p>
            
            <div className="flex flex-col gap-6 max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`https://pump.fun/coin/${contractAddress}`} target="_blank" className="flex-1 group relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl font-black uppercase italic tracking-wider hover:scale-105 transition-all shadow-xl shadow-orange-900/20">
                  <TrendingUp size={18} className="group-hover:animate-bounce" /> Buy Now
                </a>
                <div className="flex-1">
                  {!isLoggedIn ? (
                    <button onClick={() => setShowAuthFlow(true)} className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl font-black uppercase italic transition-all">
                      <Wallet size={18} /> Connect
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
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest"><span className="text-orange-400">1,400+</span> Holders</span>
                </div>
                
                <button onClick={handleCopy} className="flex items-center gap-3 px-4 py-2 bg-orange-500/5 border border-orange-500/20 rounded-xl hover:bg-orange-500/10 transition-all">
                  <span className="text-[10px] font-mono text-orange-400 uppercase">CA: {contractAddress.slice(0,6)}...{contractAddress.slice(-4)}</span>
                  {copied ? <CheckCircle2 size={12} className="text-emerald-500" /> : <Layers size={12} className="text-orange-400" />}
                </button>
              </div>
            </div>
          </div>
        </header>

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
                <ResponsiveContainer><PieChart><Pie data={TOKEN_DATA} innerRadius={60} outerRadius={100} paddingAngle={8} dataKey="value" stroke="none">{TOKEN_DATA.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip contentStyle={{background:'#000', border:'none', borderRadius:'12px'}} /></PieChart></ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-yellow-700 rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl overflow-hidden relative">
            {isLoggedIn ? (
              <div className="animate-in fade-in slide-in-from-bottom-4">
                <TrendingUp size={48} className="mb-6" />
                <h3 className="text-3xl font-black italic">YOUR VAULT</h3>
                <div className="mt-10"><p className="text-white/60 text-xs font-bold uppercase mb-1">Balance</p><p className="text-5xl font-black italic tracking-tighter">1.2M <span className="text-xl">$SM</span></p></div>
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
          <h2 className="text-5xl font-black italic uppercase text-center mb-16">The Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ROADMAP.map((step, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.06] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${step.status === 'Done' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {step.status === 'Done' ? <CheckCircle2 size={24} /> : <Rocket size={24} />}
                </div>
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em]">{step.phase}</p>
                <h3 className="text-2xl font-bold italic mb-4">{step.title}</h3>
                <ul className="space-y-3">{step.items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-gray-400"><div className="w-1.5 h-1.5 bg-orange-500/40 rounded-full" />{item}</li>)}</ul>
              </div>
            ))}
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
    <DynamicContextProvider settings={{ environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || 'id', walletConnectors: [SolanaWalletConnectors] }}>
      <MainContent />
    </DynamicContextProvider>
  );
}