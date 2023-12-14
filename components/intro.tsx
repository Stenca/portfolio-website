import React from 'react'
import Image from 'next/image'
import img_theo from '@/public/img_theo.jpg'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>
                <Image 
                    src={img_theo} 
                    alt="Image Theo"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" 
                />

                <span className="text-4x1">🖥️</span>
            </div>
        </div>
    </section>
  )
}
