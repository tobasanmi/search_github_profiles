import React, {useContext,useState, useEffect} from 'react'
// import { GET_USERS } from '../actions/actionTypes';
// import { githubContext } from '../context/githubContext';
import NavBar from './navbar'

export default function Home() {

  return (
    <div className = 'container'>
      <NavBar/>
    <div className="search-container">
      <form>
      <input type="text" className = "form-control" id = "search-input" name = 'query'/>
      </form>
    </div>
       <div className="card" style={{width: '18rem'}}>
       <img src= '' className="card-img-top" alt="avatar"/>
       <div className="card-body">
         <h5 className="card-title"></h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" className="btn btn-primary">Go somewhere</a>
       </div>
     </div>
</div>

  )
}
