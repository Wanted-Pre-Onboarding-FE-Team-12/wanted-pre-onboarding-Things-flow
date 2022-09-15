import { createContext } from 'react';

const RepositoryContext = createContext({
	organizationName: '',
	repositoryName: '',
});

interface IProps {
	children: JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: IProps): JSX.Element => {
	return (
		<RepositoryContext.Provider
			value={{ organizationName: 'angular', repositoryName: 'angular-cli' }}
		>
			{children}
		</RepositoryContext.Provider>
	);
};

export { ContextProvider, RepositoryContext };
