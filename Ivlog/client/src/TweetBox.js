import React from 'react'
// import { Avatar } from '@mui/material';
import "./TweetBox.css";
import {useState} from 'react'
import Card from './Card'

function TweetBox({user}) {
  const [card, savedCards] = useState([])
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  console.log(text)
  console.log(image)

function handleForm(){
  
}

  function handleSubmit(e){
    e.preventDefault()
    fetch("/posts",{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"  ,
    },
    body: JSON.stringify({
        "feed": image,
        "content": text,
        "user_id": user
    })
    })
    .then((r) => r.json())
    .fetch()
    // e.target.reset()
}

  return (
    <div className="tweetBox">
        <form onSubmit={handleSubmit}>
            <div className="tweetSearch">
                {/* <Avatar src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"/> */}
                <input 
                onChange={e => setText(e.target.value)}
                value={text}
                placeholder="Ivlog" 
                type="text"
                />
            </div>
            <div className="tweetImage">
              <input 
              onChange={e => setImage(e.target.value)}
              value={image}
              type="text"
              placeholder="Enter image" 
              />
            </div>
            <button className = "button">Vlog</button>
            <Card user={user} image />
        </form>
      
    </div>
  )
}

export default TweetBox