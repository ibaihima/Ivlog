import {Container} from 'react-bootstrap'
import { Timeline } from 'react-twitter-widgets'
import "./HomePage.css";
import TweetBox from './TweetBox'
import React from 'react';
import Card from './Card'
import Sidebar from './Sidebar'

function HomePage({user}){

    return(
    <div className="homepage">
        <div className="homepageHeader">
            <h1>
                Home
            </h1>
        </div>
        <div className= 'home'>
        <Sidebar />
        <TweetBox user= {user} />
        </div>
    </div>
    )
}


export default HomePage;