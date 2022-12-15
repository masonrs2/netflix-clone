import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import Movie from './Movie'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Row = ({title, fetchURL, movieRow}) => {
    // States
    const [movies, setMovies] = useState([])

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
                    <Movie key={id} item={item} />
                ))}
            </div>
            <MdChevronRight onClick={rightSlider} className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
        </div>
    </div>
  )
}

export default Row