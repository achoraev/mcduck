"use client";

import React from 'react';
import { useIsLoggedIn, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Lock, Coins } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

export default function NFTVault() {
  const isLoggedIn = useIsLoggedIn();
  const { setShowAuthFlow } = useDynamicContext();

  return (
    <section id="nfts" className="py-24">
      {/* Same container style as WhalesAI */}
      <div className="relative group overflow-hidden bg-gradient-to-b from-orange-500/5 to-transparent border border-white/10 rounded-[3rem] p-12 backdrop-blur-sm">
        
        {isLoggedIn ? (
          <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in duration-700">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
                Exclusive Collection
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6">
                The <span className="text-orange-500">Billionaires</span> Club
              </h2>
              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Vault Unlocks In:</p>
                <CountdownTimer targetDate="2026-03-01T00:00:00" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-orange-500/30 transition-all">
                  <Coins className="text-orange-500/20 group-hover:text-orange-500/40 transition-colors" size={32} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* LOCKED STATE - Matched to WhalesAI layout */
          <div className="max-w-xl mx-auto text-center py-12">
            <Lock size={48} className="mx-auto mb-6 text-gray-600 opacity-50" />
            <h3 className="text-3xl font-black italic uppercase mb-4 text-gray-400">NFT Vault Locked</h3>
            <p className="text-gray-500 text-sm mb-8">Connect your Solana wallet to view the upcoming Billionaires Club collection.</p>
            <button 
              onClick={() => setShowAuthFlow(true)} 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black uppercase italic text-xs transition-all shadow-xl"
            >
              Connect to Unlock
            </button>
          </div>
        )}

        {/* Decorative background glow to match WhalesAI */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}