import React ,{useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Details from './components/Details'
import { v4 as uuidv4} from 'uuid';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Filter from './components/Filter';

const App = () => {
  const [movies,setMovies] = useState([

    { id: uuidv4(),
      title:'peaky blinders',
      genre:' action, Sci-Fi, drama',
    description:'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world',
    posteUrl:'https://fr.web.img5.acsta.net/c_310_420/pictures/210/457/21045721_20131001172258551.jpg',
    trailer:"https://www.youtube.com/embed/oVzVdvGIC7U", 
    rate: 5
  },
  { id:uuidv4(),
    title:'Emily in Paris',
    genre:' comedy, romance, drama',
    description:'A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.',
    posteUrl:'https://media.senscritique.com/media/000019629533/source_big/Emily_in_Paris.jpg',
    trailer:"https://www.youtube.com/embed/lptctjAT-Mk",
    rate: 4
   },
   { id :uuidv4(), 
      title:'Outside the Wire',
      genre:' action, Sci-Fi, drama',
      description:'In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack.',  
    posteUrl:'https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    trailer: "https://www.youtube.com/embed/u8ZsUivELbs",
    rate: 3
     },
     { id:uuidv4(),
       title:'Soul',
     genre:' Animation, Music', 
     description:'A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.',
   posteUrl:'https://i-mom.unimedias.fr/2020/10/12/pixar_soul_disneyplus_affiche.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=1050',
   trailer:"https://www.youtube.com/embed/xOsLIiBStEs",
   rate: 4
    },
    { id:uuidv4(),
        title:'Hotel Transylvania',
        genre:' Animation, Comedy',
      description:'Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the counts teen-aged daughter.',  
      posteUrl:'https://www.audrey-rozowykwiat.net/wp-content/uploads/2019/07/onesheet.jpg',
      trailer: "https://www.youtube.com/embed/FYgzizpCTKU",
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
    return(
    <div className="App">
    <Header text="Movie App"/>
    <BrowserRouter>
    <div>
    <Route exact path="/" component={() => <Filter filterRate ={filterRate} setFilterRate={setFilterRate} search={search}/> }/>
    <Route exact path="/" component={() => <MovieList movies ={movies.filter(
      (movie)=>movie.rate >=filterRate && movie.title.toLowerCase().includes(searchValue.toLowerCase()))}
     addNewMovie={addNewMovie}/> } />
     
     <Route  path="/moviecard/:id" component= {(props)=> <Details movies={movies} {...props}/>}   />
    </div>
    </BrowserRouter>
  </div>
  
);

  // return (
  //   <BrowserRouter>
  //   <Route exact path ="/" component ={Home} />
  //   <Route path="/movieList" render ={MovieCard} />
  //   <Route path ="/movielist" render={() =><MovieCard/>} movies ={movies} />
  //   <Route path="/moviecard/:id" render={(props) => <Details movies ={movies} {...props} />}/>
  //  </BrowserRouter>
    
  // );
}

export default App ;
