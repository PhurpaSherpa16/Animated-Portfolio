import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MagneticElement } from '../utils/MagneticCursor'
import { motion } from 'framer-motion'
import { socialItem } from '../utils/Animation'

export default function Navbar() {

    const location = useLocation()

  return (
    <div className='mainDiv flex items-center justify-between py-8'>
        <motion.div
        variants={socialItem}
        initial="initial"
        animate="animate"
        custom={{direction:'x', value:-30}}>
            <Link to='/' title='Back to Home' className='cursor-pointer'>
                <div className='flex items-start gap-2'>
                    <img src="/logo.png" alt="logo"/>
                    <span className='text-(--primary_blue) font-black uppercase tracking-widest font-[vogluxe]'>Portfolio</span>
                </div>
            </Link>
        </motion.div>
        {location.pathname === '/' &&
            <motion.div 
            variants={socialItem}
            initial="initial"
            animate="animate"
            custom={{direction:'x', value:30}}
            className='hidden md:flex gap-8 items-center uppercase'>   
                <MagneticElement strength={0.4}>
                    <a href='#about' className='text-(--primary_black)'>About</a>
                </MagneticElement>
                <span>/</span>       
                <MagneticElement strength={0.4}>
                <a href='#project' className='text-(--primary_black)'>Projects</a>
                </MagneticElement>
                <span>/</span>       
                <MagneticElement strength={0.4}>
                <a href='#skill' className='text-(--primary_black)'>Skill</a>
                </MagneticElement>
            </motion.div>
         }
    </div>
  )
}
