"use client";

import React from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { useHolderCount } from '@/hooks/useHolderCount';
import { CONTRACT_ADDRESS } from '@/lib/constants';

export default function LiveStats() {
//   const holderCount = useHolderCount(CONTRACT_ADDRESS);
  const holderCount = useHolderCount("0x570A5D26f7765Ecb712C0924E4De545B89fD43dF");

  return (
    <div className="flex items-center gap-6 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl">
      {/* Holder Count */}
      <div className="flex flex-col">
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Holders</span>
        <div className="flex items-center gap-2">
          <Users size={14} className="text-orange-500" />
          <span className="text-lg font-mono font-bold text-white">
            {holderCount > 0 ? holderCount.toLocaleString() : "---"}
          </span>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="h-8 w-[1px] bg-white/10" />

      {/* Status */}
      <div className="flex flex-col">
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Sentiment</span>
        <div className="flex items-center gap-2">
          <TrendingUp size={14} className="text-emerald-500" />
          <span className="text-sm font-black text-emerald-500 italic">BULLISH</span>
        </div>
      </div>
    </div>
  );
}