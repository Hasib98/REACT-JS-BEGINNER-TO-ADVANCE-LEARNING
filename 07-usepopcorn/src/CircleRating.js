import { useState } from "react";

export default function CircleRating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <Circle
          key={i}
          onRate={() => handleRating(i + 1)}
          full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          onHoverIn={() => setTempRating(i + 1)}
          onHoverOut={() => setTempRating(0)}
        />
      ))}
      <span>{tempRating || rating | ""}</span>
    </div>
  );
}

function Circle({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke-width="3"
            stroke="magenta"
            fill="magenta"
          />
        </svg>
      ) : (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="magenta"
            stroke-width="3"
            fill="none"
          />
        </svg>
      )}
    </span>
  );
}
