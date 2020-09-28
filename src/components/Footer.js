import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-copy'>
        <CopyrightIcon></CopyrightIcon>
      </div>
      <p>2020 - All rights Reserved.</p>
    </footer>
  );
}

export default Footer;
