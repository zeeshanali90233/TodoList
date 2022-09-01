import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand text-white" to="#">{props.title} </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About </Link>
      </li>

    </ul>
    {props.searchBar?<form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>:""}
  </div>
</nav>
  )
}

//Deafault Props
Header.defaultProps={
    title: "Your Title Here",
    // searchBar: false
}

//Defined the expected type of props
Header.prototype={
    title:PropTypes.string,
    searchBar:PropTypes.bool.isRequired
}

export default Header
