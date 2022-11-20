import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


export default function MoviesPopular (){
    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
        })
    },[])


    return(
        <div className="containerMoviesPopular">
            <h1 className="containerMoviesPopular__title">Filmes Populares</h1>
            <div className="containerMoviesPopular__cardMovies">
                    {movies.map((movie: any, key) =>{
                        return(
                                <div className="containerMoviesPopular__cardMoviesDiv" key={key}>
                                    <div className="containerMoviesPopular__containerImage">
                                        <Link to={`/details/${movie.id}`} >
                                            <img src={image_path + movie.backdrop_path} className="containerMoviesPopular__imageMovie" alt="" />
                                        </Link>
                                    </div>
                                    <div className="textElement">
                                        <h1 className="containerMoviesPopular__titleMovie">{movie.title}</h1>
                                        <span className={`${movie.vote_average > 7 ? 'verde' : 'vermelho'}`}>{movie.vote_average}</span>
                                    </div>
                                </div>
                        )
                    })}
            </div>
        </div>
    )
}

// {movies.map((movie: any, key) => {
//     return(
//         <div key={key}>
//             <div className="containerMoviesPopular__containerImage">
//                 <img src={image_path + movie.backdrop_path} className="containerMoviesPopular__imageMovie" alt="" />
//             </div>
//             <h1 className="containerMoviesPopular__titleMovie">{movie.title}</h1>
//         </div>
//     )
// })}