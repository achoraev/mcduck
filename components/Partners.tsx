"use client";

import { url } from 'inspector';
import React from 'react';

const partners = [
  { name: "CoinMarketCap", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Coinmarketcap_svg_logo.svg" },
  { name: "Dexscreener", logo: "/img/dexscreener.svg" },
  { name: "Dextools", logo: "/img/dextools.png" },
  { name: "CoinGecko", logo: "/img/CGlogo.svg" },
  { name: "Binance", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg" },
  { name: "Coinbase", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Coinbase.png" },
  { name: "Reddit", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Reddit_logo.svg" },
  { name: "X", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" },
  { name: "Telegram", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Telegram_logo_icon.svg" },
];

export default function Partners() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
          Integrated with the <span className="text-orange-500">Global Ecosystem</span>
        </p>
      </div>

      {/* INFINITE SCROLL CONTAINER */}
      <div className="flex overflow-hidden select-none gap-12 mask-fade-edges">
        <div className="flex flex-nowrap shrink-0 items-center gap-16 animate-marquee">
          {/* First set of logos */}
          {partners.map((partner, i) => (
            <img 
              key={`p1-${i}`}
              src={partner.logo} 
              alt={partner.name} 
              className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          ))}
          {/* Second set (duplicate) to create infinite loop effect */}
          {partners.map((partner, i) => (
            <img 
              key={`p2-${i}`}
              src={partner.logo} 
              alt={partner.name} 
              className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}