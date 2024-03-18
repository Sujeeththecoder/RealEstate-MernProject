import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import  {getDownloadURL, getStorage, uploadBytesResumable} from 'firebase/storage';

export default function Profile() {
    const fileRef = useRef(null)
    const { currentUser } = useSelector((state) => state.user)
    const[file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const[fileUploadError, setFileUploadError] = useState(false);
    cconst[FormData, setFormData] = useState({});
    console.log(FormData);
    console.log(filePerc);
    console.log(fileUploadError);
  //firebase storage
//   allow read;
//   allow write: if
//   request.resource.size < 2 * 1024 * 1024 &&
//   request.resource.contentType.matches('image/*')
useEffect(()=> {
    if(file){
        handleFileUpload(file);
    }
}, [file]);

const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime()+file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
    (snapshot) => {
        const progress = (snapshot.bytesTransferred/
        snapshot.totalBytes)*100;
        console.log('upload is' + progress + '%done');
        setFilePerc(Math.round(progress));
    });
    (error)=> {
        setFileUploadError(true);
    };
    ()=> {
        getDownloadURL(uploadTask.snapshot.ref).then
        ((downloadURL) => {
            setFormData({...FormData, avatar: downloadURL});
        })
    }
}
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <input
                onChange={(e) => setFile(e.target.files[0])}
                 type="file" 
                ref={fileRef} 
                hidden
                 accept='image/*'/>
                <img 
                onClick={()=>fileRef.current.click()} 
                src={currentUser.avatar} alt="profile" 
                className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />

                <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg' defaultValue={currentUser.username} />
                <input type="email" placeholder='email' id='email' className='border p-3 rounded-lg' defaultValue={currentUser.email} />
                <input type="password" placeholder='password' id='password' className='border p-3 rounded-lg' />
                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
            </form>
            <div className="flex justify-between mt-5">
                <span className='text-red-700 cursor-pointer'>Delete account</span>
                <span className='text-red-700 cursor-pointer'>Sign out</span>
            </div>
        </div>
    );
}
