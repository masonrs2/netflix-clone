import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({item}) => {
    const [favorite, setFavorite] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const movieID = doc(db, 'users', `${user?.email}`)
    const saveMovie = async () => {
        if(user?.email) {
            setFavorite(!favorite)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                id: item.id,
                title: item.title,
                img: item.backdrop_path
            })
        })
        } else {
            alert('Please sign in to save your favorite shows and movies!')
        }
    };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                        <img className="w-full h-auto block " src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />

                        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white hover:scale-105 duration-300">
                            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center" >
                                {item?.title}
                            </p>
                            <p onClick={saveMovie}>
                                {favorite ? (
                                <FaHeart className="absolute top-4 left-4 text-gray-300" /> )
                                : ( <FaRegHeart className="absolute top-4 left-4 text-gray-300" /> 
                                )}   
                            </p>
                        </div>
                    </div>
  )
}

export default Movie