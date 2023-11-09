import React from 'react'

export default function Industries( {industry} ) {
    
    return (
        <div className="rounded-lg text-center border border-[#ED4068] bg-transparent py-1 m-1" style={{width: '120px'}}>
            {industry === 'Home Improvement' ? 'Home Impr.' : industry}
          </div>
    )
}