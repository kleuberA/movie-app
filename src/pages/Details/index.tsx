import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ContainerDetails, ContainerDetailsGrid, ContainerDetailsInfos, ContainerImageDetails, ImageDetails, ReleaseDate } from './style';
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function Details(){

    const { id } = useParams();

    const [movies, setMovies]: any = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            const {title,  poster_path, overview, release_date, vote_average} = data;
            const movie: any = {
                id, 
                title, 
                sinopse: overview, 
                image: `${image_path}${poster_path}`,
                release_date,
                vote_average
            }
            setMovies(movie)
        })
    },[])


    return(
        <div>
            <div className="containerIconReturn">
                <Link to='/'><AiOutlineArrowLeft/> Back</Link>
            </div>
        <ContainerDetails>
            <ContainerDetailsGrid>
                <ContainerImageDetails>
                    <ImageDetails src={movies.image} alt="" />
                </ContainerImageDetails>
                <ContainerDetailsInfos>
                    <h1>{movies.title}</h1>
                    <span className='sinopse'>{movies.sinopse}</span>
                    <ReleaseDate>{movies.release_date}</ReleaseDate>
                    <span className={`voteAverage ${movies.vote_average > 7 ? 'verde' : 'vermelho'}`}>{movies.vote_average}</span>
                </ContainerDetailsInfos>
                
            </ContainerDetailsGrid>
        </ContainerDetails>
        </div>
    )
}

{/* <ContainerImageDetails>
                    <ImageDetails src={movies.image} alt="" />
                </ContainerImageDetails> */}