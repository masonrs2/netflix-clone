import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <div>
        <div className="w-full text-white">
            <img className="w-full object-cover h-[600px] " src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/920ce59c-55a5-40fe-acb3-a9189783886f/US-en-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            
            <div className="bg-black/40 fixed top-0 left-0 w-full h-[600px]"> </div>

                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Favorite Shows
                    </h1>
                </div>

                </div>
                <SavedMovies />
            </div>
  )
}

export default Account