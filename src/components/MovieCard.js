import React from 'react';
import {Card, Button} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import Details from './Details';
import {Link, Route} from 'react-router-dom';

const MovieCard = ({movie}) => {
    return (
        <div>
        <div className="movie-card">
           
             <Card style={{ width: '14rem'}}>
            <Card.Img variant="top" src={movie.posteUrl} style={{width:"220px", height :"220px"}}/>
            <Card.Body >
                <Card.Title >{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={movie.rate}
               />
                </Card.Text>
            </Card.Body>
            <Link to={`/moviecard/${movie.title}`}><Button variant="secondary">see details</Button></Link>
            </Card>
             
            </div>
             {/* <Route path ="/moviecard/:title" render={(props) => 
             movie.filter((el) =>el.id===props.match.params.id)
             .map((mov)=>(
                 
                     <div>
                         <p>{mov.description}</p>
                         <iframe src={mov.trailer}/>
                     </div>
             ))
             }/> */}
             <Route path="/moviecard/:title" render={(props)=>
                 <Details movie={movie} {...props}/>}/>
        </div>
    )
}

export default MovieCard
