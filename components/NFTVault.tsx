"use client";

import React from 'react';
import { useIsLoggedIn, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Lock, Coins, Sparkles } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

export default function NFTVault() {
  const isLoggedIn = useIsLoggedIn();
  const { setShowAuthFlow } = useDynamicContext();

  // Stable placeholder images with consistent seeds
  const sneakPeeks = [
    { id: 1, img: 'https://picsum.photos/seed/scrooge1/400/400' },
    { id: 2, img: 'https://picsum.photos/seed/gold2/400/400' },
    { id: 3, img: 'https://picsum.photos/seed/vault3/400/400' },
    { id: 4, img: 'https://picsum.photos/seed/money4/400/400' },
  ];

  return (
    <section id="nfts" className="py-24">
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
              {sneakPeeks.map((item) => (
                <div key={item.id} className="group relative aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:scale-[1.05] cursor-help">
                  
                  {/* Default State: Icon & Label */}
                  <div className="z-10 flex flex-col items-center gap-2 group-hover:opacity-0 transition-all duration-300">
                    <div className="p-3 bg-orange-500/10 rounded-full">
                      <Coins className="text-orange-500" size={24} />
                    </div>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Preview</span>
                  </div>

                  {/* Hover State: Reveal Image with Blur-to-Clear effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src={item.img} 
                      alt="Sneak Peek" 
                      className="w-full h-full object-cover scale-125 blur-md group-hover:blur-0 group-hover:scale-100 transition-all duration-700 ease-out" 
                    />
                    
                    {/* Overlay Graphics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-4">
                      <div className="bg-orange-500 text-black px-3 py-1.5 rounded-xl text-[9px] font-black uppercase italic flex items-center gap-2 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Sparkles size={12} /> Billionaire #{item.id}0{item.id}
                      </div>
                    </div>
                  </div>

                  {/* Scanline/Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        ) : (
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
      </div>

      {/* Tailwind Keyframes for the shimmer (Add to globals.css if not present) */}
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}