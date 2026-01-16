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
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
        const data = await response.json();

        if (data.pairs && data.pairs[0]) {
          const pair = data.pairs[0];
          setStats({
            price: pair.priceUsd,
            // fdv is "Fully Diluted Valuation", usually used for Market Cap on Pump.fun tokens
            mcap: new Intl.NumberFormat('en-US', {
              notation: "compact",
              maximumFractionDigits: 1
            }).format(pair.fdv),
            change24h: pair.priceChange.h24,
            loading: false,
            error: false
          });
        }
      } catch (err) {
        console.error("DexScreener fetch error:", err);
        setStats(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchStats();
    // Refresh every 60 seconds to stay updated without spamming
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, [address]);

  return stats;
}