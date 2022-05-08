import React from "react";
import "./Inventory.css";
import { useEffect, useState } from "react";
import Items from "../Items/Items";

const Inventory = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("https://mighty-shore-52159.herokuapp.com/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);
  return (
    <div className="inventory">
      <h1 style={{ marginTop: "20px", textTransform: "uppercase" }}>
        inventory
      </h1>
      <div className="items">
        {shoes.slice(0, 6).map(shoe => <Items shoe={shoe} key={shoe._id}></Items>)}
      </div>
    </div>
  );
};

export default Inventory;
