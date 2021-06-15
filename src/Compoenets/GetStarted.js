import React, { Component } from 'react'
// import video from '../../images/intro.mp4'
import {Link} from 'react-router-dom'


export class GetStarted extends Component {
    render() {
        return (
            <div className="bg-video-wrap">
                {/* <video autoPlay playsInline muted src={video} /> */}
            <img src="/images/intro-video-final.gif" alt="banner gif" id="getStartedGifVideo"/>
           <Link className="ToHome" to="/Home" id="getStartedBtn">Start Adventure</Link>
          </div>
        )
    }
}

export default GetStarted
