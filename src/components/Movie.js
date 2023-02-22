import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title}></img>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = { movie: PropTypes.object.isRequired };

export default Movie;
