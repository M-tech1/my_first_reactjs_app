// import React from "react";
import axios from "axios";
import { useEffect, React, useState } from "react";

const Row = ({ title, FetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(FetchURL).then((response) => {
      setMovies(response.data);
    });
  }, [FetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {/* {movies.map((item) => ( */}
          <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block "
              src={`https://www.themoviedb.org/t/p/w500/${movies?.backdrop_path}`}
              alt={title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white"></div>
            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              test text...
            </p>

            {/* <div className="text-white"> is this dev working self?</div> */}
          </div>
          {/* ))} */}
        </div>
      </div>
    </>
  );
};
export default Row;
