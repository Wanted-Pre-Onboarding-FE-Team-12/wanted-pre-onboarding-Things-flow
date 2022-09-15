import { Issue } from 'types/types';
import styled from 'styled-components';

/**
 * 이슈번호: number
 * 이슈제목: title
 * 작성자: user.login
 * 작성일: created_at
 * 코멘트수: comments
 */

interface IProps {
	key: number;
	issue: Issue;
}

const IssueItem = ({ issue }: IProps): JSX.Element => {
	const { number, title, user, created_at, comments } = issue;

	/**
	 * 상세 issue 이동
	 */
	const handleDetailIssue = () => {
		console.log('detail issue 가기');
	};

	return (
		<IssueContainer onClick={handleDetailIssue}>
			<LeftBox>
				<LeftTopBox>
					<img src={user.avatar_url} alt="user avatar img" />
					<h3> {title}</h3>
				</LeftTopBox>
				<span style={{ display: 'block' }}>&#9839;{number}</span>
				<LeftBottomBox>
					<h3>작성자: {user.login}</h3>
					<h3>작성일: {created_at.split('T')[0].split('-')}</h3>
				</LeftBottomBox>
			</LeftBox>
			<RightBox>
				<h3>코멘트: {comments}</h3>
			</RightBox>
		</IssueContainer>
	);
};

export default IssueItem;

const IssueContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 600px;
	background-color: #efebe9;
	margin-bottom: 3rem;
	border-radius: 20px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	padding: 1rem;

	:hover {
		cursor: pointer;
	}
`;

const LeftBox = styled.div`
	width: 80%;
`;

const LeftTopBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	img {
		width: 50px;
		border-radius: 50%;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		margin: 0.5rem 0;
	}

	h3 {
		margin-left: 1.4rem;
	}
`;

const LeftBottomBox = styled.div`
	display: flex;
	flex-direction: row;
	margin: 1rem 0.5rem;

	h3:nth-child(2) {
		padding-left: 1rem;
	}
`;

const RightBox = styled.div`
	width: 15%;
`;
