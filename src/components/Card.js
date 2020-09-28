import React from 'react';

function Card({ src, title, description, price }) {
  return (
    <article className='single-card'>
      <img src={src} alt={title} />
      <div className='card-info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </article>
  );
}

export default Card;
