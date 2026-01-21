"use client";

import React from 'react';
import { LineChart, Maximize2, ExternalLink } from 'lucide-react';
import { CONTRACT_ADDRESS } from '@/lib/constants';

export default function TradingChart() {
  // Replace this with your actual Pair Address if you have one, 
  // otherwise use the Token Address (DEX Screener handles both).

  const contract = "45sspkuqs1ssbedqxd2mzrmdjyaxf7gyqyhs5xdxuwc5";
  const chartUrl = `https://dexscreener.com/solana/${contract}?embed=1&theme=dark&trades=0&info=0`;

  return (
    <section id="chart" className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <LineChart size={12} /> Live Market Data
          </div>
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
            The <span className="text-orange-500">Money</span> Flow
          </h2>
        </div>
        
        <a 
          href={`https://dexscreener.com/solana/${contract}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-500 hover:text-orange-500 transition-colors border-b border-white/10 pb-2 italic"
        >
          View Full Screener <ExternalLink size={12} />
        </a>
      </div>

      {/* CHART CONTAINER */}
      <div className="relative group">
        {/* Glow Effect behind the chart */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative bg-black border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/10">
          {/* Header Bar */}
          <div className="bg-white/[0.03] border-b border-white/5 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live SOL/XXXX Pair</span>
            </div>
            <Maximize2 size={14} className="text-white/20" />
          </div>

          {/* Iframe Wrapper */}
          <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe 
              src={chartUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              title="DEX Screener Chart"
              loading="lazy"
              allow="clipboard-write"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}