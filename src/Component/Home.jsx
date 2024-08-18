import React, { useEffect, useState } from 'react'
import '../Component/Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from './MoviList';
const Home = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)
    useEffect(()=>{
     
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=fe72f852a8a8e6c649248d223d27e4dc')
     .then((res)=>res.json())
     .then((data)=>setMovies(data.results))
    .catch(error => console.error('Error fetching data:', error));


    },[])
  return (
    <><div className="poster">
    <Carousel 
    showThumbs={false}
    autoPlay={true}
    transitionTime={3}
    infiniteLoop={true}
    showStatus={false}

    >
        {movies.map(movie => (
         <Link to={`movie/${movie.id}`}>
            <div key={movie.id} className='posterImage'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie && movie.backdrop_path}`} alt={movie.title} />
            </div>
            <div className='posterImage_overlay' >
                <div  className='posterImage_title'>{movie ? movie.original_title:""}</div>
                <div style={{background:'none'}} className='posterImage_runtime'>{movie ? movie.release_date:""}
                <span style={{background:'none'}} className='posterImage_rating'>{movie ? movie.vote_average:""}
                <i   style={{background:'none'}} class="fas fa-star"/>{" "}
                </span>
                </div>
                <div  style={{background:'none'}}  className='posterImage_description'>{movie? movie.overview:""}</div>
            </div>
            </Link>
    
        ))}
    </Carousel>
    <MovieList/>
    </div>
      
    </>
  )
}

export default Home
