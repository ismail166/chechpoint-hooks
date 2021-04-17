import './App.css';
import  {useState} from 'react'
import MovieList from './components/MovieList'
import {Card} from './components/Card'
import Filter from './components/Filter'

const App = (props) => {

const [state, setState] = useState({
  Card:Card,
  searchfield:''
})

  const onSearchChange = (event) => {
    setState({ searchfield: event.target.value })
   
  }

  const { searchfield } = state;
  const filteredMovies = Card.filter(movie =>{
    return movie.title.toLowerCase().includes(searchfield.toLowerCase());
  })
    
 
  return (
    <div className="App ">
          <Filter  searchChange={onSearchChange}/>
          <MovieList  Card={filteredMovies } />

    </div>
  );
}

export default App;
