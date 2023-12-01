import React, {  useState } from 'react';
import { starwars } from '../datamovies/starwars';
import {Link,useParams} from "react-router-dom"
import {MdFavoriteBorder} from 'react-icons/md'
import Showdata from '../datamovies/Showdata';
const Moviefound= ( ) => {
const [mov, setMov] = useState(starwars);
const { searchTerm } = useParams();
const filteredMovies = mov.filter(
  (movie) =>
    searchTerm.length >= 4 &&
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
);
const shortenString = (str, maxLength) => {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};
  return (
    <div>
    <div>
      <div className="searchH1"><h1>Kết quả tìm kiếm :</h1></div>
      <br />
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '1200px' }}>
      {  filteredMovies.length > 0 ? filteredMovies.map((a, index) => (   <Showdata
              poster={a.Poster}
              Title={a.Title}
              year={a.Year}
              key={index}
              imdbID={a.imdbID}
            />
        )):(
          <p>No movies found.</p>
        )}
      </ul>
    </div>
  </div>
  )
}

export default Moviefound