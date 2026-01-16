"use client";

import React from 'react';
import { useIsLoggedIn, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Sparkles, Lock, Search, Zap } from 'lucide-react';

export default function WhalesAI() {
  const isLoggedIn = useIsLoggedIn();
  const { setShowAuthFlow } = useDynamicContext();

  return (
    <section id="ai-search" className="py-24">
      <div className="relative group overflow-hidden bg-gradient-to-b from-orange-500/5 to-transparent border border-white/10 rounded-[3rem] p-12 backdrop-blur-sm">
        
        {/* Decorative AI Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-widest mb-8">
            <Sparkles size={14} className="animate-pulse" /> AI Intelligence
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            Whales <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">AI Search</span>
          </h2>

          {!isLoggedIn ? (
            /* LOGGED OUT STATE */
            <div className="py-10 animate-in fade-in duration-700">
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Access proprietary whale tracking data and market sentiment powered by Scrooge's custom LLM.
              </p>
              <button 
                onClick={() => setShowAuthFlow(true)}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl mx-auto font-black uppercase italic transition-all group"
              >
                <Lock size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                Connect Wallet to Unlock
              </button>
            </div>
          ) : (
            /* LOGGED IN - COMING SOON STATE */
            <div className="relative mt-12 animate-in slide-in-from-bottom-8 duration-1000">
              {/* Mock Search Bar */}
              <div className="relative max-w-xl mx-auto opacity-50 grayscale pointer-events-none">
                <div className="absolute inset-y-0 left-6 flex items-center">
                  <Search className="text-gray-500" size={20} />
                </div>
                <div className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-16 text-left text-gray-500 font-mono text-sm">
                  Search whale movements, wallet labels...
                </div>
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="bg-orange-500 text-black font-black uppercase italic px-6 py-2 rounded-xl text-xl rotate-[-2deg] shadow-2xl shadow-orange-500/40 animate-bounce">
                  Coming Soon
                </div>
                <p className="text-orange-400 font-bold uppercase tracking-widest text-[10px] mt-4 flex items-center gap-2">
                   <Zap size={12} fill="currentColor" /> Phase 2 Intelligence
                </p>
              </div>
              
              <p className="text-gray-500 text-xs mt-12 font-medium">
                Holders with {'>'} 1M tokens will get early beta access.
              </p>
            </div>
          )}
        </div>

        {/* Background ambient light */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}