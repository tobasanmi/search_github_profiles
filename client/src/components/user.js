import React, { useContext, useEffect } from 'react'
import { Context } from './state/githubState'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { GET_REPOS, GET_SINGLE_USER} from '../actions/actionTypes';

export default function User({match}) {
  // console.log(match);
  const [state,dispatch] = useContext(Context);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${match.params.login}?`)
    .then(response => {
      const data = response.data;
      dispatch({
        type:GET_SINGLE_USER,
        payload: data
      })
      axios.get(`https://api.github.com/users/${match.params.login}/repos?per_page=10`)
      .then(response => {
       const  data = response.data
        console.log('new data', data);
            dispatch({
              type:GET_REPOS,
              payload:data
            })
      })
    }).catch(err => err)
  },[])
  console.log(state.user);
  const repos = state.repos;
  const userDetails = state.user
  return (
    <div style= {{background:"#337ab7"}}>
      <Link to='/search' className='btn btn-light' style = {{margin:"10px"}}>
        Back To Search
      </Link>
      <div className='card' style = {{margin:'10px'}}>
        <div className = 'profile-details'>
        <div className='profile-details-left'>
          <img
            src={userDetails.avatar_url}
            className='round-img'
            alt=''
          />
          <h4>{userDetails.name}</h4>
          <p><strong>Location:</strong>  {userDetails.location}</p>
          <p><strong>Email :</strong>  {userDetails.email}  </p>
        </div>
        <div className = 'profile-details-right'>
            <p>
                  <strong>Username: </strong> {userDetails.login}
            </p>

            <p>
              <strong>Company: </strong> {userDetails.company}
            </p>

            <p>
                  <strong>Website:  </strong>   {userDetails.website} 
            </p>
          <a href={userDetails.html_url} className='btn btn-primary my-1' target = '_blank'>
            Go to  Github Profile
          </a>
        </div>
        </div>
      </div>
      <div className='card ' style = {{margin:'10px'}}>
        <ul className = 'followers-container'>
          <li className = 'followers'><strong>Followers:</strong>  {userDetails.followers}</li>
          <li className= 'public-repo'><strong>Public Repos:</strong>  {userDetails.public_repos}</li>
          <li className = 'gist'> <strong>Gists:</strong> {userDetails.public_gist}</li> 
        </ul>
      </div>
      <div>
      <h2 style = {{textAlign:'center' ,color:'white' , padding:"5px"}}>REPOSITORIES</h2>
      {repos.map(repo =>{ 
        return (
          <ul key = {repo.id} className = 'card' style = {{margin:'10px'}}>
            <li className = 'repos'><a href ={repo.svn_url} target="_blank"  style = {{textDecoration:'none', color:"black"}}>{repo.name}</a></li>
          </ul>
        )
      })}
      </div>
    </div>
  )
}
