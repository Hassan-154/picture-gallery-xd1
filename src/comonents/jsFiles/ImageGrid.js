import React from 'react'
import useFireStore from '../../Hooks/useFireStore'
import Grid from '@material-ui/core/Grid';

const ImageGrid =() => {
    const { docs } = useFireStore ('images')
    console.log(docs);
    return (
        <div className="img-grid">
        { docs && docs.map(doc => (
            <div className="img-warp" key={doc.id}>
            <img src={doc.url} alt="uplaoded pic"/>
            </div>
        ))}
            
        </div>
    )
}

export default ImageGrid

