import React, {useState, useEffect} from 'react';
import '../App.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row(props){

const [movies, setmovies] = useState([])
const [trailerurl, settrailerurl] = useState('')

useEffect( ()=>{


    const fetching = async ()=>{
        const response = await fetch(`${props.Url}`)
        const resjson = await response.json()
        setmovies(resjson.results)   
    };

    fetching();
}, [props.Url])


const option = {
    height : '390px',
    width: '100%',
    playerVars: {
        autoplay: 1,
    }
}

const handleClick = (movie)=>{
if (trailerurl){
    settrailerurl('')
}else{
    movieTrailer(movie?.title || '')
        .then((url)=>{
            const urlparam = new URLSearchParams(new URL(url).search);
            const v = urlparam.get('v')
            settrailerurl(v)
        })
        .catch((error)=>{
            console.log(error)
        })
}

}



    return(
        <div>
            <h1>{props.title}</h1>
            <div className="movie_lis">
               {movies.map(movie=>(
                //    <h4 key={movie.id} >{movie.title}</h4>
                   <img 
                   onClick={()=>{
                       handleClick(movie)
                   }}
                   key={movie.id} className='row_poster'  src={props.poster ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` :` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
               ))}
            </div>
            { trailerurl &&<Youtube videoId={trailerurl} opts={option} /> }
        </div>
    )
}


export default Row;