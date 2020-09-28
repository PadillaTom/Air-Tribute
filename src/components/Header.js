import React from 'react';
// Material Ui
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  return (
    <header className='header-container'>
      <div className='header-logo'>
        <h1>
          <span>Air</span>
          Tribute
        </h1>
      </div>
      <div className='header-search-container'>
        <input type='text' />
        <SearchIcon></SearchIcon>
      </div>
      <div className='header-info-container'>
        <p>Become Host</p>
        <LanguageIcon className='header-info-icon'></LanguageIcon>
        <ExpandMoreIcon className='header-info-icon'></ExpandMoreIcon>
        <Avatar className='header-info-icon' id='avatar-header'></Avatar>
      </div>
    </header>
  );
}

export default Header;
