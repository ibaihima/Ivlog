import React from 'react'
import {useState,useEffect} from 'react'
import './Comment.css'


function Comment({handleClick, user, post}) {
  const [text, setText] = useState("");
  const [comment, savedComments] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    fetch("/comments",{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"  ,
    },
    body: JSON.stringify({
        "comment": text,
        "user_id": user.id,
        "post_id": post.id
    })

    })
    .then((r) => r.json())
      fetch(`/comments`)
      .then(res => res.json())
      .then(data =>{
        // console.log(data)
        if(data.length > 0){
          savedComments(data)
        }

      })
}
console.log(user.id)
// console.log(post)
  return (
    <div className="comment-container">
      <div className="icons">
        <span onClick={handleClick} className="material-symbols-outlined">
          favorite
        </span>

        <span className="material-symbols-outlined">
          comment
        </span>
      </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input 
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="commment" 
            type="text"
          />
        </form>
      <div>

      </div>
      
    </div>
    
  )
}

export default Comment
