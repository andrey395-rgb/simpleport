import React, { useEffect, useState } from 'react'
import load from '../../assets/assets/Ellipsis@1x-1.6s-200px-200px (1).svg'

export default function Perloader() {

    const [text, setText] = useState('')
    const [showImg, setShowImg] = useState (true)


    useEffect(() => {
        setTimeout(() =>{
            setShowImg(false)
            setText(
                'I waited 3 seconds to be loaded did you see the spinner?'
            )
        }, 3000)
    },[])

  return (

    <div>
        {
            showImg?(
                <img src={load}/>
            ) : (
                <h3>{text}</h3>
            )
        }
    </div>

  )
}

