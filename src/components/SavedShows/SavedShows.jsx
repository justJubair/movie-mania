import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import {AiOutlineClose} from "react-icons/ai"
import toast from "react-hot-toast";
const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const {user} = useAuth()
    
    const sliderLeft = ()=>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500
      }
      const sliderRight = ()=>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
      }
      useEffect(()=>{
        onSnapshot(doc(db, "users", `${user?.email}`), doc=>{
            setMovies(doc.data()?.savedShows)
        })
      },[user?.email])

      const movieRef = doc(db, "users", `${user?.email}`)
      const deleteShow = async (passedID)=>{
        try{
            const result = movies.filter(item=> item.id !== passedID)
          await updateDoc(movieRef, {
            savedShows: result
          })
          toast.success("Deleted")
        }
        catch(error){
          console.error(error)
          toast.error(error.messge)
        }
      }
  return (
    <div>
      <h3 className="text-gray-400 text-xl font-semibold p-4 mt-4">My Shows</h3>

      <div className="p-4 relative group">
        <MdChevronLeft onClick={sliderLeft} className="absolute left-2 rounded-full bg-white/80 z-10 top-12 md:top-20 hidden cursor-pointer group-hover:block hover:bg-white" size={40} />
        <div id={'slider'} className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative ">
          {movies?.map((movie) => (
            <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer relative inline-block p-2">
            <img src={`https://image.tmdb.org/t/p/w500${movie?.img}`} alt={movie?.title} />
            <div className="absolute top-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
              <p className="font-bold flex justify-center items-center text-xs md:text-sm h-full">{movie?.title}</p>
             <p onClick={()=> deleteShow(movie.id)} className="absolute top-3 right-5"><AiOutlineClose size={20}/></p>
            </div>
            </div>
          ))}
        </div>
        <MdChevronRight onClick={sliderRight} className="absolute rounded-full bg-white/80 z-10 right-2 top-12 md:top-20 hidden cursor-pointer group-hover:block hover:bg-white" size={40} />
      </div>
    </div>
  )
}

export default SavedShows
