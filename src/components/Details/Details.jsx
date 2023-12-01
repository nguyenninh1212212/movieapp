import React,{useState} from 'react'
import { starwars } from '../datamovies/starwars'
import { useParams } from 'react-router-dom';
import "./Details.css"

const Details = () => {
    const [mov,setmov]=useState(starwars)
    const {id}=useParams()
    return (
<>
    <div className='Details'>
         {mov.filter((e)=>e.imdbID==id).map((movie,index)=>{
           const {Poster,Title,Year,Type}=movie
          return  (
         
           <div className="themovie" key={index}>
              <img src={Poster} alt={Type} style={{width:"370px"}} />  
              <div className="word">
                   <h1>{Title}</h1>
                   <h2>Dạng: {Type}</h2>
                   <h3>Xuất bản năm: {Year}</h3>
                   <p>Star Wars has left an indelible mark on popular culture, influencing generations of fans and filmmakers alike. The franchise has expanded beyond the original trilogy to include prequels, sequels, animated series, novels, and more. Its impact extends beyond the screen.
</p>
                </div> 
                

           </div>
            
         )
         }
         )}

    </div>
    </>
  )
}

export default Details