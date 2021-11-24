import React from "react";
import Hotels from "./Hotels";
class Hotels_Workers extends React.Component{
    render(){
        const worker1 ={name:"liora", img:"https://media.istockphoto.com/photos/hotel-receptionist-smiling-at-camera-picture-id1257185955?k=20&m=1257185955&s=612x612&w=0&h=DkJgsr4wqX3gDf26NTaAS9fkkgJ2IKQFXTY8BmLJfoM=", job:"Lorem ipsum"};
        const worker2 ={name:"ben", img:"https://media.istockphoto.com/photos/gourmet-chef-cooking-in-a-commercial-kitchen-picture-id866699668?k=20&m=866699668&s=612x612&w=0&h=voVJPnnIhdEga9GdbGd7Lr2CfUgGICw1AJ9nxE6nsPk=", job:"tristique placerat."};
        const worker3 ={name:"linda", img:"https://media.istockphoto.com/photos/manager-of-the-hotel-showing-the-room-picture-id1162152175?k=20&m=1162152175&s=612x612&w=0&h=3KStOk8P1wdHpiRZSKzWj8uyz5pMjXbNAgqwAO4OcT8=", job:"Lorem  placerat."};
        const worker4 ={name:"vered", img:"https://media.istockphoto.com/photos/love-my-job-picture-id1169549001?k=20&m=1169549001&s=612x612&w=0&h=dG235jJnPrWCf6g-LemYMV5O3Izb8fP4ncmB0taCNF4=", job:"Nam euismodt."};
        return (<div style={{display:"flex"}}>
            <Hotels obj= {worker1}/>
            <Hotels obj= {worker2}/>
            <Hotels obj= {worker3}/>
            <Hotels obj= {worker4}/>
        </div>)
    }
}
export default Hotels_Workers;