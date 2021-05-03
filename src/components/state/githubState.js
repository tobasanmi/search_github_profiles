import React, {createContext,useReducer} from 'react';
import Reducer from '../githubReducer/githubReducer'




const GithubStore = props => {

  const initialState = {
    users: [],
    user: {},
    repos:[],
    randomUsers:[]
  };
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
      <Context.Provider value = {[state,dispatch]}>
        {props.children}
      </Context.Provider>
    )
};

export const  Context = createContext();
export default GithubStore;

