import React from 'react'
import {motion} from 'framer-motion'

export default function MinimalDesign() {
  return (
    <div data-cursor-hover className='relative overflow-hidden'>
        <motion.div
        whileHover="hover"
        variants={{
            hover:{
                scale:1.05
            }
        }}
        transition={{
            duration:0.6,
            ease:"backInOut"
        }}
        className='bg-(--primary_offwhite) group
            w-full md:w-[280px] lg:w-[220px] h-96 lg:h-72 2xl:w-[280px] 2xl:h-96 
            flex flex-col items-center justify-center relative overflow-hidden'>
                <h2 className='text-center text-(--primary_blue) text-xl font-extrabold'>
                    Minimal
                </h2>
                <h2 className='text-center text-(--primary_blue) text-xl font-extrabold text-[7rem] md:text-[5.5rem] lg:text-[4.5rem] 2xl:text-[5.5rem]
                group-hover:scale-80 transition-all duration-300'>
                    Design
                </h2>
                <CircleBackground/>
            </motion.div>
    </div>
  )
}


const CircleBackground = () =>{
    return(
        <motion.svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg"
        className='absolute md:size-110 lg:size-90 2xl:size-110'
        variants={{
            hover:{
                scale:1.5
            }
        }}
        transition={{
            duration:0.6,
            ease:"backInOut"
        }}>
            <motion.circle cx="149.5" cy="135.5" r="99.5" fill="#343deb" fillOpacity='0.1'
            variants={{
                hover:{
                    scaleY:0.3,
                    y:-45
                }
            }}
            transition={{
            duration:0.6,
            ease:"backInOut",
            delay:0.15
        }}
            />
            <motion.ellipse cx="149.5" cy="299" rx="116.5" ry="48" fill="#343deb" fillOpacity='0.1'
            variants={{
                hover:{
                    scaleY:2.25,
                    y:-45
                }
            }}
            transition={{
                duration:0.6,
                ease:"backInOut",
                delay:0.2
            }}
            />
            
        </motion.svg>
    )
}