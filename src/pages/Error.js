import React from 'react'

const Error = () => {
  return (
    <>
    <h1 className="ml-[48vw] text-blue-600 font-bold text-5xl mt-4 animate-pulse">OOPS!!</h1>
    <div className="flex ">
      <img src="/err.png" className='ml-14 mt-32 h-[50vh] w-[50vw]'></img>
      <img src="/githublogo.png" className='ml-[2vw] mt-20 h-[65vh] w-[35vw]'></img>
    </div>
    </>
  )
}

export default Error