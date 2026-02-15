import { useState } from "react";

function Card(props) {
  let [heart, setHeart] = useState(false);
  let [quantity, setQuantity] = useState(0);
  function like() {
    console.log("liked");
    setHeart(!heart);
  }
  function updateQuantity() {
    setQuantity(quantity + 1);
  }
  return (
    <>
      <div className="card">
        <div className="heart">
          <i
            className="fa-solid fa-heart"
            style={{ color: heart == true ? "red" : "white" }}
            onClick={like}
          ></i>
        </div>
        <h1>{props.data.itemName}</h1>
        <p>{props.data.color}</p>
        <p>{props.data.price}</p>
        <button onClick={updateQuantity}>Quantity : {quantity}</button>
      </div>
    </>
  );
}

export default Card;
