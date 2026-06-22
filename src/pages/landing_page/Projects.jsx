import React from 'react'
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import { LuMoveRight } from "react-icons/lu";
import Icon from '../../utils/Icon';
import {motion} from 'framer-motion'
import { socialItem } from '../../utils/Animation'
import { MagneticElement } from '../../utils/MagneticCursor';
import { ProjectData } from '../../assets/Site';


export default function Projects() {
  return (
    <div className='mainDiv py-16' id='project'>
        <Header tag_label='Projects' title={ProjectData.title} supporting={ProjectData.supporting}
        tagClassName='bg-(--primary_blue)/10 text-(--primary_blue)' 
        titleClassName='text-(--primary_blue)'
        supportingClassName='text-(--primary_black)/60  md:w-4xl'/>

        <div className='flex flex-col gap-4 pt-16 md:pt-32 pb-8 space-y-8 md:space-y-16'>
            {ProjectData.projects.map((project,index)=>{
                return (
                    <motion.div
                    id={project.id}
                    variants={socialItem}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin:"-10px"}}
                    style={{scrollMarginTop:'100px'}}
                    custom={{ direction: "x", value: project.left === false ? 30 : -30 }}
                    className='pt-24 md:pt-0 '>
                        <div className={`flex gap-4 pb-16 ${index!== ProjectData.projects.length -1 ? 'border-b md:border-0' : ''} border-(--primary_black)/20 justify-between items-end ${project.left===false?"flex-col md:flex-row-reverse": "flex-col md:flex-row"}`}>
                                <div className={`space-y-8 relative ${project.left===false?"text-right": ""}`}>
                                    <div className={`relative flex ${project.left===false?"justify-end": "justify-start"}`}>
                                        
                                        <Link to={`/project/${project.id}`} className='text-(--primary_black) hover:text-(--primary_blue) transition-all'>
                                            <h2 className='relative font-bold hover:text-(--primary_blue) transition'>{project.title}</h2>
                                        </Link>

                                        <span className={`text-(--primary_black)/10
                                            -top-32 md:-top-40 lg:-top-64 2xl:-top-84
                                            font-black pointer-events-none
                                            text-[clamp(10rem,20vw,24rem)] absolute 
                                            ${project.left===false?"left-": "right-"}`}>{`0${index+1}`}</span>
                                    </div>
                                    <div className='space-y-4'>
                                        <p className={`w-full md:w-lg text-(--primary_black) ${project.left===false?"ml-auto": ""}`}>
                                            {project.desc}
                                        </p>
                                        <ul className={`flex items-center ${project.left===false?"justify-end": "justify-start"} gap-4`}>
                                            {project.tech.slice(0,3).map((tech,index)=>{
                                                return (
                                                    <Icon name={tech} key={index}/>
                                                )
                                            })}
                                            {project.tech.length > 3 && 
                                            <div className='bg-black/10 size-6 rounded-full flex items-center justify-center'>
                                                <span className='text-(--primary_black) text-[10px]'>
                                                {`+${project.tech.length - 3}`}
                                                </span>
                                            </div>}
                                        </ul>
                                    </div>
                                    <div className={`flex ${project.left===false ? 'justify-end' : 'justify-start'}`}>
                                        <Link to={project.liveLink} target="_blank" className={`flex gap-4 w-fit
                                            hover:bg-(--primary_black)/10 px-4 py-1.5 rounded-full
                                            ${project.left===false?"flex-row-reverse": "flex-row"} items-center`}>
                                            <MagneticElement strength={0.4}>
                                                <span>View Live Link</span>
                                            </MagneticElement>
                                            <MagneticElement strength={0.4}>
                                                <LuMoveRight className={`size-6 ${project.left===false?"rotate-180": "rotate-0"}`}/>
                                            </MagneticElement>
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full md:w-xl h-96 md:h-[500px] lg:h-[600px] bg-black relative overflow-hidden">
                                     {project.file.length > 2 ? (
                                         <>
                                             {/* Background Image */}
                                             {project.file.find(f => f.type === "image" && f.home) && (
                                                <img 
                                                     src={project.file.find(f => f.type === "image").link} 
                                                     alt="" 
                                                     className="absolute inset-0 w-full h-full object-cover z-0"
                                                 />
                                             )}
                                             {/* Foreground Video in small iPhone 17 Pro Frame */}
                                             {project.file.find(f => f.type === "video" && f.home) && (
                                                 <div className="absolute bottom-4 left-4 h-[70%] aspect-9/19.5 rounded-[24px] md:rounded-[32px] border-[6px] border-neutral-950 bg-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-4 ring-neutral-900 ring-offset-1 ring-offset-neutral-950 overflow-hidden z-10">
                                                     {/* Dynamic Island */}
                                                     <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2.5 bg-black rounded-full z-20 flex items-center justify-end px-1">
                                                         <div className="w-1 h-1 bg-neutral-900 rounded-full opacity-60"></div>
                                                     </div>
                                                     {/* Screen Glass Reflection */}
                                                     <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10 rounded-[18px]" />
                                                     {/* Video */}
                                                     <video src={project.file.find(f => f.type === "video").link} 
                                                         autoPlay 
                                                         loop 
                                                         muted 
                                                         playsInline 
                                                         className="w-full h-full object-cover rounded-[18px]"/>
                                                 </div>
                                             )}
                                         </>
                                     ) : (
                                         project.file.map((file, index) => {
                                             return (
                                                 <div key={index} className="flex items-center justify-center h-full overflow-hidden">
                                                     {file.type === "video" && file.home && (
                                                         <video 
                                                             src={file.link} 
                                                             autoPlay 
                                                             loop 
                                                             muted 
                                                             className="w-full h-full object-center relative"
                                                         />
                                                     )}
                                                     {file.type === "image" && (
                                                         <img src={file.link} alt="" className="w-full h-full object-cover" />
                                                     )}
                                                 </div>
                                             )
                                         })
                                     )}
                                 </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

