import React from "react";
import Food from "./Food";
class Food_Ex extends React.Component{
    render(){
        const food1 ={name:"pizza", img:"https://media.istockphoto.com/photos/pizza-with-very-much-cheese-melting-picture-id1269122740?k=20&m=1269122740&s=612x612&w=0&h=8BN_S6Z3R9ACEq-xIjewm9E4Jn0gaDSW-fF2wmWKTpA=", dis:"Lorem ipsum"};
        const food2 ={name:"ice cream", img:"https://media.istockphoto.com/photos/strawberry-ice-cream-with-fresh-strawberries-picture-id1264447431?k=20&m=1264447431&s=612x612&w=0&h=exSXt4G2tuopnVFr8AtQTBoMqpkmtC9uG0RFuxKR8gA=", dis:"tristique placerat."};
        const food3 ={name:"salad", img:"https://media.istockphoto.com/photos/vegetable-mix-salad-with-tomatoes-and-sauce-on-a-concrete-background-picture-id1299960189?k=20&m=1299960189&s=612x612&w=0&h=GGajhecYU6b_iMzJJK0eDjCZCs2Q3hBDb1_idHpgO_4=", dis:"Lorem  placerat."};
        return (<div style={{display:"flex"}}>
            <Food obj= {food1}/>
            <Food obj= {food2}/>
            <Food obj= {food3}/>
        </div>)
    }
}
export default Food_Ex;