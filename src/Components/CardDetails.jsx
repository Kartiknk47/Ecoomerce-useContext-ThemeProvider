import React, { useEffect, useState } from "react";
import data from "../Data.js";
import { Link, Route, Routes, useParams } from "react-router-dom";

const CardDetails = () => {
  const [Cars, setCars] = useState([]);
  const { ID } = useParams();
  console.log(ID);
  console.log(data);

  useEffect(() => {
    const carArr = data.filter((c) => c.id == ID);
    console.log(carArr, "carArr");
    setCars(carArr[0]);
  }, []);
  console.log(Cars, "Cars");

  return (
    <>
      <div>
        Details of car
        <h1>{Cars.name}</h1>
        <img src={Cars.image} alt="car" style={{ width: "100%" }} />
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Description:{Cars.discription}
        </p>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Price: {Cars.price}
        </p>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Quantity: {Cars.Quantity}
        </p>
        <Link to="review" element={<Review />}>
          Reviews
        </Link>
        <Review />
        <Link to="likes" element={<Likes />}>
          Likes
        </Link>
      </div>

      <Routes>
        <Route path="review" element={<Review />}></Route>
      </Routes>

      <Routes>
        <Route path="likes" element={<Likes />} Likes>
          {" "}
        </Route>
      </Routes>
    </>
  );
};
function Review() {
  // console.log('review')
  return (
    <>
      {/* <div className="container w-50">
     <p>I am Karthiii</p>
    <p>Now I am Learn React Routes DOM</p>
    </div> */}
    </>
  );
}
function Likes() {
  console.log("likes");
  return (
    <>
      <p>Star Stars</p>
    </>
  );
}

export default CardDetails;
