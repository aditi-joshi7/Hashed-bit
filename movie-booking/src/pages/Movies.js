import { useNavigate } from "react-router-dom";
import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpeg";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg";

const movies = [
  { id: 1, title: "Inception", img: movie1 },
  { id: 2, title: "Jurrasic World", img: movie2 },
  { id: 3, title: "Titanic", img: movie3 },
  { id: 4, title: "Interstellar", img: movie4 }
];

function Movies() {
  const navigate = useNavigate();

  return (
    <div className="page">
  <h2>Movies</h2>

  <div className="movie-grid">
    {movies.map((movie) => (
      <div
        className="movie-card"
        key={movie.id}
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <img src={movie.img} alt={movie.title} />
        <p>{movie.title}</p>
      </div>
    ))}
  </div>
</div>

  );
}

export default Movies;