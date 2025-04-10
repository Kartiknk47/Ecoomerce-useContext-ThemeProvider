import React, { useEffect, useState } from "react";
import data from "../Data.js";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaStar, FaCommentDots } from "react-icons/fa";

const CardDetails = () => {
  const [car, setCar] = useState(null);
  const { ID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const carData = data.find((c) => c.id.toString() === ID);
    if (carData) {
      setCar(carData);
    }
  }, [ID]);

  const handleBack = () => {
    navigate("/home");
  };
  
  const handleLogOut=()=>{
    logOut()
    navigate("/register")

  }

  if (!car) return <h3 className="text-center mt-4">Loading car details...</h3>;

  return (
    <div className="container my-5 p-4 rounded" style={{  color: "white" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold">🚗 Car Details</h2>
        <img src={car.image} alt={car.name} className="img-fluid rounded mt-3" style={{ maxHeight: "400px" }} />
      </div>

      <div className="text-center">
        <h3 className="fw-bold display-5 mb-3">{car.name}</h3>
        <p className="lead"><strong>Description:</strong> {car.discription}</p>
        <p className="lead"><strong>Mileage:</strong> {car.mileage}</p>
        <p className="lead"><strong>Price:</strong> ₹{car.price}</p>
        <p className="lead"><strong>Quantity:</strong> {car.Quantity}</p>
        <p className="lead"><strong>Info:</strong> {car.Info}</p>
        <button className="btn btn-light" onClick={handleLogOut} >Log Out
        </button>

      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link className="btn btn-outline-info" to="review">
          <FaCommentDots className="me-2" />
          Reviews
        </Link>
        <Link className="btn btn-outline-warning" to="likes">
          <FaStar className="me-2" />
          Likes
        </Link>
        <button className="btn btn-outline-light" onClick={handleBack}>
          <FaArrowLeft className="me-2" />
          Back
        </button>
      </div>

      <Routes>
        <Route path="review" element={<Review />} />
        <Route path="likes" element={<Likes />} />
      </Routes>
    </div>
  );
};

function Review() {
  return (
    <div className="container mt-5 p-3 rounded bg-secondary text-white">
      <h4 className="fw-bold">Reviews</h4>
      <p>This car is fantastic for long drives and has great mileage.</p>
    </div>
  );
}

function Likes() {
  return (
    <div className="container mt-5 p-3 rounded bg-dark text-white">
      <h4 className="fw-bold">Likes</h4>
      <p>⭐⭐⭐⭐⭐</p>
    </div>
  );
}

export default CardDetails;
