import React,{useState,useEffect} from 'react'
//import project storage
import { projectStorage,projectFirestore,timestamp } from '../firebase/config'
function useStorage(file) {
    //define useStates
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(0);
    const [url, setUrl] = useState(0);
    useEffect(()=>{
        //reference
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err)=>{
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt})
            setUrl(url)
        })
    },[file])
    return {progress, url, error}
}

export default useStorage
