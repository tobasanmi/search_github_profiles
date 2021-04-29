import React, {useReducer} from 'react';
import GithubContext from '../../context/githubContext';
import Reducer from '../githubReducer'
import axios from 'axios';
import { CLEAR_USERS, GET_RANDOM_USERS, GET_REPOS, GET_SINGLE_USER, SEARCH_USERS, SET_LOADING } from '../../actions/actionTypes';



const GithubState = props => {

  const initialState = {
    randomUsers:[],
    users: [],
    user: {},
    repos:[],
    loading:false
  };
    const [state, dispatch] = useReducer(GithubContext, initialState);

    // get random users

    const getRandomUsers = async () => {

      const res = await axios.get('https://api.github.com/users?per_page=10');
      dispatch({
        type:GET_RANDOM_USERS,
        payload: res.data
      });
    };

    // search users 

    const searchUsers = async (text) => {
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
      dispatch({
        type:SEARCH_USERS,
        payload:res.data.items
      })
    }
    //get a single user's details 
      const getSingleUser = async (username) => {
        const res = await axios.get(`https://api.github.com/users/${username}?`);
        dispatch({
          type: GET_SINGLE_USER,
          type:res.data
        })
      }

      //get a user's repo
      const getRepo = async (username) =>{
        const res = await axios.get(`https://api.github.com/users/${username}/repos?`)
        dispatch({
          type:GET_REPOS,
          payload: res.data
        })
      }

      // clear users 
      const clearUsers = () => {dispatch({type:CLEAR_USERS})}

      //set loading

      const setLoading = () => {dispatch({type:SET_LOADING})}

      return (
        <GithubContext.Provider value = {{
          randomUsers: state.randomUsers,
          users : state.users,
          user: state.user,
          repos: state.repos,
          loading: state.loading,
          searchUsers,
          getRandomUsers,
          getSingleUser,
          getRepo,
          clearUsers,
          setLoading
        }}>
          {props.children}
        </GithubContext.Provider>
      );
};

export default GithubState;