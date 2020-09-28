import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarRateIcon from '@material-ui/icons/StarRate';

function SearchResults({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  // Main:
  return (
    <article className='single-result-container'>
      <img src={img} alt={title} />
      <FavoriteBorderIcon id='result-heart'></FavoriteBorderIcon>
      <div className='result-info-container'>
        <div className='result-info-top'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='result-info-bot'>
          <div className='result-stars'>
            <StarRateIcon id='result-star'></StarRateIcon>
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className='result-price'>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SearchResults;
