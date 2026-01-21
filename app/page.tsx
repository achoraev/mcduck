"use client";
export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import {
  DynamicWidget,
  DynamicContextProvider,
  useIsLoggedIn,
  useDynamicContext
} from '@dynamic-labs/sdk-react-core';
import { SolanaWalletConnectors } from '@dynamic-labs/solana';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import {
  Rocket, BookOpen, Layers, CheckCircle2,
  Coins, TrendingUp, Lock, Wallet
} from 'lucide-react';
import Link from 'next/link';

import { useClipboard } from '@/hooks/useClipboard';
import { CONTRACT_ADDRESS, TOKEN_DATA, FAQ_DATA, ROADMAP } from '@/lib/constants';

import CountdownTimer from '@/components/CountdownTimer';
import Navbar from '@/components/Navbar';
import WhalesAI from '@/components/WhalesAI';
import NFTVault from '@/components/NFTVault';
import Socials from '@/components/Socials';
import Tokenomics from '@/components/Tokenomics';
import Roadmap from '@/components/Roadmap';
import Faq from '@/components/Faq';
import Hero from '@/components/Hero';
import TradingChart from '@/components/TradingChart'
import LiveTransactions from '@/components/LiveTransactions';

function MainContent() {

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-cover bg-no-repeat" style={{ backgroundImage: "url('/scrooge-bg.jpg')", filter: "brightness(0.25) contrast(1.1)", backgroundPosition: "75% center" }} />

      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Socials />
        {/* <TradingChart /> chart is working will be start after launch */}
        {/* Todo will implement later with real data */}
        {/* <LiveTransactions /> */}
        <Tokenomics />
        <Roadmap />
        <WhalesAI />
        <NFTVault />
        <Faq />
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-xs uppercase font-bold tracking-widest">
        © 2026 Scrooge McDuck • Built on Solana
      </footer>
    </div>
  );
}

export default function Web3LandingPageWrapper() {
  return (
    <MainContent />
  );
}