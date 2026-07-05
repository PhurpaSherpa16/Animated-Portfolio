import React from 'react'
import { LuArrowLeft } from 'react-icons/lu'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='mainDiv'>
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-3xl mb-4'>404</h2>
            <h2 className='text-3xl mb-4'>Page Not Found</h2>
            <div className='bg-(--primary_blue) hover:bg-(--primary_blue)/90 px-4 py-2 rounded-full'>
              <Link to={`/`} 
                  className="inline-flex text-white items-center gap-2 text-sm transition-colors group">
                  <LuArrowLeft className="size-4 text-white transition-transform group-hover:-translate-x-1" />
                  <span className='text-white'>Back to Home</span>
              </Link>
            </div>
        </div>
    </div>
  )
}
