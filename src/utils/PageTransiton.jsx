import React from 'react'
import { motion } from 'motion/react'

export default function PageTransiton({children}) {

  return (
    <div>
        <div className='relative z-20 pointer-events-none'>
            <motion.div {...anim(overlay)} className='h-screen w-screen fixed inset-0 pointer-none bg-black'/>
            <div className='h-screen w-screen fixed inset-0 flex pointer-none'>
                {[...Array(no_of_columns)].map((_,index)=>(
                    <motion.div 
                        {...anim(expand, (no_of_columns - index))} 
                        key={index} 
                        className='relative h-full w-full bg-black'/>
                ))}
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

const no_of_columns = 5

const anim = (variants, custom) =>{
    return{
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        variants,
        custom
    }
}

const overlay = {
    initial: {
        opacity: 0.2
    },
    animate: {
        opacity: 0
    },
    exit: {
        opacity: 0.2
    }
}

const expand = {
    initial: {
        top: 0,
    },
    animate : custom =>{
        return{
            top:'100%',
            transition:{
                delay: custom * 0.08,
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1]
            },
            transitionEnd:{
                height: 0,
                top: 0,
            }
        }
    },
    exit : custom =>{
        return{
            height: '100%',
            transition:{
                delay: custom * 0.05,
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }
}
