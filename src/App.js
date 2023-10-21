
import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './search.svg'
import MovieComponent from './MovieComponent';
import tvIcon from './tv.svg'




const apiURL = 'https://www.omdbapi.com?apikey=90729ca8&'

function App() { 

  const [movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchForMovies = async (title) => {
    const response = await fetch(`${apiURL}&S=${title}`)
    const data = await response.json();
   
    setMovies(data.Search)
  }

  useEffect(() => {
    searchForMovies();
  }, [])
  return (
    <div className='app'>
      <h1>Cool <img src={tvIcon} alt="" /> Movies</h1>
      <div className='search'>
        <input 
        placeholder='Search for Available movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         />
         <img 
          src={searchIcon}
          alt="Search"
          onClick={() => searchForMovies(searchTerm)}
          />
      </div>

      {
        movies.length > 0 
          ?  (
            <div className='container'>
            {
              movies.map((movie) => (
                <MovieComponent movie={movie} />
              ))
            }           
            </div>
          ) :  (
            <div className='empty'>
              <h1>No Movies Availabe!</h1>
            </div>
          )

      }


    </div>
    
  );
}

export default App;
