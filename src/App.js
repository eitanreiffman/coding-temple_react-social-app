import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Alerts from './components/Alerts'
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import SignUp from './components/SignUp'


export default function App(props){

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    const now = new Date();
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now));

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    }

    function logUserIn(){
        setLoggedIn(true);
    }

    function logUserOut(){
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
        flashMessage('You have logged out', 'primary');
    }

    return (
        <>
            <Navbar />
            <div className="container">
                {message ? <Alerts message={message} category={category} flashMessage={flashMessage} /> : null}
                <Routes>
                    <Route path='/' element={<Home loggedIn={loggedIn} />} />
                    <Route path='/signup' element={<SignUp flashMessage={flashMessage} />} />
                    <Route path='/login' element={<LogIn flashMessage={flashMessage} logUserIn={logUserIn} /> } />
                    <Route path='/create' element={<CreatePost loggedIn={loggedIn} flashMessage={flashMessage} /> } />
                    <Route path='/posts' element={<Posts />} />
                </Routes>
            </div>
        </>
    )
}