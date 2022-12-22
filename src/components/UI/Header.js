import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
        <h2>Blog posts with Redux</h2>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/post'>Add New Post</Link>
        </div>
    </header>
  )
}
