import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/Appcontext'
import Loading from './Loading';
import Card from './Card';
const Blogs = () => {
    const {loading,posts,fetchData} = useContext(AppContext);
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div className=' py-20 max-w-[700px] mx-auto flex justify-center items-center min-h-screen '>
        {loading?<Loading/>:
            <div>
                {(posts.length === 0)?"No Posts Left" :
                    posts.map((post)=>{
                       return <Card post = {post}></Card>
                    })
                }
            </div>
        
        
        }
    </div>
  )
}

export default Blogs