// Nav.js
import React, { useEffect, useState } from 'react';
import { starwars } from '../datamovies/starwars';
import Showdata from '../datamovies/Showdata';
import Favoritess from "../Favorite/Favoritess";

const Nav = () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavorite = ({imdbID, Title, Poster, year}) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyInFavorites = favorites.some((fav) => fav.imdbID === imdbID);
    
    if (!isAlreadyInFavorites) {    
      favorites.push({imdbID, Title,Poster, year});
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setFavourites(favorites);
    }
  };
  

  useEffect(() => {
    const localmovie=localStorage.getItem('favorites') //lay item da dc luu san trong localstorage
    if(!localmovie){
      setFavourites([]) //neu khong co gan cho favorites rong
    }else{
      const pasFavorites=JSON.parse(localmovie) //day du lieu da luu tu localstorage thanh object
      setFavourites(pasFavorites);
    }
    },[])
 
  
const removeMovie=(m)=>{
  const newList=favourites.filter((a)=>a.imdbID!==m.imdbID)
  setFavourites(newList)
  localStorage.setItem('favorites', JSON.stringify(newList))

}

  return (
    <div>
      <div>
        <h1>Movies</h1>
        <br />
        <ul style={{ display: 'flex', overflow:"scroll", overflowY:"hidden", width: '1200px', gap:"10px" }}>
          {starwars.map((a, index) => (
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
              <Favoritess
                poster={a.Poster}
                Title={a.Title}
                year={a.Year}
                key={index}
                imdbID={a.imdbID}
                removeMovie={()=>removeMovie(a)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
