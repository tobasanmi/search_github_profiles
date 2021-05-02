import React from 'react'

export default function UserCard({user}) {
  return (
    <div className="card" style={{width: '18rem'}}>
    <img src= '' className="card-img-top" alt="avatar"/>
    <div className="card-body">
      <h5 className="card-title">{user.login}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}
