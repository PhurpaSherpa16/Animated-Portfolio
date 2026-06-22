import React from 'react'
import { motion } from 'framer-motion'
import { FaWifi } from 'react-icons/fa'
import { FiBatteryCharging } from 'react-icons/fi'
import { MagneticElement } from '../utils/MagneticCursor'


export default function MotionDesign() {
    return (
        <div data-cursor-hover className='bg-(--primary_offwhite) relative overflow-hidden w-full md:w-[280px] lg:w-[220px] 
            2xl:w-[280px]
            h-96 lg:h-72 2xl:h-96 
            flex items-center justify-center'>
            <PhoneCase>
                <Header />
                <Screen />
            </PhoneCase>
        </div>
    )
}

const PhoneCase = ({ children }) => {
    return (
        <MagneticElement strength={1}>
        <div className='w-full md:w-[280px] lg:w-[220px] 
            2xl:w-[280px] h-full flex justify-center relative'>
            <h2 className='absolute w-full -top-20 lg:-top-10 left-1/2 -translate-x-3/4 md:-translate-x-1/2
             2xl:-top-24 text-[3rem] font-extrabold shrink-0 uppercase
            text-center text-(--primary_blue)'>Interative</h2>
            <h2 className='absolute w-full -bottom-20 lg:-bottom-10 left-1/2 -translate-x-1/2
            2xl:-bottom-24 text-[3rem] font-extrabold shrink-0 uppercase tracking-widest
            text-center text-(--primary_blue)'>Design</h2>
            <div className='rounded-4xl bg-black scale-80 2xl:scale-110'
                style={{
                    transform: 'rotateY(30deg) rotateX(15deg)',
                    transformStyle: 'preserve-3d'
                }}>
                    <motion.div
                        initial={{
                            y: -10,
                            x: -10,
                            transform: 'translateZ(8px) translateY(-2px)',
                            boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)'
                        }}
                        animate={{
                            y: 0,
                            x: 0,
                            transform: 'translateZ(32px) translateY(-8px)',
                            boxShadow: '-40px 20px 10px 6px rgba(0,0,0,0.6)'
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            repeatType: 'mirror',
                            ease: 'easeInOut'
                        }}
                        className='relative h-72 w-48 border-2 rounded-4xl border-b-4 border-r-4
                    border-white border-t-neutral-200 border-l-neutral-200
                    bg-black p-1 pl-1 pt-1'>
                        {children}
                    </motion.div>
            </div>
            </div>
        </MagneticElement>
    )
}

const Header = () => {
    return (
        <div className='relative top-2 '>
            <div className='absolute inset h-2 w-10 bg-black z-10 rounded-full top-0 left-1/2 -translate-x-1/2' />
            <div className='absolute right-4 z-10 flex items-center gap-2'>
                <FaWifi className='size-2 text-white' />
                <FiBatteryCharging className='size-2 text-white' />
            </div>
        </div>
    )
}

const Screen = () => {
    return (
        <div className="relative z-0 h-full w-full flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-neutral-950 p-4">
            {/* Colorful Radial Animated Backgrounds */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    x: [0, 15, -10, 8, 0],
                    y: [0, -20, 15, -8, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                }}
                className="absolute -top-16 -left-16 w-44 h-44 rounded-full bg-violet-600/30 blur-xl"
            />
            <motion.div
                animate={{
                    scale: [1, 0.85, 1.15, 1, 0.9],
                    x: [0, -15, 10, -8, 0],
                    y: [0, 15, -20, 8, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full bg-indigo-500/35 blur-[28px]"
            />
            <motion.div
                animate={{
                    scale: [0.9, 1.1, 1, 0.85, 0.9],
                    x: [8, -8, 15, -4, 8],
                    y: [12, -12, 8, 20, 12],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-fuchsia-500/25 blur-xl"
            />

            {/* Top Area / Decorative UI */}
            <div className="w-full flex items-center justify-between z-10 pt-2 opacity-50 select-none">
                <span className="text-[7px] text-white/50 font-mono tracking-widest uppercase">Canvas</span>
                <span className="text-[7px] text-white/50 font-mono">100%</span>
            </div>

            {/* Central Animated Content */}
            <div className="flex flex-col items-center justify-center z-10 flex-1 space-y-4 my-auto select-none">
                <motion.div
                    animate={{
                        y: [0, -6, 0],
                        rotate: [0, 4, -4, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                    }}
                    className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg"
                >
                    <svg width="28" height="22" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white drop-shadow-sm">
                        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" />
                        <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" />
                    </svg>
                </motion.div>

                {/* Animated Typography Label */}
                <div className="text-center space-y-0.5">
                    <motion.h3 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-[10px] font-extrabold tracking-wider uppercase"
                    >
                        Interaction
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-indigo-300 text-[8px] font-medium tracking-widest uppercase"
                    >
                        Design
                    </motion.p>
                </div>
            </div>

            {/* Bottom Glow CTA Button */}
            <motion.button 
                whileTap={{ scale: 0.97 }}
                className="w-full z-10 rounded-xl bg-white/90 py-2 text-[8px] font-bold text-neutral-950 uppercase tracking-widest shadow-md backdrop-blur border border-white/20 select-none"
            >
                Conntect Me
            </motion.button>
        </div>
    );
};
