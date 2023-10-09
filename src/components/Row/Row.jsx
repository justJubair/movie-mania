import axios from "axios";
import { useEffect, useState } from "react";
import RowMovie from "./RowMovie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const sliderLeft = ()=>{
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const sliderRight = ()=>{
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <div>
      <h3 className="text-white text-xl font-semibold p-4">{title}</h3>

      <div className="p-4 relative group">
        <MdChevronLeft onClick={sliderLeft} className="absolute left-2 rounded-full bg-white/80 z-10 top-12 md:top-20 hidden cursor-pointer group-hover:block hover:bg-white" size={40} />
        <div id={'slider' + rowId} className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative ">
          {movies.map((movie) => (
            <RowMovie key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight onClick={sliderRight} className="absolute rounded-full bg-white/80 z-10 right-2 top-12 md:top-20 hidden cursor-pointer group-hover:block hover:bg-white" size={40} />
      </div>
    </div>
  );
};

export default Row;
