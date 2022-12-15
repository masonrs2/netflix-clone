import React, {useState, useEffect} from 'react'
import { MdChevronLeft } from 'react-icons/md'
import { MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'

const SavedMovies = () => {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()

    const leftSlider = () => {
        var slider = document.getElementById('slider')
        slider = slider.scrollLeft -= 500
    }

    const rightSlider = () => {
        var slider = document.getElementById('slider')
        slider = slider.scrollLeft += 500
    }
    
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (movieID) => {
        try {
            const result = movies.filter((item) => item.id !== movieID);
            await updateDoc(movieRef, {
                savedShows: result,
            });   
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setMovies(doc.data()?.savedShows);
        });
      }, [user?.email]);

  return (
    <div className="">
        <h2 className="text-gray-400 font-bold md:text-3xl p-4 mt-4">My Shows</h2>
        <div className="flex relative items-center group">
            <MdChevronLeft onClick={leftSlider} className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
            <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative" >
                {movies.map((item) => (
                    <div key={item.id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                        <img className="w-full h-auto block " src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />

                        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white hover:scale-105 duration-300">
                            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center" >
                                {item?.title}
                            </p>

                            <p onClick={() => deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4"> <AiOutlineClose /> </p>
                           
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight onClick={rightSlider} className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
        </div>
    </div>
  )
}

export default SavedMovies