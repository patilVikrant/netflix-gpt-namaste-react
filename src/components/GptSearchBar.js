import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const preferredLanguage = useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 p-4 rounded-md' action="">
            <input type="text" className='col-span-8 px-4 py-2 mr-4 rounded-sm' placeholder={lang[preferredLanguage].gptSearchPlaceholder} />
            <button className='col-span-4 px-4 py-2 bg-red-700 text-white rounded-sm'>{lang[preferredLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar