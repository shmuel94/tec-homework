import React from "react";
import Employee from "./Employee";

class Object_Employee extends React.Component {


render(){
    const employee1 = {name:"shmuel", img: "https://cdn.pixabay.com/photo/2020/01/27/14/09/men-4797307__340.jpg", age: 27, job:"brocker"};
    const employee2 = {name:"haim", img: "https://cdn.pixabay.com/photo/2020/01/27/14/09/men-4797307__340.jpg", age: 29, job:"brocker"};
    const employee3 = {name:"ezra", img: "https://cdn.pixabay.com/photo/2020/01/27/14/09/men-4797307__340.jpg", age: 28, job:"brocker"};
  return(< div > 
  <Employee obj= {employee1}/>
  <Employee obj= {employee2}/>
  <Employee obj= {employee3}/>
  </div>);
}
}
export default Object_Employee;