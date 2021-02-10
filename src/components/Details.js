import React from 'react';
import {Link} from 'react-router-dom';

const Details = (props) => {
    const {movie} = props
    return (
            <div>
                {movie.filter((el) => el.title === movie.match.params.title).map((m, i) => (  
             <div>
                    <p>{m.description}</p>
                    <iframe src={m.trailer}></iframe>
            </div>
                ))}
             <p onClick={() =>props.history.goBack()}>Go Back</p>
               
           </div>
        
    )
}
    export default Details   
        // const {filterRate } = props;
        //  return ( 
        //       <div className="DescriptionDiv"> 
        // {filterRate.filter((el) => el.title=== props.match.params.title).map((Movie, i) => (  
        //          <div key={i} className="MovieDetail">        
        //           <h1 className="titleMovieList" > {Movie.title}</h1> 
        //           <p className="pdescription">{Movie.description} </p>  
        //      <div className="video-responsive">  
        //      <iframe title={i}  className="videoTrailer" src={Movie.trailer}
        //       frameborder="0" allow="accelerometer; autoplay; clipboard-write;
        //        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        //        </div> 
        //     </div> 
        //  ))
        //   }
         
        //  </div>
        //   )  }



