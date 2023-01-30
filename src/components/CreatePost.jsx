import React from 'react'

export default function CreatePost() {
  return (
    <>
        <h1 className="text-center text-black my-3">Create New Post</h1>
        <form action="" className='bg-dark p-3 mt-3 rounded'>
            <div className="form-group">
                <input type="text" className="form-control bg-success-subtle fw-bold" placeholder='Enter Title' name='title' />
                <input type="text" className="form-control my-3 bg-success-subtle fw-bold" placeholder='Enter Body' name='body' />
                <input type="submit" value="Create Post" className="btn btn-success fs-4 fw-bold w-100" />
            </div>
        </form>
    </>
  )
}
