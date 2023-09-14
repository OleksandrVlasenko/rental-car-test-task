import { LinkStyled } from "./Button.styled";

const Button = ({ link, children }) => {
	return <LinkStyled to={link}>{children}</LinkStyled>;
};

export { Button };
