import React from 'react'
import NavBar from './navbar'

export default function Home() {
  return (
    <div className = 'container'>
      <NavBar/>
    <div className="search-container">
      <input type="text" className = "form-control" id = "search-input" />
      <button className = 'btn btn-primary'>Search</button>
    </div>
    <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

  )
}