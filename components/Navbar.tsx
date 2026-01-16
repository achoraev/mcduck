"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Coins, BookOpen } from 'lucide-react';
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import PriceTicker from '../components/PriceTicker';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowAuthFlow } = useDynamicContext();

  const navLinks = [
    { name: 'Economy', href: '#tokenomics' },
    { name: 'Journey', href: '#roadmap' },
    { name: 'NFTs', href: '#nfts' },
    { name: 'Merch', href: '/merchandise' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT: Hamburger Button (Visible only on mobile) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-orange-500 hover:text-orange-400 p-2"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-orange-500/20">
            <Coins size={20} className="text-white" />
          </div>
          <span className="text-2xl font-black italic text-orange-400 uppercase tracking-tighter">McDuck</span>
        </Link>

        {/* CENTER: Price Ticker (Desktop) */}
        <PriceTicker />

        {/* RIGHT: Desktop Nav & Login */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-orange-400 transition-colors">
                {link.name}
              </Link>
            ))}
            <a href="/docs/whitepaper.pdf" target="_blank" className="flex items-center gap-1.5 text-orange-500 hover:text-orange-400 transition-all">
              Whitepaper <BookOpen size={14} />
            </a>
          </div>
          <DynamicWidget variant="dropdown" />
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black italic uppercase text-white hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="/docs/whitepaper.pdf" target="_blank" className="text-3xl font-black italic uppercase text-orange-500">
            Whitepaper
          </a>
        </div>
      )}
    </nav>
  );
}