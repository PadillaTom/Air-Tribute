import React from 'react';
import SearchResults from '../components/SearchResults';
import { Button } from '@material-ui/core';

const SearchPage = () => {
  return (
    <div className='search-page-section'>
      <div className='section-center'>
        <div className='search-page-info'>
          <p> 62 stays - 26 august to 30 august - 2 guests</p>
          <h1>stays nearby</h1>
          <div className='search-page-btns-container'>
            <Button variant='outlined'>Type of Place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and Beds</Button>
            <Button variant='outlined'>More Filters</Button>
          </div>
        </div>
        <div className='desktop-results-container'>
          <SearchResults
            img='https://cdn.homedit.com/wp-content/uploads/2012/12/living-room-winte-view.jpg'
            location='Private Room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 Guest - 1 Bedroom - 1 Bed - 1.5 Shared Bathrooms - Wi-Fi - Kitchen - Free Parking'
            star={4.73}
            price='£30 / Night'
            total='£117 total'
          ></SearchResults>
          <SearchResults
            img='https://st.hzcdn.com/fimgs/9e1145d707fcf5b3_1447-w312-h312-b0-p0--modern-bedroom.jpg'
            location='Private Room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 Guest - 1 Bedroom - 1 Bed - 1.5 Shared Bathrooms - Wi-Fi - Kitchen - Free Parking'
            star={4.73}
            price='£30 / Night'
            total='£117 total'
          ></SearchResults>
          <SearchResults
            img='https://cdn.homedit.com/wp-content/uploads/2019/12/Modern-bedroom-with-large-windows-and-platform-bed.jpg'
            location='Private Room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 Guest - 1 Bedroom - 1 Bed - 1.5 Shared Bathrooms - Wi-Fi - Kitchen - Free Parking'
            star={4.73}
            price='£30 / Night'
            total='£117 total'
          ></SearchResults>
          <SearchResults
            img='https://cdn.homedit.com/wp-content/uploads/2019/12/Saota-bedroom-with-amazing-views-and-access-to-pool.jpg'
            location='Private Room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 Guest - 1 Bedroom - 1 Bed - 1.5 Shared Bathrooms - Wi-Fi - Kitchen - Free Parking'
            star={4.73}
            price='£30 / Night'
            total='£117 total'
          ></SearchResults>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
