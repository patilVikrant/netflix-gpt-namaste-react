import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error");
    });
  }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))  
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          })

          // unsubscribe when component unmounts 
          return () => unsubscribe();    
    },[]) 



  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 px-8 py-2' src={LOGO} alt="logo" />
      {user && <div className='flex p-4'>
        <img className='w-12 h-12 p-1' src={user?.photoURL} alt="user-icon" />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div> }  
    </div>
  )
}

export default Header