import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div className="nav-bar-container">
			<nav className="navbar navbar-expand-lg navbar-light bg-blue">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<i className="fab fa-github github-icon"> GitHubProfiles</i>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav" id="nav">
							<li className="nav-item">
								<Link className="nav-link active links" id="home" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active links" id="search-profiles" to="/search">
									SearchUser
								</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link links" id="about" to="/about">
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
