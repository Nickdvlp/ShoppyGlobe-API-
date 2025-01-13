import React from "react";

const StarRating = ({ rating }) => {
  const MAX_STARS = 10;

  // Generate an array of stars, filled or empty based on the rating
  const stars = Array.from({ length: MAX_STARS }, (_, index) =>
    index < rating ? "★" : "☆"
  );

  return (
    <div style={{ fontSize: "24px", color: "#FFA500" }}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
