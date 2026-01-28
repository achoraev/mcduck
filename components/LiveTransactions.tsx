"use client";

import React from 'react';
import { Zap, Repeat } from 'lucide-react';
import { CONTRACT_ADDRESS } from '@/lib/constants';
import { useSolanaTransactions } from '@/hooks/useSolanaTransactions';
import LiveStats from './LiveStats';

export default function LiveTransactions() {
  // HOOK IN REAL DATA
  const transactions = useSolanaTransactions(CONTRACT_ADDRESS);

  return (
    <section id="transactions" className="py-12">
      <div className="flex justify-between items-center mb-6 px-2">
        <h3 className="text-xl font-black italic uppercase flex items-center gap-3">
          <Zap size={20} className="text-orange-500 fill-orange-500 animate-pulse" /> 
          Live Terminal
        </h3>
        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
           <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
           Mainnet Live
        </span>
      </div>

      <LiveStats />
      <div className="relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-md overflow-hidden">
        <div className="space-y-3 min-h-[200px]">
          {transactions.length === 0 ? (
            <div className="flex items-center justify-center h-40 text-gray-500 font-mono text-xs italic">
              Listening for signatures on-chain...
            </div>
          ) : (
            transactions.map((tx) => (
              <div key={tx.id} className={`flex items-center gap-4 p-3 rounded-2xl border bg-emerald-500/5 border-emerald-500/10 animate-in fade-in slide-in-from-top-2`}>
                <div className="text-[9px] font-black px-2 py-1 rounded-md uppercase bg-emerald-500/20 text-emerald-400">
                  {tx.type}
                </div>
                <span className="font-mono font-bold text-sm">TX: {tx.id.slice(0, 8)}...</span>
                <div className="ml-auto flex items-center gap-4">
                  <span className="hidden md:block font-mono text-[11px] text-gray-500">{tx.wallet}</span>
                  <span className="text-[10px] font-mono text-gray-600">{tx.time}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}