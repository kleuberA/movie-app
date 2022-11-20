import { useState } from "react"
import MoviesPopular from "../../components/moviesPopular"
import MovieTopRated from "../../components/moviesTopRated"

export default function Home (){

    return(
        <div className="Home">
            <MoviesPopular/>
            <MovieTopRated/>
        </div>
    )
}