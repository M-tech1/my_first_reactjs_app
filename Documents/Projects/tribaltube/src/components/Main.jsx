import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Main = () => {
  const numSlides = 3; // Change this to the actual number of slides
  const interval = 5000;

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    // Automatically advance to the next slide at the specified interval
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % numSlides);
    }, interval);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  const image1 =
    "https://africanvibes.storage.googleapis.com/wp-content/uploads/2023/09/08064613/1-3-1025x577.png";
  const image2 =
    "https://i0.wp.com/blogs.lse.ac.uk/africaatlse/files/2019/01/foluke-benin-vatican-religion-pope-africa-economy670.jpg?resize=670%2C335&ssl=1";
  const image3 =
    "https://attitude.typepad.com/.a/6a00d83454f2ec69e2022ad3c45005200d-600wi";

  const movies = [
    {
      id: 1,
      title: "Movie 1",
      poster: "url-to-poster-image-1.jpg",
    },
    {
      id: 2,
      title: "Movie 2",
      poster: "url-to-poster-image-2.jpg",
    },
    {
      id: 3,
      title: "Movie 2",
      poster: "url-to-poster-image-2.jpg",
    },
    {
      id: 4,
      title: "Movie 2",
      poster: "url-to-poster-image-2.jpg",
    },
    // Add more movie data
  ];
  return (
    <>
      {/* ********** header ******** */}
      <div className=" w-full h-[550px] text-white">
        <Carousel
          className="w-full h-[550px] "
          showArrows={true}
          selectedItem={currentSlide}
        >
          <div className="w-full h-[500px] text-white absolute w-full h-[550px] bg-gradient-to-r from-black">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="w-full h-[500px]">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="w-full h-[500px]">
            <img src={image3} alt="Image 3" />
          </div>
        </Carousel>
      </div>

      <div className="bg-gray-100 min-h-screen p-8">
        <header className="bg-black text-white text-center py-4">
          <h1 className="text-3xl font-semibold">
            Explore the Beauty of traditional Cultures...
          </h1>
        </header>

        <main className="container mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4">Afican Culuture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white rounded shadow-md">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-cover rounded-t"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <button className="bg-black text-white px-4 py-2 mt-2 rounded-full">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <main className="container mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4">American Culture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white rounded shadow-md">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-cover rounded-t"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <button className="bg-black text-white px-4 py-2 mt-2 rounded-full">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <main className="container mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4">Asian Culture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white rounded shadow-md">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-cover rounded-t"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <button className="bg-black text-white px-4 py-2 mt-2 rounded-full">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
