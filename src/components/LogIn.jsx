import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogIn(props) {

    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        let username = event.target.username.value
        let password = event.target.password.value
        let stringToEncode = `${username}:${password}`

        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Basic ${btoa(stringToEncode)}`)

        let response = await fetch("https://responsible-knowledgeable-restaurant.glitch.me/auth/token", {
            method: 'POST',
            headers: myHeaders
        })

        if (response.ok){
            let data = await response.json();
            let token = data.token;
            let expiration = data.token_expiration;

            localStorage.setItem('token', token);
            localStorage.setItem('tokenExp', expiration)

            props.flashMessage('You have successfully logged in', 'success');
            props.logUserIn();
            navigate('/');
        } else {
            props.flashMessage('Your username and/or password are incorrect', 'danger');
        }
    }

  return (
    <>
        <h1 className="text-center text-black my-3">Log In</h1>
        <form action="" className='bg-dark p-3 mt-3 rounded' onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control bg-success-subtle fw-bold" placeholder='Enter Username' name='username' />
                <input type="password" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Password' name='password' />
                <input type="submit" value="Log In" className="btn btn-success fs-4 fw-bold w-100" />
            </div>
        </form>
    </>
  )
}
