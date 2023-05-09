import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Error404pag = () => {
  return (
    <div className='container'>
      <h1>404 PaGe NoT FoUnD</h1>
      <p>our site is under cunstruction or has not build this page. please go to our site by using the below button </p>
      <Link to="/login">Go to login</Link>
    </div>
  )
}

export default Error404pag
