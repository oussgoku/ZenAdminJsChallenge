import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./MovieDetails.css"
const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState({})
  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}`
      )
      .then((res) => {
        setMovie(res.data);
        console.log('myMovie', res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  return (
    <div>

      <div id="ContainerHL">
        <div id="MainPoster">
          <img
            src={movie.Poster}
            height="280" />
         
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
              
            </table>
          </div>

        </div>
      </div>
      <div id="BTN_Back">BACK</div>
      <div id="Background">
        <img
          src={movie.Poster} />
      </div>

    </div>
   
  );

}

export default MovieDetails;