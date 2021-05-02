// import  {createContext} from 'react';

// const githubContext = createContext();

// export default githubContext;







// import { createContext, useReducer } from "react" 
// import { GET_SINGLE_USER, GET_USERS, SET_LOADING } from "../actions/action";

// export const githubContext = createContext();

// const initialState = {
//   users: [],
//   user: '',
// }

// const reducer = (state, action) => {
//   switch(action.type){
//     case GET_USERS :
//       return {
//         ...state,
//         users:action.payload,
//       };
//       case GET_SINGLE_USER: 
//       return {
//         ...state,
//         user:action.payload,
//       };
//       case SET_LOADING:
//         return {
//           ...state,
//         };
//         default:
//           return state;
//   }
// };

// export const GithubContextProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <githubContext.Provider value = {[state,dispatch]}>
//         {props.children}
//     </githubContext.Provider>
//   );
// };