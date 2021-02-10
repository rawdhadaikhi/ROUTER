
import React, {useState} from 'react';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { v4 as uuidv4} from 'uuid';
import Filter from './Filter';



const Home = () => {
  const [movies,setMovies] = useState([

    { id: uuidv4(),
      title:'peaky blinders',
    description:'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world',
    posteUrl:'https://fr.web.img5.acsta.net/c_310_420/pictures/210/457/21045721_20131001172258551.jpg',
     trailer:"https://www.youtube.com/watch?v=oVzVdvGIC7U&t=60s", 
    rate: 5
  },
  { id:uuidv4(),
    title:'Emily in Paris',
    description:'A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.',
    posteUrl:'https://media.senscritique.com/media/000019629533/source_big/Emily_in_Paris.jpg',
    trailer:"https://www.youtube.com/watch?v=lptctjAT-Mk",
    rate: 4
   },
   { id :uuidv4(), 
      title:'Outside the Wire',
      description:'In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack.',  
    posteUrl:'https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    trailer:"https://www.youtube.com/watch?v=u8ZsUivELbs",
    rate: 3
     },
     { id:uuidv4(),
       title:'Soul',
     description:' Animation, Adventure, Comedy, Family, Fantasy, Music',  
   posteUrl:'https://i-mom.unimedias.fr/2020/10/12/pixar_soul_disneyplus_affiche.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=1050',
   trailer:"https://www.youtube.com/watch?v=xOsLIiBStEs&t=71s",
   rate: 4
    },
    { id:uuidv4(),
        title:'Hotel Transylvania',
      description:'Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the counts teen-aged daughter.',  
      posteUrl:'https://www.audrey-rozowykwiat.net/wp-content/uploads/2019/07/onesheet.jpg',
      trailer:"https://www.youtube.com/watch?v=FYgzizpCTKU",
      rate: 5
     }
    ]);
 
    const [filterRate, setFilterRate] = useState(0);

    const [searchValue, setSearchValue] = useState("");

    const search = (inputValue) =>{
      setSearchValue(inputValue);
    }

    const addNewMovie =(movie) =>{
      setMovies(movies.concat(movie));
    }

   

   
  return (
    <div className="App">
      <Header text="Movie App"/>
      <div>
       <Filter filterRate ={filterRate} setFilterRate={setFilterRate} search={search}/>
      <MovieList movies ={movies.filter(
        (movie)=>movie.rate >=filterRate && movie.title.toLowerCase().includes(searchValue.toLowerCase()))}
       addNewMovie={addNewMovie}/>
       
      </div>
    </div>
    
  );
}

export default Home ;