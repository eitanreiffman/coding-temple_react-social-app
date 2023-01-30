import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="navbar bg-dark text-white fw-bold fs-5">
            <div className="container-fluid">
                    <Link className='nav-link text-white' to="/">Home</Link>
                    <Link className='nav-link' to="/create">Create Post</Link>
                    <Link className='nav-link' to="/posts">See Posts</Link>
                    <Link className='nav-link' to="/">Sign Out</Link>
                    <Link className='nav-link' to="/signup">Sign Up</Link>
                    <Link className='nav-link' to="/login">Log In</Link>
            </div>
        </nav>
    </>
  )
}
