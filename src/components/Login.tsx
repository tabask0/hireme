import React from 'react'

const Register = () => {
  return (
    <div className="w-5/12 border-4 border-red-400  rounded-md mx-auto mt-36 font-bold">
      <h1 className='mt-2 text-2xl'>Register</h1>
      <div className='p-4'>
        <div className='flex flex-row mt-8 ml-10'>       
           <h4>First Name:</h4>
           <input type="text" className='border-2 border-black ml-4'/>
        </div>
        <div className='flex flex-row mt-8 ml-10'>       
           <h4>Last Name:</h4>
           <input type="text" className='border-2 border-black ml-4'/>
        </div>
        <div className='flex flex-row mt-8 ml-10'>       
           <h4>Email:</h4>
           <input type="email" className='border-2 border-black ml-4'/>
        </div>
        <div className='flex flex-row mt-8 ml-10'>       
           <h4>Password:</h4>
           <input type="password" className='border-2 border-black ml-4'/>
        </div>
        <div className='flex flex-row mt-8 ml-10'>       
           <h4>Confirm Password:</h4>
           <input type="password" className='border-2 border-black ml-4'/>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-4'>    
      </div>
    </div>
  )
}

export default Register