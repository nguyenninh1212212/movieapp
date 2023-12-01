import React, {  useState } from 'react';
import { starwars } from '../datamovies/starwars';
import {Link} from "react-router-dom"
import {MdFavoriteBorder} from 'react-icons/md'
import Showdata from '../datamovies/Showdata';
const MenuChild = ({imdbIDsToFilter}) => {
  const [mov, setMov] = useState(starwars);
  const shortenString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };
  const filteredMovies = mov.filter(
    (movie) =>
      movie.Title.toLowerCase().includes(imdbIDsToFilter.toLowerCase())
  );
  return (
    <div>
      <div>
        <h1>Movies</h1>
        <br />
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '1200px' }}>
          {filteredMovies.map((a, index) => (
            <Showdata
              poster={a.Poster}
              Title={a.Title}
              year={a.Year}
              key={index}
              imdbID={a.imdbID}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuChild;
