import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
// import { GET_USERS } from '../actions/actionTypes';
// import { githubContext } from '../context/githubContext';
import NavBar from './navbar'
import { Context } from './state/githubState'
import { GET_RANDOM_USERS, SET_LOADING } from '../actions/actionTypes';
import { Link } from 'react-router-dom';
import UserItem from './userItem';

export default function Home() {
          const [state, dispatch] = useContext(Context);
          const [loading, setLoading] = useState(false);
          // co??nst initialRandom = state.random;
          // const [randomUsers, setRandomUsers] = useState()
          console.log('state', state);
          useEffect(() => {
            setLoading(true);
            axios.get('https://api.github.com/users?per_page=10')
                .then(response => {
                  console.log('response', response.data);
                    const data = response.data;
                    dispatch({type: GET_RANDOM_USERS, payload: data});
                    setLoading(false)
                })
                .catch(error => {
                  console.log(error)
                });
        },[]);
        let randomUsers = state.randomUsers
        console.log('randon',randomUsers);
  return (
    <div className = ''>
      <NavBar/>
        {loading && <div>Loading ... </div> }
      <div className = 'grid-container'>
         {randomUsers.map(user => { 
           return (
              <UserItem key = {user.id} user ={user}/>
           )
          })}
          </div>
</div>
  )
}
