// Nav.js
import React, { useState } from 'react';
import { starwars } from '../datamovies/starwars';
import Showdata from '../datamovies/Showdata';
import Favoritess from "../Favorite/Favoritess";

const Nav = () => {
  const [mov, setMov] = useState(starwars);
  const [favourites, setFavourites] = useState([]);

  const toggleFavorite = ({imdbID, Title, poster: poster, year}) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyInFavorites = favorites.some((fav) => fav.imdbID === imdbID);
    
    if (!isAlreadyInFavorites) {
      favorites.push({imdbID, Title, poster: poster, year});
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setFavourites(favorites);
    }
  };

  console.log(favourites);

  return (
    <div>
      <div>
        <h1>Movies</h1>
        <br />
        <ul style={{ display: 'flex', overflow:"scroll", overflowY:"hidden", width: '1200px', gap:"10px" }}>
          {mov.map((a, index) => (
            <Showdata
              poster={a.Poster}
              Title={a.Title}
              year={a.Year}
              key={index}
              imdbID={a.imdbID}
              toggleFavorite={() => toggleFavorite(a)} // Pass the movie object to toggleFavorite
              isFavorite={favourites.some((favourite) => favourite.imdbID === a.imdbID)}
            />
          ))}
        </ul>
        <br />
        <h1>Favourite</h1>
        
        <div className="Favorite" style={{display:"flex", gap:"10px"} }>
          <ul style={{ display: 'flex', overflow:"scroll", overflowY:"hidden", width: '1200px', gap:"10px" }}>
            {favourites.map((a, index) => (
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
    </div>
  );
};

export default Nav;
