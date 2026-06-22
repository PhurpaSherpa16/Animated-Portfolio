import React from 'react'
import Tag from './tag'
import {motion} from 'framer-motion'
import { StaggerText } from '../utils/Animation'

export default function Header({title, supporting, tag_label, tagClassName, titleClassName, supportingClassName}) {
  return (
    <motion.div
    initial={{opacity:0, translateY:50}}
    whileInView={{opacity:1, translateY:0}}
    transition={{duration:1, delay:0.3, ease:"easeOut"}}
    viewport={{once: true, amount:0.3}}
    className='space-y-12 lg:space-y-16'>
        <div className='flex items-center justify-center md:justify-normal'>
            <Tag label={tag_label} className={tagClassName}/>
        </div>

        <div>
            <h1 className={`text-center md:text-left ${titleClassName}`}>
              <StaggerText text={title} className={'heroText'}/>
            </h1>
            <p className={`text-center md:text-left ${supportingClassName}`}>{supporting}</p>
        </div>
    </motion.div>
  )
}