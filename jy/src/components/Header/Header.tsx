import { useContext } from 'react';
import styled from 'styled-components';
import { RepositoryContext } from 'utils/createContext';

const Header = (): JSX.Element => {
	const { organizationName, repositoryName } = useContext(RepositoryContext);
	return (
		<HeaderContainer>
			<h1> {organizationName} </h1>
			<span>
				<strong>/</strong>
			</span>
			<h1> {repositoryName} </h1>
		</HeaderContainer>
	);
};

export default Header;

/**
 * style
 */
const HeaderContainer = styled.header`
	width: 100%;
	padding: 2rem;
	margin-bottom: 5rem;
	background-color: #bcaaa4;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
