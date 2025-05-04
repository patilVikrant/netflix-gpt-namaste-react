import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
         <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_small.jpg" alt="" />
            </div>
            <form className='rounded-lg w-1/4 bg-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-12 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder='Full Name' className='bg-gray-700 p-4 mx-auto my-2 w-full' />}
                <input type="text" placeholder='Email' className='bg-gray-700 p-4 mx-auto my-2 w-full' />
                <input type="password" placeholder='Password' className='bg-gray-700 p-4 mx-auto my-2 w-full' />
                <button className='rounded-sm p-4 mx-auto my-6 w-full bg-red-700'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have a account! Sign In"}</p>
            </form>

    </div>
  )
}

export default Login
