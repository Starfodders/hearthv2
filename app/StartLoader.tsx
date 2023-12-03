'use client'

import React, { useState, useEffect, useRef } from 'react'
import landingBG from "@/assets/homeBG.png"

const StartLoader = () => {

    const imgRef = useRef<HTMLImageElement>(null)
    const [loaded, setLoaded] = useState<Boolean>(false)

    useEffect(() => {
        if (imgRef.current) {
            setLoaded(true)
        }
    }, [imgRef])

    return (
        <div className='w-full h-screen'>
            <img src={landingBG.src} alt="" className={loaded ? 'loadingBG' : ""} style={loaded ? { display: 'block' } : { display: 'none' }} ref = {imgRef}></img>
        </div>
    )
}

export default StartLoader