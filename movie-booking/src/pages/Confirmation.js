import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div className="page">
      <h2>Seat Booked Successfully 🎉</h2>

      <div className="confirm-box">
        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Name:</strong> {state?.name}</p>
        <p><strong>Email:</strong> {state?.email}</p>
        <p><strong>Mobile:</strong> {state?.mobile}</p>
      </div>

      <br />

      <button onClick={() => navigate("/", { replace: true })}>
        Back to Movies
      </button>

    </div>
  );
}

export default Confirmation;