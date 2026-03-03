'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Users, MousePointer2 } from 'lucide-react';

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#050505] py-32 px-6 md:px-12 relative z-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-24 border-b border-white/10 pb-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/50 block" /> Case Studies & Portfolio
                    </p>
                    <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-white uppercase text-balance">
                        Proven <br /><span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Results.</span>
                    </h2>
                </div>

                {/* --- Case Study: Madify.official --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
                    {/* Copy Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative inline-block mb-8">
                            {/* Faux light leak */}
                            <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none" />
                            <h3 className="text-5xl md:text-6xl font-serif italic text-white relative z-10 tracking-tight">
                                Madify.official
                            </h3>
                        </div>

                        <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl text-balance">
                            Madify needed a stronger and more consistent social media presence to match their reputation in the influencer and celebrity marketing industry. Their content lacked brand identity, engagement stability, and a clear storytelling strategy to showcase their collaborations and creator ecosystem.
                        </p>
                    </motion.div>

                    {/* Data / Insights Visualization Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 text-black shadow-2xl relative overflow-hidden max-w-lg mx-auto w-full"
                    >
                        {/* Tab header */}
                        <div className="flex border-b border-gray-200 mb-6 text-sm font-semibold text-gray-400 uppercase tracking-widest">
                            <div className="pb-3 border-b-2 border-black text-black px-4 flex-1 text-center cursor-pointer">Activity</div>
                            <div className="pb-3 px-4 flex-1 text-center cursor-pointer">Content</div>
                            <div className="pb-3 px-4 flex-1 text-center cursor-pointer">Audience</div>
                        </div>

                        <p className="font-bold text-lg mb-2">Interactions</p>
                        <div className="text-center mb-8">
                            <h4 className="text-5xl font-light mb-2">143</h4>
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Total taps on your posts or profile<br />from May 25 - May 31</p>
                        </div>

                        {/* Dummy Bar Chart */}
                        <div className="flex items-end justify-between h-32 mb-8 gap-2">
                            {[18, 18, 31, 20, 11, 20, 25].map((val, i) => (
                                <div key={i} className="flex flex-col items-center flex-1">
                                    <span className="text-[10px] text-gray-400 mb-1">{val}</span>
                                    <div
                                        className="w-full bg-[#3b82f6] rounded-t-sm"
                                        style={{ height: `${(val / 31) * 100}%` }}
                                    />
                                    <span className="text-[10px] text-gray-400 mt-2 font-medium">
                                        {['F', 'S', 'S', 'M', 'T', 'W', 'T'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats list */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <div>
                                    <p className="font-medium flex items-center gap-2"><Users className="w-4 h-4" /> Profile Visits</p>
                                    <p className="text-[10px] text-gray-400">-37 vs. May 18 - May 24</p>
                                </div>
                                <span className="font-semibold text-lg">133</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <div>
                                    <p className="font-medium flex items-center gap-2"><MousePointer2 className="w-4 h-4" /> Website Clicks</p>
                                    <p className="text-[10px] text-gray-400">-1 vs. May 18 - May 24</p>
                                </div>
                                <span className="font-semibold text-lg">7</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <div>
                                    <p className="font-medium">Get Directions</p>
                                    <p className="text-[10px] text-gray-400">-7 vs. May 18 - May 24</p>
                                </div>
                                <span className="font-semibold text-lg">2</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- Portfolio Posts Section --- */}
                <div>
                    <div className="mb-12 border-b border-white/10 pb-6 flex items-baseline gap-4">
                        <h3 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">Portfolio</h3>
                        <span className="text-white/40 tracking-widest text-sm">— Post</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                        {/* Post 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white overflow-hidden mb-6 relative shadow-2xl">
                                {/* Since I don't have the exact image, I'll recreate the layout text overlay conceptually */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-200 flex flex-col items-center justify-start p-8">
                                    <h4 className="text-3xl font-black text-[#e11d48] tracking-tighter mb-8">MADIFY <span className="text-black mx-4">x</span> <span className="text-[#ea580c] font-sans">xiaomi</span></h4>
                                    <div className="flex-1 w-full bg-white/20 rounded-xl border border-white/50 backdrop-blur-md flex items-center justify-center border-dashed border-2">
                                        <span className="text-black/30 uppercase tracking-widest text-sm font-semibold">Creator Collage Visualization</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-2">
                                <Heart className="w-8 h-8 text-[#e11d48] shrink-0" strokeWidth={1.5} />
                                <span className="font-serif italic text-3xl text-white/80">670 <span className="font-sans text-xl not-italic font-light text-white/50 lowercase">likes</span></span>
                            </div>
                        </motion.div>

                        {/* Post 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white mb-6 relative shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-amber-100 flex flex-col items-center justify-start p-8">
                                    <h4 className="text-3xl font-black text-[#e11d48] tracking-tighter mb-8 items-center flex">MADIFY <span className="text-black mx-4">x</span> <span className="text-black font-serif italic lowercase text-4xl leading-none">perfora</span></h4>
                                    <div className="flex-1 w-full bg-white/20 rounded-xl border border-white/50 backdrop-blur-md flex items-center justify-center border-dashed border-2">
                                        <span className="text-black/30 uppercase tracking-widest text-sm font-semibold">Creator Collage Visualization</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-2">
                                <Heart className="w-8 h-8 text-[#e11d48] shrink-0" strokeWidth={1.5} />
                                <span className="font-serif italic text-3xl text-white/80">570 <span className="font-sans text-xl not-italic font-light text-white/50 lowercase">likes</span></span>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
