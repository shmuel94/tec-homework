import React from "react";
// import { Redirect } from 'react-router-dom'

const BookDetails = ({name, author, biography, numberOfPaGes, picture})=>{
    return(
        <div>
            <p>{name}</p>
            <p>{author}</p>
            <p>{biography}</p>
            <p>{numberOfPaGes}</p>
            <img src={picture}></img>
        </div>
    )
}
export default BookDetails;
