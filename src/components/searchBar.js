import React, { useContext, useState, useEffect } from 'react';
import { Context } from './state/githubState';
import NavBar from './navbar';
import { SEARCH_USERS } from '../actions/actionTypes';
import axios from 'axios';
import UserItem from './userItem';

function SearchBar() {
	const [query, setQuery] = useState('');
	const [state, dispatch] = useContext(Context);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!query) {
			return;
		}
		setLoading(true);
		axios
			.get(`https://api.github.com/search/users?q=${query}&per_page=10`)
			.then((response) => {
				const data = response.data.items;
				dispatch({ type: SEARCH_USERS, payload: data });
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [query]);
	const users = state.users;

	return (
		<div>
			<NavBar />
			<div className="search-container">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setQuery(e.target.elements.query.value);
					}}
					className="form"
				>
					<input type="text" className="form-control" id="search-input" name="query" />
					<button className="search-btn">Searh User</button>
				</form>
			</div>

			{loading && <div>Loading ... </div>}
			<div className="grid-container">
				{users.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
			</div>
		</div>
	);
}

export default SearchBar;
