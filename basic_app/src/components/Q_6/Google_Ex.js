import React from "react";
import Google from "./Food";
class Google_Ex extends React.Component{
    render(){
        const google1 ={name:"gal", img:"https://media.istockphoto.com/photos/portrait-of-a-confident-young-businessman-picture-id1265176370?k=20&m=1265176370&s=612x612&w=0&h=6_6VmCfkflZspoOI2Gs_JVFm9SL43pR92AYjdbLCuSE=", dis:"Lorem ipsum"};
        const google2 ={name:"shmuel", img:"https://media.istockphoto.com/photos/young-bearded-businessman-sitting-on-desk-and-posing-picture-id1322913815?k=20&m=1322913815&s=612x612&w=0&h=vDJxUO2lrV1YtG2VoM9IGcZnPJNJ4cvGzAOhaY76A2Y=", dis:"tristique placerat."};
        const google3 ={name:"anat", img:"https://media.istockphoto.com/photos/lead-yourself-to-a-life-of-success-picture-id1299077558?k=20&m=1299077558&s=612x612&w=0&h=PU8JRoL6gRWYh1YDPtYjP45y7BUzFS3_mzQ1H9gumwk=", dis:"Lorem  placerat."};
        return (<div style={{display:"flex"}}>
            <Google obj= {google1}/>
            <Google obj= {google2}/>
            <Google obj= {google3}/>
        </div>)
    }
}
export default Google_Ex;