import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  console.log("In cardList component", data);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  });

  return (
    <div className="container ">
      <div className="row">
        {cards.map((elmt, index) => (
          <>
            <div key={index} className="col mb-3 hoverEffect">
              <Card Cars={elmt} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CardList;
