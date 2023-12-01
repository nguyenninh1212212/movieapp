import React from 'react';
import { Link } from 'react-router-dom';
import "./Fa.css";

const Favoritess = ({ poster, Title, year, imdbID, key, toggleFavorite, isFavorite }) => {
  const shortenString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  const [img, setImg] = React.useState(poster); // Assuming poster contains the image URL
  
  return (
    <>
      <div className='poster' key={key}>
        <Link to={`/Details/${imdbID}`}>
          <img src={img}  style={{ width: '280px', height: '440px' }} />
          <h2 style={{ color: 'white', textDecoration: 'none' }}>{shortenString(Title, 20)}</h2>
        </Link>
      </div>
    </>
  );
}

export default Favoritess;
