import React, { Component } from 'react'
import Gallery from './Gallery'
import * as style from './Gallery.module.css'

export default class Gallerys extends Component {
    state={
        pics:[
            {img:"https://media.istockphoto.com/vectors/reggae-background-vector-id165591092?k=20&m=165591092&s=612x612&w=0&h=ZIf4DNIXMR_cVWsbg-W8VzMaEsIwzUBeGv3svwjT2cI="},
            {img:"https://media.istockphoto.com/vectors/vector-reggae-icons-vector-id840915234?k=20&m=840915234&s=612x612&w=0&h=FsAuN3kiIAM0rs4AMgYJZuf2K8sJy-zVF2sJyIOwafg="},
            {img:"https://media.istockphoto.com/photos/african-woman-dancing-to-her-favorite-song-picture-id898598564?k=20&m=898598564&s=612x612&w=0&h=Tbr4t2UpDu6CFpQYZ_iJxdOo9xZoZGQUIB9lN5m5FKo="},
            {img:"https://media.istockphoto.com/photos/green-red-yellow-grunge-wood-background-picture-id488755296?k=20&m=488755296&s=612x612&w=0&h=vac658LEBX0qvUYN1WrtDjHbmHtPZYqnXu0Qcqe2NLM="}
        ],
        mainPic:"https://media.istockphoto.com/vectors/reggae-background-vector-id165591092?k=20&m=165591092&s=612x612&w=0&h=ZIf4DNIXMR_cVWsbg-W8VzMaEsIwzUBeGv3svwjT2cI=",
    }
    changeState=(src)=>this.setState({mainPic:src})
    render() {
        return (
            <div>
                <div className={style.mainPictures}>
            <img src={this.state.mainPic}/>
                </div>
                <div className={style.pictures}>
                {this.state.pics.map((pic, i)=>{
                    return <Gallery picture={pic} changeState={this.changeState}/>
                })}
                </div>
            </div>
        )
    }
}
