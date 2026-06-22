import { useState, useEffect } from 'react'
import CTA from '../../components/cta'
import Header from '../../components/header'
import {motion} from 'framer-motion'
import { socialItem } from '../../utils/Animation'
import FrontendCard from '../../components/FrontendCard'
import MinimalDesign from '../../components/MinimalDesign'
import MotionDesign from '../../components/MotionDesign'

export default function AboutMe() {
  return (
    <div id='about' className='bg-(--primary_blue) h-fit w-full overflow-hidden'>
        <div className='mainDiv py-16 pb-24 space-y-12 md:space-y-16 w-full'>
            <Header tag_label='About Me' title={data.title} supporting={data.supporting}
                    tagClassName='bg-(--primary_offwhite)/20 text-(--primary_offwhite)' 
                    titleClassName='text-(--primary_offwhite)'
                    supportingClassName='text-(--primary_offwhite)/60 w-full'/>

            <hr className='border-(--primary_offwhite)/20'/>

            <div className='flex flex-col lg:flex-row gap-16 justify-between lg:justify-normal items-center'>
                <motion.div 
                variants={socialItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin:"-50px"}}
                custom={{ direction: "x", value: -30 }}
                className='flex flex-col w-full md:flex-row gap-16 md:gap-8 justify-between lg:justify-normal col-span-2'>
                    <FrontendCard/>
                    <MinimalDesign/>
                    <MotionDesign/>
                </motion.div>

                <motion.div
                variants={socialItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin:"-50px"}}
                custom={{ direction: "x", value: 30 }}
                className='w-full flex flex-col md:flex-row lg:flex-col items-center md:items-end justify-center 
                lg:items-end lg:justify-end gap-8'>
                    <p className='text-(--primary_offwhite) text-center w-full md:text-left lg:text-right lg:w-sm'>{data.whatIdo}</p>
                    <CTA label="Let's Build" className='bg-(--primary_offwhite)'
                    text_color='text-(--primary_blue)'
                    icon='border border-(--primary_offwhite) text-(--primary_offwhite)'/>
                </motion.div>
            </div>

        </div>
    </div>
  )
}


const data = {title:'More than Code',
    supporting:'Every project is an opportunity to combine aesthetics, functionality, and performance into experiences that feel modern, intuitive, and refined. I believe the most effective digital products are those where design, development, and interaction work together seamlessly to create clarity and confidence for the user.',
    whatIdo: 'The most impactful digital experiences are built at the intersection of design, technology, and interaction. My work focuses on bringing those elements together to create products that are visually refined, highly functional, and effortless to navigate.',
    cards:[
        {title:"Frontend Development"},
        {title:"Minimal Design"},
        {title:"Motion & Interaction"},
    ]
}
