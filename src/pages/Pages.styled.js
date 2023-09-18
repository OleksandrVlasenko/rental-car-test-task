import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignItems};

  padding-top: 50px;
`;

const Header = styled.h1`
  padding-top: 50px;
  color: var(--text-color);
  font-size: 36px;
  font-weight: 500;
  line-height: 48px;
  text-align: center;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.buttonWidth};
  height: 44px;

  padding: 12px 0px;
  margin-top: 50px;

  color: var(--secondary-text-color);
  border-radius: 12px;
  background-color: var(--primary-color);

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export { Container, Header, LinkStyled };
