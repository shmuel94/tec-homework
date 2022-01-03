import { useState } from 'react' 
import { BrowserRouter , Route , Switch , Link ,  } from 'react-router-dom'
import './App.css'
import Authenticated from './pages/Authenticated'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [auth, setAuth] = useState(null)
  const LOCALSTORAGE = "user_log"
  localStorage.setItem(LOCALSTORAGE,JSON.stringify(auth))
  setInterval(() => {
    localStorage.setItem(LOCALSTORAGE,JSON.stringify(null))
  }, (1000*60)*20);
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/">Home</Link>
      {auth ? "" : <Link to="/Register">Register</Link>}
      {auth ? "" : <Link to="/Login">Login</Link>}
      {auth != null ? <Link to="/Authenticated">Authenticated</Link> : "" }
      <Switch>
        <Route exact path="/" component={Home} />
        {auth ? "" : <Route exact path="/Register" render={()=><Register setAuth={setAuth} auth={auth}/>}/>}
        {auth ? "" : <Route exact path="/Login" render={()=><Login setAuth={setAuth}/>} auth={auth}/>}
        {auth != null ? <Route exact path="/Authenticated" render={()=><Authenticated auth={auth}/>}/> : ""}
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App