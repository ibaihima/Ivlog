import React from 'react';

function Card({user, image, text}){
    return(
        <div className="card"> 
            <div className="card-header"> 
                <h1>{user.firstName} {user.lastName} </h1>
                <h1>{user.username}</h1>
            </div>
            <div className="card-body">
                <div className="card-text">
                    {text}
                </div>
                <div className="card-image"> 
                    <img src={image} />
                     {/* {post.image} */}
                </div>
            </div>
        </div>
    )
}

export default Card;