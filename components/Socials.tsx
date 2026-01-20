"use client";

import React from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Twitter, Send, LayoutTemplate, Share2, Users, Radio } from 'lucide-react';

const SocialCard = ({
    title,
    handle,
    link,
    icon: Icon,
    glowClass,
    iconClass,
    label,
    children
}: {
    title: string,
    handle: string,
    link: string,
    icon: any,
    glowClass: string,
    iconClass: string,
    label: string,
    children?: React.ReactNode
}) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1 flex flex-col justify-between min-h-[320px]"
    >
        <div className="relative z-10">
            <div className="flex justify-between items-start">
                <div className={`p-4 rounded-2xl border ${iconClass} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={28} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] font-black uppercase italic tracking-tighter">Join Community</span>
                    <Share2 size={10} className="text-orange-500" />
                </div>
            </div>

            <div className="mt-8">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">{label}</p>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-2">{title}</h3>
                <p className="text-white/40 font-mono text-xs italic">{handle}</p>
            </div>
        </div>

        {/* LIVE FEED SECTION (Optional Children) */}
        {children && (
            <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
                {children}
            </div>
        )}

        {/* Platform Glow - Fixed Tailwind v4 logic */}
        <div className={`absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${glowClass}`} />
    </a>
);

export default function Socials() {
    return (
        <section id="community" className="py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Radio size={12} className="animate-pulse" /> The Money Bin Network
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
                        Join the <span className="text-orange-500">Movement</span>
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* TWITTER WITH LIVE FEED */}
                <SocialCard
                    title="X / Twitter"
                    handle="@DigitalGold2026"
                    link={SOCIAL_LINKS.twitter}
                    icon={Twitter}
                    glowClass="bg-blue-500"
                    iconClass="bg-blue-500/10 border-blue-500/20 text-blue-400"
                    label="Latest News"
                >
                    <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                        <p className="text-[10px] text-blue-400 font-black uppercase mb-1 flex items-center gap-1">
                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-ping" /> Live Update
                        </p>
                        <p className="text-[11px] text-gray-300 leading-relaxed italic">
                            "The vault is expanding! New whale tracking AI features entering closed beta for token holders..."
                        </p>
                    </div>
                </SocialCard>

                {/* TELEGRAM */}
                <SocialCard
                    title="Telegram"
                    handle="t.me/DigitalGold2026"
                    link={SOCIAL_LINKS.telegram}
                    icon={Send}
                    glowClass="bg-sky-400"
                    iconClass="bg-sky-400/10 border-sky-400/20 text-sky-400"
                    label="24/7 Chat"
                >
                    <div className="flex items-center gap-2 mt-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[8px] font-bold">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest animate-pulse">
                            240 Online
                        </span>
                    </div>
                </SocialCard>

                {/* REDDIT */}
                <SocialCard
                    title="Reddit"
                    handle="u/DigitalGold2026"
                    link={SOCIAL_LINKS.reddit}
                    icon={LayoutTemplate}
                    glowClass="bg-orange-600"
                    iconClass="bg-orange-600/10 border-orange-600/20 text-orange-500"
                    label="Deep Dives"
                >
                    <div className="space-y-2">
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 w-[70%]" />
                        </div>
                        <p className="text-[9px] font-bold text-gray-500 uppercase">Community Governance Active</p>
                    </div>
                </SocialCard>
            </div>
        </section>
    );
}