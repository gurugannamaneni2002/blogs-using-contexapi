import React from 'react'

const Card = (props) => {
    const data = props.post;
    console.log(data);
  return (
    <div className=' my-8'>
        <h1 className='font-bold text-lg'>{data.title}</h1>
        <p className='text-sm my-1'>By <span className='italic'>{data.author}</span> on <span className=' cursor-pointer underline font-semibold'>{data.category}</span></p>
        <p>Posted on <span>{data.date}</span></p>
        <p className='mt-4 mb-1'>{data.content}</p>
        <div className=''>{
          data.tags.map((tag)=>{
            return <span className=' text-xs mx-1 underline text-blue-600 font-bold'>{`#${tag}  `}</span>}
          )
        }</div>
    </div>
  )
}

export default Card