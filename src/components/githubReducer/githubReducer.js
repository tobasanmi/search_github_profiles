import {
	GET_SINGLE_USER,
	SET_LOADING,
	CLEAR_USERS,
	GET_REPOS,
	SEARCH_USERS,
	GET_RANDOM_USERS,
} from '../../actions/actionTypes';

const Reducer = (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				isLoading: false,
			};
		case GET_SINGLE_USER:
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};
		case GET_RANDOM_USERS:
			return {
				...state,
				randomUsers: action.payload,
				isLoading: false,
			};
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				isLoading: false,
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				isLoading: false,
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};

export default Reducer;
