import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import {toggleGptSearchView} from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const gptSearch = useSelector(store => store.gpt.showGptSearch)
  
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

    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView())
      
    }

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
    }


  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 px-8 py-2' src={LOGO} alt="logo" />
      {user && <div className='flex p-4'>
        {
          gptSearch && <select className='p-2 m-2 bg-gray-700 text-white rounded-sm' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
        }
        
        <button onClick={handleGptSearchClick} className='bg-purple-800 px-4 py-2 text-white font-bold mx-2 rounded-sm'> {gptSearch ? "HOMEPAGE" : "GPT Search"}</button>
        <img className='w-12 h-12 p-1' src={user?.photoURL} alt="user-icon" />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div> }  
    </div>
  )
}

export default Header