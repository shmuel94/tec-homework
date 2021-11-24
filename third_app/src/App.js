import './App.css';
import Register from './components/Register';
import Weather from './components/Weather';
// import Login from './components/Login';
// import Login_Test from './components/Login_Test';
// import Login_Validation from './components/Login_Validation';
// import axios from 'axios';
// import Get_Comments from './components/Get_Comments';
// import Get_Data from './components/Get_Data';

function App() {
  // const getPosts =()=>{
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   axios 
  //   .get(url)
  //   .then((res)=> console.log(res.data))
  //   .catch((err)=> console.log(err));
  // }
  return (
    <div className="App">
      {/* <h1> jason placeholder</h1> */}
      {/* <Login/> */}
      {/* <Login_Test/> */}
      {/* <Login_Validation/> */}
      {/* <button onClick={getPosts}> Get posts</button> */}
      {/* <Get_Comments/> */}
      {/* <Get_Data/> */}
      <Register/>
      <Weather/>
    </div>
  );
}

export default App;
