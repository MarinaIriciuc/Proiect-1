import {useEffect, useState} from "react";
import React from 'react';
import PostItem from "./PostItem";

function PostList(){
    const [posts, setPosts] = useState([])
    useEffect(function (){
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(function (response){
                return response.json()
            })
            .then(function (data){
                setPosts(data)
            })
    }, [])

    return (
        <div>
           <div className="container-fluid">
               <h4 className="mt-5 ms-3">Lista Postarilor:</h4>
               {
                   posts.length > 0 && posts.map(function (post, index){
                       return <PostItem
                           userId={post.userId}
                           id={post.id}
                           title={post.title}
                           body={post.body}
                           key={ index }
                       />
                   })
               }
           </div>
        </div>
    )
}

export default PostList;