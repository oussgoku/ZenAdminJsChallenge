import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Movies.css"
const Movies = (props) => {

    const { movies } = props
    const navigate = useNavigate();

    useEffect(() => {

    }, [movies]);
    const handleSelect = (movie) => {
        navigate(`/movie/${movie.imdbID}`)
    }
    return (
        <div>

            {movies.length === 0 ? <div className="container">
                No Movies
            </div> :

                <div className="row" id="data-panel">
                    {movies.map((movie) => {
                        return (


                            <div className="col-md-6 col-lg-3">
                                <div className="card mb-2">
                                    <img className="card-img-top myimg" src={movie.Poster} alt={movie.Poster} />
                                    <div className="card-body movie-item-body">
                                        <h5 className="card-title name">{movie.Title}</h5>
                                    </div>


                                    <div className="card-footer">
                                        <button className="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#show-movie-modal" key={movie.imdbID} onClick={() => handleSelect(movie)}>More</button>
                                    </div>
                                </div>
                            </div>
                            


                        )
                    })}
                </div>
            }

        </div>
    )
}

export default Movies;