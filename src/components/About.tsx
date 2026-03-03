'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function About() {
    return (
        <section className="relative w-full py-32 bg-[#050505] overflow-hidden z-20">
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
                {/* Image / Graphic Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] relative z-10 bg-white/5 flex items-center justify-center">
                        <span className="text-white/30 text-sm tracking-widest uppercase">Insert Photo</span>
                        {/* 
                          Once you have the exact image asset, uncomment below and replace src.
                          <img src="/founder.jpg" alt="Dulal Tudu" className="w-full h-full object-cover" /> 
                        */}
                    </div>
                    {/* Glowing Accent */}
                    <div className="absolute -bottom-10 left-10 md:-bottom-20 md:left-20 w-32 h-32 md:w-48 md:h-48 bg-purple-600/20 rounded-full border border-purple-500/30 flex items-center justify-center backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] z-20 overflow-hidden text-white/50 animate-pulse">
                        <span className="text-[10px] uppercase">Glow Element</span>
                    </div>
                </motion.div>

                {/* Text / Copy Side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-4">
                        About <span className="font-bold">me.</span>
                    </h2>

                    {/* Mock Signature / Stylized Name */}
                    <div className="mb-8 hidden md:block border-b border-white/20 w-max pb-2">
                        <h3 className="text-4xl italic font-serif text-white decoration-white/30 underline underline-offset-8">
                            Dulal Tudu
                        </h3>
                    </div>

                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 text-balance">
                        Hi, I'm <strong className="text-white font-semibold">Dulal Tudu</strong>, the founder of <strong className="text-white font-semibold">PixelPulse Media</strong> — a Social Media Management agency helping businesses grow organically through strategic content, storytelling, and consistent brand presence.
                    </p>

                    <div className="mb-10">
                        <p className="text-sm uppercase tracking-widest text-white/50 mb-6">I specialize in:</p>
                        <ul className="space-y-4">
                            {[
                                "Instagram Growth",
                                "Content Strategy",
                                "Creative Reels",
                                "Social Media Branding",
                                "Lead-focused content for Realtors & Businesses",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 text-white/80 font-light text-lg">
                                    <Check className="w-6 h-6 shrink-0 text-fuchsia-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 max-w-lg">
                        <p className="text-sm uppercase tracking-widest text-white/50 mb-2">My goal is simple:</p>
                        <p className="text-xl md:text-2xl text-white font-medium italic">
                            Turn your social pages into a client-generating machine.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
