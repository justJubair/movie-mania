import { useEffect, useState } from "react";
import requests from "../../request";
import axios from "axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((data) => setMovies(data.data.results));
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) +"...";
    }
    return str;
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute h-[550px] w-full bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.original_title}
        />
      </div>
      <div className="absolute w-full top-[20%] p-6">
        <h2 className="text-3xl font-semibold mb-4 md:text-5xl">
          {movie?.title}
        </h2>
        <div>
          <button className="btn border border-white text-gray-500 mr-4 bg-slate-200">
            Play
          </button>
          <button
            className="btn border border-white text-gray-500 bg-black
          "
          >
            Watch later
          </button>
        </div>
        <div>
          <p className="mt-6 text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="text-gray-300 mt-2 w-full md:max-w-[70%] lg:max-w-[50%]">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
