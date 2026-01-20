"use client";

import React from 'react';
import { FAQ_DATA } from "@/lib/constants";

export default function Faq() {
  return (
    <section id="faq" className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Common Inquiries</h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Everything you need to know about the vault</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="group bg-white/[0.02] border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-all">
              <h4 className="text-lg font-bold italic text-orange-400 mb-2 uppercase tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                {item.question}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium pl-3.5">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}