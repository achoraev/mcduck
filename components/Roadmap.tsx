"use client";

import React from 'react';
import { CheckCircle2, Rocket } from 'lucide-react';
import { useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import { ROADMAP } from '@/lib/constants';

export default function Roadmap() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <section id="roadmap" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter">The Journey</h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest mt-2 text-xs">From Duckburg to the Moon</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {ROADMAP.map((step, idx) => (
          <div key={idx} className="relative bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group overflow-hidden">
            {/* Status Indicator Badge */}
            <div className={`absolute top-6 right-8 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter ${step.status === 'Done' ? 'bg-emerald-500/20 text-emerald-400' :
                step.status === 'Active' ? 'bg-orange-500/20 text-orange-400 animate-pulse' : 'bg-white/5 text-white/30'
              }`}>
              {step.status}
            </div>

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-2xl ${step.status === 'Done' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                'bg-orange-500/10 text-orange-400 border border-orange-500/20'
              }`}>
              {step.status === 'Done' ? <CheckCircle2 size={28} /> : <Rocket size={28} />}
            </div>

            <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">{step.phase}</span>
            <h3 className="text-3xl font-black italic mb-8 group-hover:text-orange-400 transition-colors uppercase leading-none">{step.title}</h3>

            <div className="space-y-6">
              {step.items.map((item, i) => (
                <div key={i} className="relative pl-4 border-l border-white/10 group/item">
                  <div className="absolute -left-[1px] top-0 h-4 w-[2px] bg-orange-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  <p className="text-sm font-black italic text-gray-200 uppercase tracking-tight mb-1">{item.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}