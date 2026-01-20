"use client";

import React from 'react';
import { Layers, TrendingUp, Lock } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import { TOKEN_DATA } from '@/lib/constants';

export default function Tokenomics() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <section id="tokenomics" className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl relative overflow-hidden">
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
            <ResponsiveContainer>
              <PieChart>
                <Pie data={TOKEN_DATA} innerRadius={60} outerRadius={100} paddingAngle={8} dataKey="value" stroke="none">
                  {TOKEN_DATA.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-orange-600 to-yellow-700 rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
        {isLoggedIn ? (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <TrendingUp size={48} className="mb-6" />
            <h3 className="text-3xl font-black italic uppercase">Your Vault</h3>
            <div className="mt-10"><p className="text-white/60 text-xs font-bold uppercase">Balance</p><p className="text-5xl font-black italic tracking-tighter">1.2M <span className="text-xl">$tokens</span></p></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Lock size={48} className="mb-4 opacity-50" />
            <p className="font-black italic uppercase">Vault Locked</p>
          </div>
        )}
      </div>
    </section>
  );
}