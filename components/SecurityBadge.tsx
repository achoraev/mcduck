"use client";

import React from 'react';
import { ShieldCheck, ExternalLink, Lock, EyeOff, Users, Share2 } from 'lucide-react';
import { CONTRACT_ADDRESS } from '@/lib/constants';

export default function SecurityBadge() {
  const rugCheckUrl = `https://rugcheck.xyz/tokens/${CONTRACT_ADDRESS}`;
//   const bubbleMapsUrl = `https://app.bubblemaps.io/sol/token/${CONTRACT_ADDRESS}`;
const bubbleMapsUrl = `https://v2.bubblemaps.io/map?address=FVVcwtS1qeh9PBqjKd2D1jgGkFfqoAX6SdaCepgZpump&chain=solana`;


  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* RUGCHECK CARD */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-black/60 border border-emerald-500/20 backdrop-blur-xl rounded-3xl p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                <ShieldCheck className="text-emerald-400 w-8 h-8" />
              </div>
              <span className="text-[10px] font-black bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full uppercase tracking-widest">
                Contract Safe
              </span>
            </div>
            
            <h4 className="text-2xl font-black uppercase italic text-white mb-2">RugCheck <span className="text-emerald-400">Verified</span></h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Automated audit confirms no malicious functions. Mint authority is revoked and LP tokens are permanently burnt.
            </p>

            <a 
              href={rugCheckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-white text-black font-black uppercase italic py-4 rounded-2xl transition-all"
            >
              Verify Contract <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* BUBBLEMAPS CARD */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-black/60 border border-purple-500/20 backdrop-blur-xl rounded-3xl p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">
                <Users className="text-purple-400 w-8 h-8" />
              </div>
              <span className="text-[10px] font-black bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full uppercase tracking-widest">
                Top Holders Map
              </span>
            </div>
            
            <h4 className="text-2xl font-black uppercase italic text-white mb-2">Bubble<span className="text-purple-400">maps</span> Analysis</h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Visualize the holder ecosystem. Our map proves there are no hidden clusters or massive insider-connected wallets.
            </p>

            <a 
              href={bubbleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 bg-purple-500 hover:bg-white text-black font-black uppercase italic py-4 rounded-2xl transition-all"
            >
              Check Clusters <Share2 size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}