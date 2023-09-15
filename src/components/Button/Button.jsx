import { LinkStyled } from "./Button.styled";

const Button = ({ link, children, buttonWidth }) => {
	return (
		<LinkStyled to={link} buttonWidth={buttonWidth}>
			{children}
		</LinkStyled>
	);
};

export { Button };
