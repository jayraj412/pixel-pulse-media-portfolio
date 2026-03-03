'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
            {/* Ambient Animated Gradients reflecting the PixelPulse logo colors */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-fuchsia-600/30 to-purple-800/20 blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-orange-500/20 to-pink-600/20 blur-[120px] pointer-events-none"
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">

                {/* Logo / Brand Intro */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 flex items-center justify-center"
                >
                    <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
                            Welcome to the Future
                        </span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <div className="overflow-hidden py-2">
                    <motion.h1
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none text-white drop-shadow-2xl flex flex-col md:flex-row items-center gap-4"
                    >
                        Pixel<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 animate-gradient-x">Pulse</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="mt-6 text-2xl md:text-3xl font-light tracking-[0.3em] uppercase text-white/60">
                        Social Media Management & Organic Growth
                    </p>
                </motion.div>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 text-lg md:text-xl text-white/50 font-light max-w-2xl leading-relaxed text-balance"
                >
                    Helping Brands & Businesses Grow Organically Through High-Quality Content
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-16 flex flex-col sm:flex-row items-center gap-6"
                >
                    <button className="px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        View Our Work
                    </button>
                    <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold tracking-wide hover:bg-white/10 transition-colors duration-300">
                        Get in Touch
                    </button>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
                    />
                </div>
            </motion.div>

        </section>
    );
}
