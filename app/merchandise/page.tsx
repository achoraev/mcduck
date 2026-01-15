"use client";
export const dynamic = 'force-dynamic'; 

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft, Lock, Wallet } from 'lucide-react';
import { useIsLoggedIn, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import CountdownTimer from '@/components/CountdownTimer';

export default function MerchandisePage() {
    const [isMounted, setIsMounted] = React.useState(false);
    const isLoggedIn = useIsLoggedIn();
    const { setShowAuthFlow } = useDynamicContext();

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="min-h-screen bg-black" />;
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      {isLoggedIn ? (
        <div className="z-10 animate-in fade-in zoom-in-95 duration-500">
          <ShoppingBag size={60} className="text-orange-500 mb-6 mx-auto animate-bounce" />
          <h1 className="text-5xl font-black italic uppercase mb-4 tracking-tighter">Official <span className="text-orange-500">Merch</span></h1>
          <p className="text-gray-400 max-w-sm mx-auto mb-10">Holders get 20% off all golden goods.</p>
          
          <div className="flex justify-center scale-110 md:scale-125 mb-16">
            <CountdownTimer targetDate="2026-04-15T00:00:00" />
          </div>
        </div>
      ) : (
        <div className="z-10 max-w-md">
          <Lock size={60} className="text-gray-700 mx-auto mb-6" />
          <h1 className="text-4xl font-black italic uppercase mb-4">Store Access Denied</h1>
          <p className="text-gray-500 mb-8 font-medium">The McDuck Merchandise store is exclusive to verified token holders.</p>
          <button 
            onClick={() => setShowAuthFlow(true)}
            className="flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl font-black uppercase italic transition-all mx-auto shadow-lg shadow-orange-900/40"
          >
            <Wallet size={20} /> Connect to Enter
          </button>
        </div>
      )}

      <Link href="/" className="mt-12 flex items-center gap-2 text-gray-500 hover:text-white font-bold uppercase text-[10px] tracking-[0.2em] transition-colors relative z-10">
        <ArrowLeft size={14} /> Back to the Bin
      </Link>
    </div>
  );
}