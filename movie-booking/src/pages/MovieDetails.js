import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page">
        <h2>Movie Details</h2>
        <p>Movie ID: {id}</p>

        <button onClick={() => navigate("/book")}>
            Book Seat
        </button>
    </div>

  );
}

export default MovieDetails;