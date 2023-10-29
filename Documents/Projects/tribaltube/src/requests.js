const key = "3c7d4ae001335ce940f96a2987f21743";

const requests = {
  // RequestMovies: `https://api.themoviedb.org/3/movie/157336?api_key=3c7d4ae001335ce940f96a2987f21743&append_to_response=videos,images`,
  RequestMovies: `https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos`,
  RequestPopular: `https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos,images`,
  RequestUpcoming: `https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos,images`,
  RequestTrending: `https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos,images`,
  // RequestPopular: `https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos,images`,
};

export default requests;
