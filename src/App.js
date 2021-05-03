import './App.css';
import Home from './components/home';
import SearchBar from '../src/components/searchBar';
import GithubStore from './components/state/githubState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/user';
import About from './components/about';

function App() {
	return (
		<GithubStore>
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/search" component={SearchBar} />

						<Route exact path="/about" component={About} />
						<Route exact path="/user/:login" component={User} />
						{/* <Route component = {NotFound}/> */}
					</Switch>
				</div>
			</Router>
		</GithubStore>
	);
}

export default App;
