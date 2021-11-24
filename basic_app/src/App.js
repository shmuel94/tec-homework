import React from "react";
import Header from "./components/Q_6/Header";
import Footer from "./components/Q_6/Footer";
import Main from "./components/Q_6/Main";
import Bakery from "./components/Q_6/Bakery";
import Bakery_Products from "./components/Q_6/Bakery_Products";
import Hotels from "./components/Q_6/Hotels";
import Hotels_Workers from "./components/Q_6/Hotels_Workers";
import Food_Ex from "./components/Q_6/Food_Ex";
import Google_Ex from "./components/Q_6/Google_Ex";

class App extends React.Component {
  constructor(){
    super();
  }

render(){
  return(<div>
    <Header name="shmuel" img="https://cdn.pixabay.com/photo/2018/05/18/12/43/style-3411108__340.jpg" url="https://player.vimeo.com/external/569028338.sd.mp4?s=f0bb74c4156df4ef57926b65201db0a2946392e6&profile_id=165"/>
    <Main/>
    <Footer/>
    <Bakery_Products/>
    <Hotels_Workers/>
    <Food_Ex/>
    <Google_Ex/>
  </div>);
}
}
export default App;







// import React from "react";
// import Media from "./components/Media";
// import Div_Component from "./components/Div_Component";
// import Headline from "./components/Headline";
// import Employee from "./components/Employee";
// import Object_Employee from "./components/Object_Employee";

// class App extends React.Component {
//   constructor(){
//     super();
//   }

// render(){
//   return(<>
//   <h1> Shmuel Moche </h1>
//   <Media/>
//   <Div_Component/>
//   <Headline/>
//   <Object_Employee/>
//   </>);
// }
// }
// export default App;
