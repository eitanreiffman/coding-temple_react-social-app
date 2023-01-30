import React from 'react'

export default function SignUp() {
  return (
    <>
        <h1 className="text-center text-black my-3">Sign Up</h1>
        <form action="" className='bg-dark p-3 mt-3 rounded'>
            <div className="form-group">
                <input type="text" className="form-control bg-success-subtle fw-bold" placeholder='Enter Email' name='email' />
                <input type="text" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Username' name='username' />
                <input type="password" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Password' name='password' />
                <input type="password" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Confirm Password' name='confirmPass' />
                <input type="submit" value="Sign Up" className="btn btn-success fs-4 fw-bold w-100" />
            </div>
        </form>
    </>
  )
}
