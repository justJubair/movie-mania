/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import toast from "react-hot-toast";

const RowMovie = ({movie}) => {
    const [like, setLike] = useState(false)
    
    const {user} = useAuth()

    const movieID = doc(db, "users", `${user?.email}`)
    const saveShow = async ()=>{
      if(user?.email) {
        setLike(!like)
       
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.backdrop_path
          })
        })
      } else {
        toast.error("Please log in to save a movie")
      }
    }
  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer relative inline-block p-2">
      <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt={movie?.title} />
      <div className="absolute top-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
        <p className="font-bold flex justify-center items-center text-xs md:text-sm h-full">{movie?.title}</p>
        <span onClick={saveShow} className="absolute top-4 left-2">{like ? <FaHeart/> : <FaRegHeart/>}</span>
      </div>
      </div>
    </>
  )
}

export default RowMovie
