import React from 'react';
import Path from './images/Path.png';
// import './App.css';


export const Navbar = (props) => {
  return (
    <div>
        <div className='rednav'>
        <img src={Path}className="banner-image" alt="path" />
        <p className='bannerpara'>
         My travel journal.
        </p>
        </div>
       
    </div>
  )
}
