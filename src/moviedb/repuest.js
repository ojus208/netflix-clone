const API = 'c42b5fe7af6cf79c60f495a44732e4aa';

const url = {
    fetchTrending : `https://api.themoviedb.org/3/trending/movie/week?api_key=${API}`,
    fetchNetflixOriginal : 'https://api.themoviedb.org/3/discover/tv?api_key=c42b5fe7af6cf79c60f495a44732e4aa&language=en-US',
    fetchTopRated : 'https://api.themoviedb.org/3/movie/top_rated?api_key=c42b5fe7af6cf79c60f495a44732e4aa&language=en-US&page=1',
    fetchActionMOvie: 'https://api.themoviedb.org/3/discover/movie?api_key=c42b5fe7af6cf79c60f495a44732e4aa&with_genres=28',
    fetchComedyMovie: 'https://api.themoviedb.org/3/discover/movie?api_key=c42b5fe7af6cf79c60f495a44732e4aa&with_genres=35',
    fetchHorrorMovie: 'https://api.themoviedb.org/3/discover/movie?api_key=c42b5fe7af6cf79c60f495a44732e4aa&with_genres=27',
    fetchRomanceMovie: 'https://api.themoviedb.org/3/discover/movie?api_key=c42b5fe7af6cf79c60f495a44732e4aa&with_genres=10749',
    fetchDocMovie: 'https://api.themoviedb.org/3/discover/movie?api_key=c42b5fe7af6cf79c60f495a44732e4aa&with_genres=99',
}
  
export default url;