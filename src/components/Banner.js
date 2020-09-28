import React from 'react';
import { Button } from '@material-ui/core';

function Banner() {
  return (
    <section className='banner-section'>
      <div className='banner-info'>
        <div className='banner-info-container'>
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <Button variant='outlined'>Explore Nearby</Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
