import React from 'react'

export default function Tag({label, className='text-white bg-(--primary_offwhite)/10'}) {
  return (
    <div className={`h-fit w-fit ${className} px-6 py-1.5 uppercase tracking-widest`}>
        <span className='text-xs'>{label}</span>
    </div>
  )
}
