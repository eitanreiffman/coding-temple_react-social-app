import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }

    handleSignUp = event => {
        event.preventDefault();
        let password = event.target.password.value
        let confirmPass = event.target.confirmPass.value
        if (password !== confirmPass){
            this.props.flashMessage('Passwords do not match', 'warning');
        } else {
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application.json');

            let formData = JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password
            })
            fetch("https://responsible-knowledgeable-restaurant.glitch.me/auth/users", {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })

            .then(res => res.json())
            .then(data => {
                if (data.error){
                    this.props.flashMessage(data.error, 'danger')
                } else {
                    this.props.flashMessage(`${data.username} has been created`, 'success')
                    this.setState({
                        redirect: true
                    })
                }
            })
        }
    }


    render(){
        return (
            <>
                {this.state.redirect ? <Navigate to='/' /> :
                <>
                    <h1 className="text-center text-black my-3">Sign Up</h1>
                    <form action="" className='bg-dark p-3 mt-3 rounded' onSubmit={this.handleSignUp}>
                        <div className="form-group">
                            <input type="text" className="form-control bg-success-subtle fw-bold" placeholder='Enter Email' name='email' />
                            <input type="text" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Username' name='username' />
                            <input type="password" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Password' name='password' />
                            <input type="password" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Confirm Password' name='confirmPass' />
                            <input type="submit" value="Sign Up" className="btn btn-success fs-4 fw-bold w-100" />
                        </div>
                    </form>
                </>
                }
            </>
        )
    }
}
