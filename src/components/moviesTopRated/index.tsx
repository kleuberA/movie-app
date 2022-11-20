import { useEffect, useState } from "react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Link } from "react-router-dom";


export default function MovieTopRated(){
    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
        })
    },[])
    
    

    return(
        <div className="containerMoviesTopRated">
            <h1 className="containerMoviesTopRated__title">Filmes Mais Votados</h1>
            <div className="containerMoviesTopRated__cardMovies">
                    {movies.map((movie: any, key) =>{
                        return(
                                <div className="containerMoviesTopRated__cardMoviesDiv" key={key}>
                                    <div className="containerMoviesTopRated__containerImage">
                                    <Link to={`/details/${movie.id}`} >
                                        <img src={image_path + movie.backdrop_path} className="containerMoviesTopRated__imageMovie" alt="" />
                                    </Link>
                            </div>
                            <div className="textElement">
                                <h1 className="containerMoviesTopRated__titleMovie">{movie.title}</h1>
                                <span className={`${movie.vote_average > 7 ? 'verde' : 'vermelho'}`}>{movie.vote_average}</span>
                            </div>
                        </div>
                        )
                    })}
            </div>
        </div>
    )
}