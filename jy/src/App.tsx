import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from 'utils/createContext';
import GlobalStyle from 'styles/globalStyle';
import Main from 'pages/Main/Main';
import Header from 'components/Header/Header';

function App(): JSX.Element {
	return (
		<Router>
			<GlobalStyle />
			<ContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route />
				</Routes>
			</ContextProvider>
		</Router>
	);
}

export default App;
