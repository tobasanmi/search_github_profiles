import {GET_USERS, GET_SINGLE_USER, SET_LOADING, CLEAR_USERS, GET_REPOS, SEARCH_USERS, GET_RANDOM_USERS} from '../../actions/actionTypes'

export const Reducer =  (state, action) => {
  switch (
    action.type
  ) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
      break;
      case GET_SINGLE_USER:
        return {
          ...state,
          user:action.payload,
          isLoading: false
        }
        break;
        case GET_RANDOM_USERS:
          return {
            ...state,
            ramdomUsers: action.payload,
            isLoading: false,
          }
        case CLEAR_USERS:
          return {
            ...state, 
            users: [],
            isLoading:false
          }
          break;
          case GET_REPOS:
            return {
              ...state, 
              repos:action.payload,
              isLoading: false
            }
            break;
            case SET_LOADING:
              return {
                ...state,
                isLoading: true
              }
    default:
      return state;
      break;
  }
}