import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.About}</a>
          {/* <Link className="nav-link" to="/about">{props.About}</Link> */}
        </li>
         <li>
         <div className="form-check form-switch my-2 mx-2">
    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
    </div>
    </li>   

        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    About:PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title:"Set title here",
    About:"About"
}