"use client";

import React from 'react';
import { TrendingUp, Wallet, CheckCircle2, Layers } from 'lucide-react';
import { useIsLoggedIn, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useClipboard } from '@/hooks/useClipboard';
import { CONTRACT_ADDRESS } from '@/lib/constants';

export default function Hero() {
  const isLoggedIn = useIsLoggedIn();
  const { setShowAuthFlow } = useDynamicContext();
  const { copied, copy } = useClipboard();

  return (
    <header className="py-24 grid md:grid-cols-2 gap-12 min-h-[70vh] items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-orange-500/20 rounded-full bg-orange-500/5 backdrop-blur-sm text-orange-400 text-[10px] font-black uppercase tracking-widest">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" /> Solana Native
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase">
          DIGITAL <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600">GOLD</span>
        </h1>
        <p className="text-gray-400 max-w-md text-lg mb-10">Wealth distribution for the diamond-handed. Join the money bin.</p>
        
        <div className="flex flex-col gap-6 max-w-md">
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`} target="_blank" className="flex-1 group relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl font-black uppercase italic tracking-wider hover:scale-105 transition-all shadow-xl shadow-orange-900/20">
              <TrendingUp size={18} className="group-hover:animate-bounce" /> Buy Now
            </a>
            {!isLoggedIn ? (
              <button onClick={() => setShowAuthFlow(true)} className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl font-black uppercase italic transition-all">
                <Wallet size={18} /> Connect Wallet
              </button>
            ) : (
              <div className="flex-1 flex items-center justify-center gap-2 text-emerald-400 font-bold bg-emerald-500/10 px-6 py-4 rounded-2xl border border-emerald-500/20">
                <CheckCircle2 size={18} /> Active
              </div>
            )}
          </div>
          <button onClick={() => copy(CONTRACT_ADDRESS)} className="flex items-center gap-3 px-4 py-2 bg-orange-500/5 border border-orange-500/20 rounded-xl hover:bg-orange-500/10 transition-all w-fit">
            <span className="text-[10px] font-mono text-orange-400 uppercase">CA: {CONTRACT_ADDRESS}</span>
            {copied ? <CheckCircle2 size={12} className="text-emerald-500" /> : <Layers size={12} className="text-orange-400" />}
          </button>
        </div>
      </div>
    </header>
  );
}