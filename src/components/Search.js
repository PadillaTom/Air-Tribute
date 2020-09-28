import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
// Date Range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

// Main:
function Search() {
  // State:
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Values Stored and Associated to be used and set.
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  // Function: Set dates from Selected Ones.
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  // Return:
  return (
    <section className='search-container'>
      <DateRangePicker
        className='date-range-element'
        ranges={[selectionRange]}
        onChange={handleSelect}
      ></DateRangePicker>
      <div className='search-guests-container'>
        <h2>
          Number of guests:
          <input
            id='search-container-input'
            type='number'
            defaultValue={2}
            min={0}
          />
          <PeopleIcon></PeopleIcon>
        </h2>
      </div>
      <Button id='date-range-final-btn'>Search Air</Button>
    </section>
  );
}

export default Search;
