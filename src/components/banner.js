import React, { useState, useEffect } from 'react';

function Banner(props) {

    const [movie, setmovie] = useState({})

    useEffect(() => {

        const fetching = async () => {
            const num = Math.floor((Math.random() * 20) + 1);
            const response = await fetch(`${props.Url}`)
            const resjson = await response.json()
            setmovie(resjson.results[num])
            console.log(num)

        };

        fetching();
    }, [props.url])


    return (
        <div className="banner" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        }}>
            <div className="banner_text_area">
                <h1>{movie.title}</h1>
                <div className="btn">
                    <button>Play</button>
                    <button>Add list</button>
                </div>
                <p>{movie.overview ? movie.overview.substring(0, 199) + '...' : "loading....."}</p>
            </div>
            <div className="blur"></div>
        </div>


    )
}


export default Banner;