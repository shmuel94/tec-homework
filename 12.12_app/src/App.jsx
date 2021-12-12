import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Mentoring from "./pages/Mentoring";
import Testimonials from "./pages/Testimonials";
import Events from "./pages/Events";
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';

function App (){

   return (
     <BrowserRouter>
       <div className="App">
         <div className="navBar">
           <div className="title"><span style={{color:"red"}}>Shmuel</span> Moche</div>
            <Link className="links" to='/'>Home</Link>
            <Link className="links" to='/About'>About</Link>
            <Link className="links" to='/Contact'>Contact</Link>
            <Link className="links" to='/Courses'>Courses</Link>
            <Link className="links" to='/Mentoring'>Mentoring</Link>
            <Link className="links" to='/Testimonials'>Testimonials</Link>
            <Link className="links" to='/Events'>Events</Link>
         </div>
 
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/About' component={About}/>
           <Route exact path='/Contact' component={Contact}/>
           <Route exact path='/Courses' component={Courses}/>
           <Route exact path='/Mentoring' component={Mentoring}/>
           <Route exact path='/Testimonials' component={Testimonials}/>
           <Route exact path='/Events' component={Events}/>
         </Switch>
         <footer className="footer"> <a href="https://github.com/shmuel94"><img src="https://img.icons8.com/ios-glyphs/36/4a90e2/github.png"/></a> <a href="https://www.linkedin.com/in/shmuel-moche-b06479b8/"><img src="https://img.icons8.com/color/36/000000/linkedin.png"/></a> <a href="https://www.youtube.com/watch?v=MHU36OuFBCc&list=PLnsDvT7zYsn4vPEXQXjPDcWkjYC5a5cRx"><img src="https://img.icons8.com/fluency/36/000000/youtube-play.png"/></a> <a href=""><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/36/000000/external-udemycom-is-an-online-learning-and-teaching-platform-logo-color-tal-revivo.png"/></a> <br/> © 2021 SHMUEL MOCHE. ALL RIGHTS RESERVED.</footer>
       </div>
     </BrowserRouter>);}
export default App;