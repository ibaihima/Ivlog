import React from 'react';
import Comment from './Comment';
import './Card.css'
import {useState, useEffect} from 'react'

function Card({user, image, text, button}){
    const [card, savedCards] = useState([])
    const [favorites, savedFavorites] = useState([])


    // useEffect(() => {
    //     fetch(`/posts`)
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         // savedCards(data)
    //     })
    //       }, [])
          

    function favorite(post){
        fetch(`/posts/${post.id}`)
        .then(data =>{
            console.log(data)
            savedCards(data)
        })
        fetch("/favorites", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "user_id": user.id,
                "post_id": card.id
            })
          })
          .then((r) => r.json())
          fetch(`/favorites`)
          .then(res => res.json())
          .then(data =>{
            console.log(data)
              savedFavorites(data)
          })
    }
    console.log(card)
    return(
    <div className="container"> 
        <div className="card"> 
            <div className="card-header"> 
                <h1>{user.firstName} {user.lastName} </h1>
                <button className="profilebttn">{button}</button>
            </div>
            <div>
            <h1>@{user.username}</h1>
            </div>
            <div className="card-body">
                <div className="card-text">
                    {text}
                </div>
                <div className="card-image"> 
                    <img className="image" src={image} />
                </div>
            </div>
        </div>
        <Comment handleClick={favorite} user={user} post={card} />
    </div>
    )
}

export default Card;