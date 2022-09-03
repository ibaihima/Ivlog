import React from 'react'
import {useState,useEffect} from 'react'
// import {v4 as uuid} from 'uuid'
import "./Profile.css"
import Card from './Card'

function Profile() {
    const [posts, setPosts] = useState([])
    const [postUser, setPostUser] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setPosts(data.posts)
        })
          }, [])
        console.log(posts)

        useEffect(() => {
            fetch('/me')
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                setPostUser(data)
            })
              }, [])
            console.log(postUser)

            function handleDelete(clickedPost){
              console.log(clickedPost)
              // fetch(`/post/${clickedPost.id}`,{
              //   method:"DELETE",
              // }).then (()=>{
              //   setPosts(posts.filter(el=> {
              //     console.log("after delete", posts)
              //     // return (el.id !==clickedPost.id)
              //   }))       
              // })
            }

  return (
    <div>

        <div className="profile-card">
        {
           posts.slice(0).reverse().map((item) => {
             console.log(item)
             return(
              <Card postInfo={item} deletePost={handleDelete} button={"x"} user={postUser} text={item.content} image={item.feed}  />
             )})
        }
        </div>
    </div>
  )
}

export default Profile