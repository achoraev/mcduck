"use client";

import React from 'react';
import { useTokenStats } from '@/hooks/useTokenStats';
import { CONTRACT_ADDRESS, SYMBOL } from '@/lib/constants';

export default function PriceTicker() {
//   const { price, mcap, change24h, loading } = useTokenStats(CONTRACT_ADDRESS);
  const { price, mcap, change24h, loading } = useTokenStats("So11111111111111111111111111111111111111112");

  if (loading) {
    return (
      <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full animate-pulse">
        <div className="w-20 h-3 bg-white/10 rounded" />
      </div>
    );
  }

  const isPositive = change24h >= 0;

  return (
    <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Live ${SYMBOL}</span>
        <span className="text-sm font-mono font-bold text-orange-400">
          ${parseFloat(price).toFixed(8)}
        </span>
        <span className={`text-[10px] font-bold px-1 rounded ${isPositive ? 'text-emerald-500 bg-emerald-500/10' : 'text-red-500 bg-red-500/10'}`}>
          {isPositive ? '+' : ''}{change24h}%
        </span>
      </div>
      
      <a 
        href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[10px] font-black text-orange-500 hover:text-orange-400 uppercase underline underline-offset-4"
      >
        Trade Now →
      </a>
      
      <div className="w-[1px] h-4 bg-white/10" />
      
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">M-Cap</span>
        <span className="text-sm font-mono font-bold text-white">${mcap}</span>
      </div>
    </div>
  );
}