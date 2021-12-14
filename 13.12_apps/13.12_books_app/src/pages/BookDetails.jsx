import React from 'react'
import './css/Books.module.css'
// import { Redirect } from 'react-router-dom'

const BookDetails = ({ name, author, biography, numberOfPaGes, picture }) => {
  return (
    <table>
      <tbody>
        <tr>
            <th>name</th>
            <th>author</th>
            <th>summary</th>
            <th>pages</th>
            <th>image</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{author}</td>
          <td>{biography}</td>
          <td>{numberOfPaGes}</td>
          <td><img src={picture}></img></td>
        </tr>
      </tbody>
    </table>
  )
}
export default BookDetails
