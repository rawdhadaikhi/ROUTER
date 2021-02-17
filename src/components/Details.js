import React from 'react';
import Iframe from 'react-iframe';
import './Details.css'


const Details = (props) => {
    const {movies} =props;
    return (
            <div className="container-details">
                {movies.filter((el) => el.id === props.match.params.id).map((movie, i) => (  
             <div key ={i}  className="child-details">
                    <h2 className="title-movie details">{movie.title}</h2>
                    <p className="descption-movie details">{movie.description}</p>
                    <Iframe className="my-iframe"  width="560" height="315" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            </div>
                ))}

         <p onClick={() =>props.history.goBack()} className ="goback-btn">Go Back</p>

           </div>
        
    )
}
    export default Details   
       



