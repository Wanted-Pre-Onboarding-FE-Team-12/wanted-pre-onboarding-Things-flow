import { useEffect, useMemo, useState } from 'react';
import { getRepositoryIssues } from 'api/issueApi';
import { Issue } from 'types/types';
import IssueItem from 'pages/Issue/Issue';
import Loading from 'components/Loading/Loading';
import styled from 'styled-components';
import { ImgProps } from 'types/types';

const Main = (): JSX.Element => {
	// 요청 보낸 issues들을 담는 state
	const [issues, setIssues] = useState<Issue[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	// page 정보 (무한 스크롤 관련)
	const [currentPage, setCurrentPage] = useState(1);
	const companyLogo = useMemo(() => 'https://bit.ly/3L9VL17', []);

	/** height */
	const [height, setHeight] = useState(0);

	// 로고 클릭 시 회사 페이지로 이동하는 이벤트 핸들러
	/* const handleToThingFlowHome = () => {
	}; */

	/** 데이터 목록 가져오는 useEffect 함수 */
	const getIssues = async () => {
		try {
			const { data } = await getRepositoryIssues(currentPage);
			setIssues(issues.concat(data));
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getIssues();
	}, [currentPage]);

	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;

		if (scrollTop + clientHeight >= scrollHeight) {
			setCurrentPage(currentPage + 1);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (isLoading) return <Loading />;

	return (
		<>
			<Container>
				{issues?.map((issue: Issue, idx: number) =>
					idx === 4 ? (
						<a href="https://thingsflow.com/ko/home" key={issue?.id}>
							<LogoItem>
								<ImgItem src={companyLogo} />
							</LogoItem>
						</a>
					) : (
						<IssueItem key={issue.id} issue={issue} />
					)
				)}
			</Container>
			<MoreIssueBox></MoreIssueBox>
		</>
	);
};

export default Main;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-contents: center;
	align-items: center;
	width: 100%;
`;

const LogoItem = styled.div`
	width: 600px;
	margin-bottom: 3rem;
	border-radius: 20px;
	padding: 2rem 1.5rem;
	background-color: #efebe9;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const ImgItem = styled.img`
	width: 80px;
	height: 80px;
	src: ${(p: ImgProps) => p.src && p.src};
`;

const MoreIssueBox = styled.div`
	width: 100px;
	height: 2rem;
	background-color: #e1bee7;
`;
