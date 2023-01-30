import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(props) {
    
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You must be logged in to view this page', 'danger');
            navigate('/login');
        }
    })

    const handleSubmit = async event => {
        event.preventDefault();

        let title = event.target.title.value;
        let content = event.target.content.value

        let token = localStorage.getItem('token');

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append('Authorization', `Bearer ${token}`);

        let requestBody = JSON.stringify({title, content})

        let response = await fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts", {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        })

        if (response.ok){
            let data = await response.json();
            props.flashMessage(`${data.title} has been created`, 'primary');
            navigate('/')
        } else {
            props.flashMessage("There was an issue, please try again", 'warning');
        }
    }
  
    return (
    <>
        <h1 className="text-center text-black my-3">Create New Post</h1>
        <form action="" className='bg-dark p-3 mt-3 rounded' onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control bg-success-subtle fw-bold" placeholder='Enter Title' name='title' />
                <input type="text" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Content' name='content' />
                <input type="submit" value="Create Post" className="btn btn-success fs-4 fw-bold w-100" />
            </div>
        </form>
    </>
  )
}
