import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FrontendCard() {
    const [step, setStep] = useState(0);
    const text = "Frontend Development";
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((s) => (s + 1) % 8);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (step >= 5) {
            let current = "";
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    current += text[i];
                    setTypedText(current);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 60);
            return () => clearInterval(typingInterval);
        } else {
            setTypedText("");
        }
    }, [step]);

    return (
        <div data-cursor-hover className="relative bg-(--primary_offwhite) w-full md:w-[280px] lg:w-[220px] h-96 lg:h-72 2xl:w-[280px] 
        2xl:h-96 rounded-2xl flex items-center justify-center overflow-hidden p-0.5 shadow-lg">
            {/* Mock Screen Workspace */}
            <div className="relative w-full h-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col">
                {/* Header Dots */}
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-900 bg-neutral-900/50 select-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                    <div className="text-[9px] text-neutral-500 font-mono ml-2 truncate">phurpa.workspace.dev</div>
                </div>

                {/* Workspace area */}
                <div className="flex-1 p-2.5 relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {step === 0 ? (
                            /* Loading Screen */
                            <motion.div key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 z-20 space-y-3">
                                <span className="text-[10px] text-neutral-400 font-mono tracking-wider">Loading...</span>
                                <div className="w-24 h-1 bg-neutral-900 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ left: "-100%" }}
                                        animate={{ left: "100%" }}
                                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                        className="absolute top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent"
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            /* Workspace Content */
                            <motion.div key="workspace"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full relative flex items-center justify-center">
                                 {/* Grid of Color Cards */}
                                 <div className="grid grid-cols-2 gap-2 w-full h-full max-h-[160px] lg:max-h-[140px] 2xl:max-h-[220px] relative">
                                     {/* Card 1 */}
                                     <motion.div
                                         initial={{ scale: 4, opacity: 0 }}
                                         animate={{
                                             scale: step >= 4 ? 0 : 1,
                                             opacity: step >= 4 ? 0 : 1,
                                         }}
                                         transition={{ type: "spring", stiffness: 100, damping: 14 }}
                                         className="bg-blue-600/90 rounded-lg flex items-center justify-center p-2 shadow-md relative">
                                         <span className="text-[8px] text-white/70 font-semibold font-mono">UI</span>
                                     </motion.div>
 
                                     {/* Card 2 (Target Indigo Card) */}
                                     <motion.div 
                                         initial={{ scale: 4, opacity: 0 }}
                                         animate={
                                             step >= 4
                                                 ? {
                                                       position: "absolute",
                                                       top: 0,
                                                       left: 0,
                                                       width: "100%",
                                                       height: "100%",
                                                       zIndex: 10,
                                                       scale: 1,
                                                       opacity: 1,
                                                   }
                                                 : {
                                                       scale: 1,
                                                       opacity: 1,
                                                   }
                                         }
                                         transition={{ type: "spring", stiffness: 120, damping: 14 }}
                                         className="bg-indigo-600 rounded-lg flex flex-col items-center justify-center p-3 shadow-md border border-indigo-400/20">
                                         {step < 4 ? (
                                             <span className="text-[8px] text-white/70 font-semibold font-mono">Code</span>
                                         ) : (
                                             <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-3">
                                                 <div className="text-white text-xs lg:text-[13px] 2xl:text-sm font-bold font-mono tracking-wide leading-snug">
                                                     {typedText}
                                                     {step === 5 && <span className="animate-pulse">|</span>}
                                                 </div>
 
                                                 {/* Mini CTA Button inside card */}
                                                 {step >= 6 && (
                                                     <motion.button
                                                         initial={{ opacity: 0, y: 10 }}
                                                         animate={{ opacity: 1, y: 0 }}
                                                         className="px-3 py-1 bg-white text-indigo-700 font-bold text-[9px] uppercase tracking-wider rounded-full shadow hover:bg-neutral-100 transition-colors">
                                                         Let's Design
                                                     </motion.button>
                                                 )}
                                             </div>
                                         )}
                                     </motion.div>
 
                                     {/* Card 3 */}
                                     <motion.div
                                         initial={{ scale: 4, opacity: 0 }}
                                         animate={{
                                             scale: step >= 4 ? 0 : 1,
                                             opacity: step >= 4 ? 0 : 1,
                                         }}
                                         transition={{ type: "spring", stiffness: 100, damping: 14 }}
                                         className="bg-amber-500/90 rounded-lg flex items-center justify-center p-2 shadow-md"
                                     >
                                         <span className="text-[8px] text-white/70 font-semibold font-mono">API</span>
                                     </motion.div>
 
                                     {/* Card 4 */}
                                     <motion.div
                                         initial={{ scale: 4, opacity: 0 }}
                                         animate={{
                                             scale: step >= 4 ? 0 : 1,
                                             opacity: step >= 4 ? 0 : 1,
                                         }}
                                         transition={{ type: "spring", stiffness: 100, damping: 14 }}
                                         className="bg-emerald-600/90 rounded-lg flex items-center justify-center p-2 shadow-md">
                                         <span className="text-[8px] text-white/70 font-semibold font-mono">Git</span>
                                     </motion.div>
                                 </div>

                                {/* Animated Cursor */}
                                <motion.div
                                    initial={{ x: 80, y: 80, opacity: 0 }}
                                    animate={
                                        step === 1
                                            ? { x: 80, y: 80, opacity: 0 }
                                            : step === 2
                                            ? { x: 45, y: 25, opacity: 1 }
                                            : step === 3
                                            ? { x: 25, y: -25, opacity: 1, scale: 0.85 }
                                            : { opacity: 0 }
                                    }
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute pointer-events-none z-30 text-white"
                                >
                                    <svg
                                        className="w-4 h-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] text-white fill-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4 4l11.73 11.73-4.55 1.18 3.54 7.08-2.68 1.34-3.54-7.08-4.5 4.5v-18.75z" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
