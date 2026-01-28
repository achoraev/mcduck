"use client";

import { useState, useEffect } from 'react';

export function useTokenStats(address: string) {
  const [stats, setStats] = useState({
    price: "0.0000",
    mcap: "0",
    change24h: 0,
    loading: true,
    error: false
  });

  useEffect(() => {
    if (!address || address === "Coming soon") return;

    const fetchStats = async () => {
      try {
        // 1. Try DexScreener first
        const dexRes = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
        const dexData = await dexRes.json();

        if (dexData.pairs && dexData.pairs.length > 0) {
          const pair = dexData.pairs[0];
          setStats({
            price: parseFloat(pair.priceUsd).toFixed(8),
            mcap: new Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(pair.fdv || pair.marketCap),
            change24h: pair.priceChange.h24 || 0,
            loading: false,
            error: false
          });
          return;
        }

        // 2. Fallback to Helius DAS API
        const heliusUrl = `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIUS_API_KEY}`;
        const response = await fetch(heliusUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 'stats-fetch',
            method: 'getAsset',
            params: { 
              id: address,
              displayOptions: { showFungible: true } // REQUIRED for price data
            }
          }),
        });
        
        const { result } = await response.json();

        if (result?.token_info?.price_info) {
          const price = result.token_info.price_info.price_per_token;
          const totalCap = result.token_info.price_info.total_price || (price * 1000000000);

          setStats({
            price: price.toFixed(9),
            mcap: new Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(totalCap),
            change24h: 0,
            loading: false,
            error: false
          });
        } else {
          // If token exists but has no price data yet (Brand New)
          setStats(prev => ({ ...prev, mcap: "CALCULATING", loading: false }));
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setStats(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); 
    return () => clearInterval(interval);
  }, [address]);

  return stats;
}