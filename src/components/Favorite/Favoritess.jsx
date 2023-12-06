import React from 'react';
import { Link } from 'react-router-dom';
import "./Fa.css";
import { FaTrash } from "react-icons/fa";
const Favoritess = ({ poster, Title, year, imdbID, key,removeMovie }) => {
  const shortenString = (str, maxLength) => {
    if (str === undefined) {
      return '';
    }
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  
  return (
    <>
      <div className='poster' key={key}>
        <Link to={`/Details/${imdbID}`}>
          <img src={poster}  style={{ width: '280px', height: '440px' }} />
          <h2 style={{ color: 'white', textDecoration: 'none' }}>{shortenString(Title, 20)}</h2>
        </Link>
        <div className="favorite-child" onClick={() => removeMovie({ imdbID, Title, poster })} style={{cursor:"pointer"}}>
        <FaTrash />
          </div>
      </div>
    </>
  );
}

export default Favoritess;
