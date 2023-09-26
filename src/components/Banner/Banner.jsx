import { useEffect, useState } from "react"
import requests from "../../request"
import axios from "axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random()* movies.length)];
  useEffect(()=>{
    axios.get(requests.requestPopular)
    .then(data=> setMovies(data.data.results))
    
  },[])
  console.log(movie)
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute h-[550px] w-full bg-gradient-to-r from-black">

        </div>
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.original_title} />
      </div> 
    </div>
  )
}

export default Banner
