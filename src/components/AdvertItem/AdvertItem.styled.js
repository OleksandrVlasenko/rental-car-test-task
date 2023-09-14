import styled from "@emotion/styled";

const Container = styled.div`
	display: block;
	width: 274px;
`;

const StyledImage = styled.img`
	width: 401px;
	height: 268px;
	object-fit: cover;

	background: linear-gradient(
			180deg,
			rgba(18, 20, 23, 0.5) 2.5%,
			rgba(18, 20, 23, 0) 41.07%
		),
		url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Title = styled.h2`
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;

	color: var(--text-color);

	& > span {
		color: var(--primary-color);
	}
`;

const Description = styled.p`
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;

	color: var(--text-color-transparent);
`;
export { Container, StyledImage, TitleContainer, Title, Description };
