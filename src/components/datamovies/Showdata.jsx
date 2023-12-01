// Showdata.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';

const Showdata = ({ poster, Title, year, imdbID, toggleFavorite, isFavorite }) => {
  const shortenString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  return (
    <li style={{ display: 'flex', flexDirection: 'column', width: '280px', height: '504px' }}>
      <div className='poster'>
        <Link to={`/Details/${imdbID}`}>
          <img src={poster} alt={Title} style={{ width: '280px', height: '440px' }} />
          <h2 style={{ color: 'white', textDecoration: 'none' }}>{shortenString(Title, 20)}</h2>
        </Link>
        <div className="favorite-child">
          <div className="MdFavoriteBorder" onClick={() => toggleFavorite({ imdbID, Title, poster,year })}>
            <MdFavoriteBorder color={isFavorite ? 'red' : 'white'} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Showdata;
    