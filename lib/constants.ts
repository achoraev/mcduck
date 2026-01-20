import { Rocket, CheckCircle2 } from 'lucide-react';

export const CONTRACT_ADDRESS = "Comming soon"; // change when start
export const SYMBOL = "SOL"; // change when start

export const SOCIAL_LINKS = {
  twitter: "https://x.com/DigitalGold2026",
  telegram: "https://t.me/digitalgold2026",
  reddit: "https://reddit.com/user/DigitalGold2026",
};

export const TOKEN_DATA = [
  { name: 'Public Liquidity', value: 80, color: '#f97316' },
  { name: 'Marketing (Locked till Graduate)', value: 5, color: '#fbbf24' },
  { name: 'Strategic Reserve (Locked till 1M MC)', value: 5, color: '#94a3b8' },
  { name: 'Development', value: 5, color: '#B45309' },
  { name: 'Community (Locked till Graduate)', value: 5, color: '#B45309' },
];

export const ROADMAP = [
    { 
      phase: "Phase 1", 
      title: "The Golden Vault", 
      items: [
        { label: "Token Genesis", desc: "Launch on Pump.fun with 100% fair distribution and no pre-allocation." },
        { label: "Liquidity Locked", desc: "Permanent removal of LP tokens to ensure 100% rug-proof security." },
        { label: "Community Infiltration", desc: "Launch official Telegram and X (Twitter) hubs for the inner circle." }
      ], 
      status: "Active" 
    },
    { 
      phase: "Phase 2", 
      title: "Filling the Money Bin", 
      items: [
        { label: "DEX Domination", desc: "Migrating to Raydium with strategic volume bot support for trending status." },
        { label: "The Shilling Army", desc: "Collaborations with Top-tier Solana influencers and daily raiding contests." },
        { label: "CEX Listings", desc: "Application and integration with Tier-2 centralized exchanges (MEXC/Gate.io)." }
      ], 
      status: "Future" 
    },
    { 
      phase: "Phase 3", 
      title: "Global Empire", 
      items: [
        { label: "Staking Protocol", desc: "Lock your $SMCD in the 'High Security Vault' to earn passive gold rewards." },
        { label: "McDuck DAO", desc: "Governance portal where holders vote on treasury investments and buybacks." },
        { label: "Reality Integration", desc: "Exclusive Scrooge merchandise store and real-world 'Gold Club' events." }
      ], 
      status: "Future" 
    }
  ];

  export const FAQ_DATA = [
    {
      question: "Is the liquidity locked?",
      answer: "Yes. 100% of the initial liquidity generated on Pump.fun is automatically locked. This ensures the protocol is rug-proof and the 'Money Bin' stays secure forever."
    },
    {
      question: "What are the transaction taxes?",
      answer: "0% Buy / 0% Sell. We believe in the free flow of gold. The growth of the ecosystem is driven by volume and community engagement, not by taxing holders."
    },
    {
      question: "How do I earn staking rewards?",
      answer: "Once Phase 3 is live, you can lock your $SMCD in the High-Security Vault. Rewards are distributed in $SMCD based on your share of the pool and the length of your lock-up period."
    },
    {
      question: "Is this a community-owned project?",
      answer: "Absolutely. With 80% of tokens in public circulation from day one, the power lies with the holders. Governance will transition to a DAO model in the final phase."
    }
  ];