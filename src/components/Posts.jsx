import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    // const posts = [
    //     {
    //         title: "First Post",
    //         body: "This is the first post."
    //     },
    //     {
    //         title: "Second Post",
    //         body: "This is the second post."
    //     }
    // ]

  return (
    <>
        <h1 className="text-center text-black my-3">Posts</h1>
        {posts.map(post => <PostCard key={post.id} post={post} />)}
    </>
  )
}
