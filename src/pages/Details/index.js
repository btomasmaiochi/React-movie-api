import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";

export const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const imagePath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${"943a84507795731e72acac411a512add"}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, release_date, overview } = data;
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          synopsis: overview,
          releaseDate: release_date,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.synopsis} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.synopsis}</span>
          <span className="release-date">
            Release date: {movie.releaseDate}
          </span>
          <Link to="/">
            <button> Go Back </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
