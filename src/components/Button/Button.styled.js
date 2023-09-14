import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LinkStyled = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;

	padding-top: 12px;
	padding-bottom: 12px;
	width: 274px;

	border-radius: 12px;
	background-color: var(--primary-color);

	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 20px;
	color: var(--secondary-text-color);

	&:hover {
		background: var(--secondary-color);
	}
`;
