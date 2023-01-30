import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import SignUp from './components/SignUp'


export default function App(props){
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<LogIn /> } />
                    <Route path='/create' element={<CreatePost /> } />
                    <Route path='/posts' element={<Posts />} />
                </Routes>
            </div>
        </>
    )
}