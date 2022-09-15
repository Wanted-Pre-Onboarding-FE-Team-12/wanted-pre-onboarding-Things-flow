import styled from 'styled-components';
import './loading.css';

const Loading = (): JSX.Element => {
	return (
		<LoadingContainer className="loading-container">
			<div></div>
		</LoadingContainer>
	);
};

export default Loading;

const LoadingContainer = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
`;
