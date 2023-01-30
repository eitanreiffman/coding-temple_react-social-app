import React from 'react'

export default function LogIn() {
  return (
    <>
        <h1 className="text-center text-black my-3">Log In</h1>
        <form action="" className='bg-dark p-3 mt-3 rounded'>
            <div className="form-group">
                <input type="text" className="form-control bg-success-subtle fw-bold" placeholder='Enter Username' name='username' />
                <input type="password" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Password' name='password' />
                <input type="submit" value="Log In" className="btn btn-success fs-4 fw-bold w-100" />
            </div>
        </form>
    </>
  )
}
