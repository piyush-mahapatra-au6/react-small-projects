import "./App.css";
import Hero from "./components/Hero";
import {
	BrowserRouter as Router,
	useLocation,
	Switch,
	Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./createGlobalStyles";

function App() {
	const location = useLocation();
	return (
		<>
			<GlobalStyle />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/services' exact component={Services} />
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
