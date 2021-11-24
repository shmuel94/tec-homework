import React , {Component} from "react";

class Headline extends React.Component {
  constructor(){
    super();
  }

render(){
  return(< div className = "headline">
  <h1 style={{color:"red"}}> headline</h1>
  <p style={{fontWeight:"bold"}}> lorem loren loreb lorec  </p>
  </div>);
}
}
export default Headline;