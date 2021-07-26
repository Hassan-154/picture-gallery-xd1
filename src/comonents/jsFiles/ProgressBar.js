import React,{useEffect} from 'react'
import '../cssFiles/ProgressBar.css'
import useStorage from '../../Hooks/useStorage'

function ProgressBar({file, setFile}) {
    const { url, progress} = useStorage(file)
    useEffect(()=>{
        if(url){
            setFile(null)
        }
    },[url, setFile])
    return (

        <div className="progress__bar"  style={{width: progress + '%'}}></div>
        
    )
}

export default ProgressBar
