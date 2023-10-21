
const MovieComponent = ({ movie }) => {
    return (  
        <div className='movie'>
                <div>
                    <h5>{movie.Type}</h5>
                </div>

                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                </div>
                <div>
                    <h3>{movie.Title}</h3>
                    <h5>{movie.Year}</h5>
                </div>
    
        </div>
    );
}
 
export default MovieComponent;