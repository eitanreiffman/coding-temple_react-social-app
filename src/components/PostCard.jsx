import React from 'react'
import { Route, Link } from 'react-router-dom'


export default function PostCard({ post }) {
  return (
    <>
        <div className='card bg-dark my-3'>
            <div className="card-body">
                <h5 className="card-title text-white fw-bold">{post.title}</h5>
                <p className="card-text text-warning fw-bold">{post.content}</p>
                <Link className='btn btn-info' to={`/posts/${post.id}`}>See Post</Link>
                {/* <Link className='btn btn-danger mx-2' to={'/posts'}>Delete Post</Link> */}
            </div>
        </div>
    </>
  )
}
