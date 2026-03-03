'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MissionVision() {
    return (
        <section className="relative w-full py-32 bg-[#050505] overflow-hidden z-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-8 border-b border-white/20 pb-4 inline-block">
                        My <span className="font-bold">Mission.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                        To help businesses grow organically using strategic content, powerful storytelling, and consistent brand identity — turning their social media into a reliable client-generating system.
                    </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-8 border-b border-white/20 pb-4 inline-block">
                        My <span className="font-bold">Vision.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                        To become a trusted partner for businesses worldwide, helping them build a strong digital presence that drives real results, long-term growth, and a loyal audience.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
