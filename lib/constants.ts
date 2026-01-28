import { Rocket, CheckCircle2, Users, Globe, Flame, ShieldCheck, TrendingUp, Landmark } from 'lucide-react';

export const CONTRACT_ADDRESS = "Coming soon"; // change when start
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
    phase: "Phase 0",
    title: "Community Genesis",
    status: "Active",
    items: [
      { label: "Viral Expansion", desc: "Aggressive growth on X, Telegram, and Reddit via community raids and meme contests." },
      { label: "Terminal Upgrade", desc: "Website overhaul to include real-time 'Live Terminal' for tracking on-chain activity." },
      { label: "The Hype Engine", desc: "Establishing the 'Inner Circle' and onboarding early believers for the Fair Launch." }
    ]
  },
  {
    phase: "Phase 1",
    title: "The Golden Vault",
    status: "Future",
    items: [
      { label: "Pump.fun Launch", desc: "Fair launch with no pre-allocation. Fighting through the bonding curve with organic volume." },
      { label: "Bonding Curve Mastery", desc: "Strategic marketing push to hit the 69k MC graduation threshold rapidly." },
      { label: "Trust Foundation", desc: "Automated migration to Raydium with permanent LP burning for 100% security." }
    ]
  },
  {
    phase: "Phase 2",
    title: "Filling the Money Bin",
    status: "Future",
    items: [
      { label: "Raydium Domination", desc: "Post-graduation blitz: DEXScreener trending and high-frequency trading volume." },
      { label: "Marketing Blast", desc: "Coordination with Top-tier Solana influencers and Kols for secondary wave entry." },
      { label: "Major Tracking", desc: "Verification on CoinGecko, CMC, and DEXTools to capture institutional 'Whale' interest." }
    ]
  },
  {
    phase: "Phase 3",
    title: "Global Empire",
    status: "Future",
    items: [
      { label: "Staking Protocol", desc: "Launch the 'High Security Vault' where holders earn passive token rewards." },
      { label: "McDuck DAO", desc: "Community governance for treasury management and strategic buybacks." },
      { label: "Reality Integration", desc: "Exclusive merchandise store and real-world VIP 'Gold Club' events." }
    ]
  }
];

export const FAQ_DATA = [

  {
    question: "How is the liquidity secured?",
    answer: "We use the pump.fun protocol. Upon reaching our bonding curve target, $12k of liquidity is automatically migrated to Raydium and PERMANENTLY BURNED. The contract authorities are also hard-coded to null, making it 100% rug-proof."
  },
  {
    question: "Is the liquidity locked?",
    answer: "Yes. 100% of the initial liquidity generated on Pump.fun is automatically locked and burned upon graduation to Raydium. This ensures the protocol is rug-proof."
  },
  {
    question: "What are the transaction taxes?",
    answer: "0% Buy / 0% Sell. We believe in the free flow of wealth. Growth is driven by community volume, not by taxing our investors."
  },
  {
    question: "How do I participate in Phase 0?",
    answer: "Join our Telegram and X hubs. We reward active community members who participate in raids and help spread the Scrooge narrative before the official launch."
  },
  {
    question: "How does the 'Live Terminal' work?",
    answer: "Our website features a real-time blockchain feed. Once launched, you can watch every buy and sell live, with special alerts for 'Whale' entries."
  }
];