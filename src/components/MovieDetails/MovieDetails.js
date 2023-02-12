import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./MovieDetails.css"
import { Rating } from 'react-simple-star-rating';

const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState({})
  const [movieRating, setMovieRating] = useState(2)
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    function getFilm() {

      axios
        .get(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}`
        )
        .then((res) => {
          setMovie(res.data);
          console.log('myMovie', res.data);
          setMovieRating(Math.round(Number(res.data.Ratings[0]['Value'].split('/')[0])/2))
        })
        .catch((err) => console.log(err));
    }
    getFilm()

  }, []);

  return (

    <div className="mb-4">



      <div id="ContainerHL">
        <div id="MainPoster">
          <img
            src={movie.Poster}
            height="280" alt="myImage" />

        </div>

        <div id="TitleHL"><b>{movie.Title}</b></div>

      </div>
      <div id="SelMovie">
        <div id="MovieInfoMain">
          <div id="Title"><b> </b></div>
          <div id="UserRating"></div>
          <div id="DetailsTop"></div>
          <div id="DetailsTopCover"></div>
          <div id="DetailsBottom"></div>
          <div id="DetailsBottomCover"></div>
          <div id="Details">
            <table>

              <tr>
                <td className="Key">Genre</td>
                <td className="Value">{movie.Genre}</td>
              </tr>
              <tr>
                <td className="Key">Released</td>
                <td className="Value">{movie.Released}</td>
              </tr>

              <tr>
                <td className="Key">Plot</td>
                <td className="Value">{movie.Plot}</td>
              </tr>
              <tr>
                <td className="Key">Rating</td>
                <td className="Value"><Rating
                  readonly={true} initialValue={movieRating}  /></td>

              </tr>
            </table>
          </div>

        </div>
      </div>
      <div id="BTN_Back" onClick={goBack}>BACK</div>
      <div id="Background">
        <img
          src={movie.Poster} alt="myImage" />

      </div>

    </div>

  );

}

export default MovieDetails;