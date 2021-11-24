import React from "react";
import Bakery from "../Q_6/Bakery";

class Bakery_Products extends React.Component{
    render(){
        const bakert1 ={name:"candy", img:"https://cdn.pixabay.com/photo/2013/08/10/18/13/candies-171342__340.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo libero, interdum eu urna vitae, volutpat egestas eros. Nam euismod augue id dui tristique placerat."};
        const bakert2 ={name:"cake", img:"https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417__340.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo libero, interdum eu urna vitae, volutpat egestas eros. Nam euismod augue id dui tristique placerat."};
        const bakert3 ={name:"biscuit", img:"https://media.istockphoto.com/photos/assorted-close-up-selection-of-tea-biscuits-picture-id1176898042?b=1&k=20&m=1176898042&s=170667a&w=0&h=EhJ0-zqhbPvINSGtaaNH1BaY3dFFpK5h44zLjemyaU4=", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo libero, interdum eu urna vitae, volutpat egestas eros. Nam euismod augue id dui tristique placerat."};
        const bakert4 ={name:"bread", img:"https://cdn.pixabay.com/photo/2010/12/13/10/14/baguettes-2561__340.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo libero, interdum eu urna vitae, volutpat egestas eros. Nam euismod augue id dui tristique placerat."};
        const bakert5 ={name:"croissants", img:"https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812__340.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo libero, interdum eu urna vitae, volutpat egestas eros. Nam euismod augue id dui tristique placerat."};
        const bakert6 ={name:"lollipop", img:"https://cdn.pixabay.com/photo/2017/01/04/19/40/caramel-1952996__340.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo libero, interdum eu urna vitae, volutpat egestas eros. Nam euismod augue id dui tristique placerat."};
        return (<div style={{display:"flex"}}>
            <Bakery obj= {bakert1}/>
            <Bakery obj= {bakert2}/>
            <Bakery obj= {bakert3}/>
            <Bakery obj= {bakert4}/>
            <Bakery obj= {bakert5}/>
            <Bakery obj= {bakert6}/>
        </div>)
    }
}
export default Bakery_Products;