import React from 'react'
import { RiNodejsFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiFramer, SiPostgresql, SiSupabase } from 'react-icons/si'
import { FaFigma, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdImage } from "react-icons/io";
import { FaBasketball } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";
import { RiSupabaseFill, RiVercelFill } from "react-icons/ri";




export default function Icon({name, className}) {
    const icon_name = name.replace(/[^a-zA-Z]/g, '').toLowerCase()
    const icons = {
        'react':RiReactjsLine,
        'tailwindcss':RiTailwindCssFill,
        'framer':SiFramer,
        'node':RiNodejsFill,
        'figma':FaFigma,
        'supabase':SiSupabase,
        'postgresql': SiPostgresql,
        'linkedin':FaLinkedin,
        'github':FaGithub,
        'dribble':FaBasketball,
        'netlify': BiLogoNetlify,
        'supabase':RiSupabaseFill,
        'vercel' : RiVercelFill
    }
    const IconComponent = icons[icon_name] || IoMdImage
  return (
    <IconComponent className={`size-6 shrink-0 ${className}`}/>
  )
}
