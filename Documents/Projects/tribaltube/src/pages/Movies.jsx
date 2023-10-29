import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from "../components/row";
import requests from "../requests";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  // const movie = movies[Math.floor(Math.random() * movies.length)];
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.RequestPopular)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(movies);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://www.themoviedb.org/t/p/w500/${movies?.backdrop_path}`}
            alt={movies?.title}
          />
          <div className=" w-[50rem] h-[50rem] text-center text-white absolute w-full top-[25%] right-[6%] p-4 md:p-8 hidden md:block  border-gray-500 py-2 px-5 ">
            {" "}
            Watch Videos
            <img
              src={`https://www.themoviedb.org/t/p/w500/${movies.poster_path}`}
              className="w-full h-full rounded-[3rem] "
            />
          </div>

          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold p-5">
              {" "}
              {movies?.title}
            </h1>
            <div className="p-4">
              <button className="border bg-gray-300 text-black border-gray-500 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-500 py-2 px-5 ml-4">
                {" "}
                Watch Later
              </button>
            </div>
            <p className="text-grey-400 text-ml p-5">
              Released: {movies.release_date}
            </p>
            <p className="w-full md:max-w-[20%] xl:max-w-[35%] text-grey-200 p-5">
              {truncateString(movies?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
      <Row title="UpComing" FetchURL={requests.RequestUpcoming} />
      <Row title="Popular" FetchURL={requests.RequestPopular} />
      <Row title="Trending" FetchURL={requests.RequestTrending} />
    </>
  );
};

export default Movies;
