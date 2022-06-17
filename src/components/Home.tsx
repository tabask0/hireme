import React from 'react'

const Home = () => {
  return (
    <div className='absolute top-0 right-0 p-8 flex flex-row'>
      <div className='border-r-2 border-black flex flex-row p-2 mr-4'>
      <h3 className='mr-10'>Jobs</h3>
      <h3 className='mr-4'>Frequently asked questions</h3>
      </div>
      <div className='flex flex-row'>
        <h1 className='w-32 text-center text-md border-2 border-transparent p-2 rounded-2xl'>Register now</h1>
      <h1 className='w-32 text-center text-md border-2 border-black p-2 rounded-2xl'>Login</h1>
      </div>
      
    </div>
  )
}

export default Home