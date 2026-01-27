import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate("/confirmation", {
      state: { name, email, mobile }
    });
  };

  return (
    <div className="page">
        <h2>Book Seat</h2>

        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <br />

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br />

        <input placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />
        <br />

        <button onClick={submitHandler}>Submit</button>
    </div>

  );
}

export default BookingForm;