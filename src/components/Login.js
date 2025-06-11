import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message)
    if(message) return;
    
    // SignIn SignUp logic
    if(!isSignInForm){
          // SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))  
            
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          })
        
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}-${errorMessage}`);
        
        });
      

    }else{
      // SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);  
               
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`)
        });


    }


  }

 
  

  return (
    <div>
         <Header />
            <div className='absolute'>
                <img src={BG_URL} alt="" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='rounded-lg w-1/4 bg-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-12 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='bg-gray-700 p-4 mx-auto my-2 w-full' />}
                <input ref={email} type="text" placeholder='Email' className='bg-gray-700 p-4 mx-auto my-2 w-full' />
                <input ref={password} type="password" placeholder='Password' className='bg-gray-700 p-4 mx-auto my-2 w-full' />
                <p className='text-red-500 font-bold'>{errorMessage}</p>
                <button className='rounded-sm p-4 mx-auto my-6 w-full bg-red-700' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have a account! Sign In"}</p>
            </form>

    </div>
  )
}

export default Login
