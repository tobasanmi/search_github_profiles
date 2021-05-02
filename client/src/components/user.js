import React, { useContext, useEffect } from 'react'
import { Context } from './state/githubState'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { GET_REPOS, GET_SINGLE_USER, SET_LOADING } from '../actions/actionTypes';

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
  console.log(state.repos);
  const repos = state.repos;
  const userDetails = state.user
  return (
    <div>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={userDetails.avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{userDetails.name}</h1>
          <p>Location:{userDetails.location}</p>
          <p>Email : {userDetails.email}  </p>
        </div>
        <div>
          <a href={userDetails.html_url} className='btn btn-dark my-1' target = '_blank'>
            Go to  Github Profile
          </a>
          <ul>
            <li>
                  <strong>Username: </strong> {userDetails.login}
            </li>

            <li>
                  <strong>Company: </strong> {userDetails.company}
            </li>

            <li>
                  <strong>Website:  </strong>   {userDetails.website} 
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <ul>
          <li> Followers: {userDetails.followers}</li>
          <li> Public Repos: {userDetails.public_repos}</li>
          <li> Gists: {userDetails.public_gist}</li> 
        </ul>
        {/* <div className='badge badge-primary'>Followers: kkkk</div> 
        <div className='badge badge-success'>Following: </div>
        <div className='badge badge-light'>Public Repos: </div>
        <div className='badge badge-dark'>Public Gists: </div> */}
      </div>
      {repos.map(repo =>{
        return (
          <ul key = {repo.id}>
            <li><a href ={repo.svn_url} target="_blank" >{repo.name}</a></li>
          </ul>
        )
      })}
    </div>
  )
}
