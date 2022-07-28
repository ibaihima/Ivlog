import React from 'react'
// import { Avatar } from '@mui/material';
import "./TweetBox.css";
import {useState,useEffect} from 'react'
import Card from './Card'
import {v4 as uuid} from 'uuid'

function TweetBox({user}) {
  const [card, savedCards] = useState([])
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  // console.log(text)
  // console.log(image)
  // console.log(card)
  useEffect(() => {
    fetch('/posts')
    .then(response => response.json())
    .then(data =>{
      if(data.length > 0){
        savedCards(data)
      }
    })
      }, [])

      
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
        "user_id": user.id
    })
    })
    .then((r) => r.json())
      fetch(`/posts`)
      .then(res => res.json())
      .then(data =>{
        // console.log(data)
        if(data.length > 0){
          savedCards(data)
        }
      })
}

// console.log(card)
return (
    <div className="tweetBox">
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="tweetSearch">
                {/* <Avatar src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"/> */}
                <input 
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Ivlog" 
                type="text"
                />
            </div>
            <div className="tweetImage">
              <input 
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text"
              placeholder="Enter image" 
              />
            </div>
            <button className="button">Vlog</button>
        </form>
        {
          card.slice(0).reverse().map((item) => {
            // console.log(item)
            return(
              <Card key={uuid()} user={item.user} text={item.content} image={item.feed}  />
            )})
        }
    </div>
  )
}

export default TweetBox