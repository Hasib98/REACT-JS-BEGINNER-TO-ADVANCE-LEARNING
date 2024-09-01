import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import StarRating from "./StarRating";
// import CircleRating from "./CircleRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />

    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okey", "good", "amazing"]}
    />
    <StarRating
      size={24}
      maxRating={5}
      color="#ff7979"
      className="test"
      defaultRating={3}
    />

    <CircleRating /> */}
  </React.StrictMode>
);

/* function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="magenta" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
} */
