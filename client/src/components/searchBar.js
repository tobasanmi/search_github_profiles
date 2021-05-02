import React,{useContext, useState, useEffect} from 'react'
import {Context} from './state/githubState'
import {Link} from 'react-dom'
import NavBar from './navbar'
import { SEARCH_USERS } from '../actions/actionTypes'
import axios from 'axios'
import UserItem from './userItem'


 function SearchBar() {

  const [query,setQuery] = useState('')
   const [state,dispatch] = useContext(Context);
   const [loading, setLoading] = useState(false)

  // console.log (query)
  

  useEffect(() => {
    if(!query){
      console.log('mmm','no query yet');
      return;  
    }
    console.log('query', query);
    setLoading(true)
    axios.get(`https://api.github.com/search/users?q=${query}&per_page=10`)
                .then(response => {
                  const data = response.data.items;
                  // console.log('response', data);
                    dispatch({type:SEARCH_USERS, payload: data});
                    setLoading(false)
                })
                .catch(error => {
                  console.log(error)
                });
  },[query])
const users = state.users;
console.log('users',users);

  return (
    <div>
      <NavBar/>
       <div className="search-container">
       <form onSubmit = {(e) => {
         e.preventDefault()
         setQuery(e.target.elements.query.value)
       }}>
       <input type="text" className = "form-control" id = "search-input" name = 'query'/>
       <button>Searh User</button>
       </form>
      </div>
      
      {loading && <div>Loading ... </div> }
      <div>
       {users.map(user => {
         return (
          <UserItem key = {user.id} user = {user}/>
         )
       })}
      </div>
    </div>
  )
}

export default SearchBar;
// export default function SearchBar() {
//   const [query,setQuery] = useState('')
//  const context = useContext(Context)
//  console.log('context', context);
// const onSubmit = (e) => {
//     e.preventDefault();


// }
// const onChange = (e) => {
//   setQuery(e.target.value)
// }

//   return (
//     <div>
//       <div className="search-container">
//       <form>
//       <input type="text" className = "form-control" id = "search-input" name = 'query' value = {query}/>
//       <button>Searh User</button>
//       </form>
//     </div>
//     <div className="card" style={{width: '18rem'}}>
//        <img src= '' className="card-img-top" alt="avatar"/>
//        <div className="card-body">
//          <h5 className="card-title"></h5>
//          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//          <Link to="/user/:login" className="btn btn-primary">Go somewhere</Link>
//        </div>
//      </div>
//     </div>
//   )
// }
