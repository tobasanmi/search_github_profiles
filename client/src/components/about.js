import React from 'react';
import NavBar from './navbar';

export default function About() {
	return (
		<div>
			<NavBar />
			<div style={{ textAlign: 'center' }}>
				<h1 style={{ textAlign: 'center', marginTop: '60px' }}>About This App</h1>
				<p>This app Searches through profiles of Github USers</p>
			</div>
		</div>
	);
}
