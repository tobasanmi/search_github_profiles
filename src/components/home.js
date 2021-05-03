import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import { Context } from './state/githubState';
import { GET_RANDOM_USERS } from '../actions/actionTypes';
import UserItem from './userItem';
import Footer from './footer';

export default function Home() {
	const [state, dispatch] = useContext(Context);
	const [loading, setLoading] = useState(false);
	console.log('state', state);
	useEffect(() => {
		setLoading(true);
		axios
			.get('https://api.github.com/users?per_page=10')
			.then((response) => {
				const data = response.data;
				dispatch({ type: GET_RANDOM_USERS, payload: data });
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	let randomUsers = state.randomUsers;
	return (
		<div className="">
			<NavBar />
			{loading && <div>Loading ... </div>}
			<div className="grid-container">
				{randomUsers.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
			</div>
			<Footer />
		</div>
	);
}
