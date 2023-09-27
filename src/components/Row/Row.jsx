import axios from "axios";
import { useEffect, useState } from "react"
import RowMovie from "./RowMovie";


// eslint-disable-next-line react/prop-types
const Row = ({title, fetchURL}) => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    axios.get(fetchURL)
    .then(response=> setMovies(response.data.results))
  },[fetchURL])

  return (
    <div>
      <h3 className="text-white text-xl font-semibold p-4">{title}</h3>
      <div>
        {
          movies.map(movie=> <RowMovie key={movie.id} movie={movie}/>)
        }
      </div>
    </div>
  )
}

export default Row
