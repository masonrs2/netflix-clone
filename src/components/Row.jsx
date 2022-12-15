import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, movieRow}) => {

    // States
    const [movies, setMovies] = useState([])
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })

    }, [fetchURL])

    const leftSlider = () => {
        var slider = document.getElementById('slider' + movieRow)
        slider = slider.scrollLeft -= 500
    }

    const rightSlider = () => {
        var slider = document.getElementById('slider' + movieRow)
        slider = slider.scrollLeft += 500
    }

    console.log('movies: ', movies)

  return (
    <div>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="flex relative items-center group">
            <MdChevronLeft onClick={leftSlider} className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
            <div id={'slider' + movieRow} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative" >
                {movies.map((item, id) => (
                    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                        <img className="w-full h-auto block " src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />

                        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white hover:scale-105 duration-300">
                            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center" >
                                {item?.title}
                            </p>
                            <p>
                                {favorite ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />}   
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight onClick={rightSlider} className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
        </div>
    </div>
  )
}

export default Row