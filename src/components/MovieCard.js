import React from 'react';
import {Card, Button} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
    return (
        <div>
        <div className="movie-card">
           
             <Card style={{ width: '14rem'}}>
            <Card.Img variant="top" src={movie.posteUrl} style={{width:"220px", height :"220px"}}/>
            <Card.Body >
                <Card.Title >{movie.title}</Card.Title>
                <Card.Text >{movie.genre}</Card.Text>

                <Card.Text>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={movie.rate}
               />
                </Card.Text>
            </Card.Body>
            <Link to={`/moviecard/${movie.id}`}><Button variant="secondary">see details</Button></Link>
            </Card>
             
            </div>

        </div>
    )
}

export default MovieCard
