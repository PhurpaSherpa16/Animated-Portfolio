import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import { MagneticElement } from '../utils/MagneticCursor';


export default function CTA({label, className, icon, text_color}) {
  return (
    <Link to={'/contact'} className={`flex ${text_color} gap-2 justify-center md:justify-end min-w-xs`}>
        <span className={`${className} px-12 py-2`}>
            <MagneticElement strength={0.4}>
              {label}
            </MagneticElement>
        </span>
        <span className={`flex items-center justify-center px-2 ${icon}`}>
            <MagneticElement strength={0.4}>
              <IoMdArrowBack className='rotate-135 size-6'/>
            </MagneticElement>
        </span>
    </Link>
  )
}
