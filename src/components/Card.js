import React from 'react';

function Card({ card }) {
  return (
    <div className="card">
      <h4>{card.title}</h4>
      {/* Display other card details */}
    </div>
  );
}

export default Card;
