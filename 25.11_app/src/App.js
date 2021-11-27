import { Component } from 'react';
import './App.css';
import Gallerys from './components/Gallery/Gallerys';
// import Car from './components/Car/Car';
// import Cars from './components/Car/Cars';
// import Movie from './components/Movie/Movie';
// import Movies from './components/Movie/Movies';
// import Name from './components/Name';
import Posts from './components/Posts/Posts';
import TodosList from './components/Tasks/TodosList';

class App extends Component {
  render(){
    return (
      <div className="App">
      {/* <Name/> */}
      {/* <Car carObj = {carObj} /> */}
      {/* <Movie movieObj = {movieObj} /> */}
      {/* <Cars/> */}
      {/* <Movies/> */}
      {/* <Posts/> */}
      {/* <TodosList/> */}
      <Gallerys/>
      </div>
    );
  }
}

export default App;
