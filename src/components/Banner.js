import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Search from '../components/Search';
import { useHistory } from 'react-router-dom';

function Banner() {
  const history = useHistory();
  //State:
  const [showSearch, setShowSearch] = useState(false);
  return (
    <section className='banner-section'>
      <div className='banner-search'>
        {showSearch && <Search></Search>}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='banner-search-btn'
          variant='outlined'
        >
          Search Dates
        </Button>
      </div>
      <div className='banner-info'>
        <div className='banner-info-container'>
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <Button variant='outlined' onClick={() => history.push('/search')}>
            Explore Nearby
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
