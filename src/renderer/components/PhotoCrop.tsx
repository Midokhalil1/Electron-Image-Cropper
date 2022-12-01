import { Link } from "react-router-dom"
import { useState } from "react"

export default function PhotoCrop() {
    const [imageSrc, setImageSrc] = useState(null)
    const [filename, setFilename] = useState(null)

    
    return (
        <>

        <h1> Please choose a photo to crop </h1>
        <input type= "file" accept="image" />
        <Link to = "/">&lt;Back</Link>

       
        
        </>
    )
}