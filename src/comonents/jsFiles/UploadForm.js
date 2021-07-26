import React,{useState} from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png','image/jpg']
    const changehandler=(e)=>{
        let selected = e.target.files[0];
        if(selected){
            setFile(selected);
            setError("")
        } else{
            setFile(null);
            setError('please select an image file (png or jpg)')

        }
    }
    return (
        <form>
        <label className="file-box">
            <input className="file" type="file" onChange={changehandler}/>
            <span className="span">+</span>
            </label>
            <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <div className="file__name">{ file.name }</div>}
            { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm
