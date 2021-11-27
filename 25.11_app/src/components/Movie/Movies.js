import React, { Component } from 'react'
import Movie from './Movie'

export default class Movies extends Component {
    state={
        movies:[
            {name: "Black Panther", YearOfPublication:"2018", mainActore:"Chadwick Aaron Boseman R.I.P.", img:"https://images2.vudu.com/poster2/876950-338"},
            {name: "Iron Man", YearOfPublication:"2008", mainActore:"Robert Downey Jr.", img:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"},
            {name: "Thor", YearOfPublication:"2011", mainActore:"Chris Hemsworth", img:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg"},
            {name: "The Incredible Hulk", YearOfPublication:"2008", mainActore:" Edward Harrison Norton", img:"https://i.pinimg.com/736x/f1/40/2b/f1402bde23fd36b60b26ed5e704afd95.jpg"},
        ]
    }
    render() {
        return (
            <div>
                {this.state.movies.map((movie, i)=>
                <Movie movieObj = {movie}/>
                )}  
            </div>
        )
    }
}
