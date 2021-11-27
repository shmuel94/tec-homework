import React, { Component } from 'react'

class Gallery extends Component {
    render() {
        return <div style={{border:"1px inset black"}}>
            <div>
              <img src={this.props.picture.img} onClick={(e) => this.props.changeState(e.target.src)} className=""/>
            </div>
        </div>
    }
}

export default Gallery