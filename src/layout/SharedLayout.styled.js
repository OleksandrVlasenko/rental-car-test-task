import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 124px;

  border-bottom: 1px solid var(--text-color-transparent);
`;

const Navigation = styled.nav`
display: flex;
gap: 40px;
`
const LinkStyled = styled(NavLink)`
  color: var(--text-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 20px;

  &.active {
    color: var(--primary-color);
  }
`;
export { Header, Navigation, LinkStyled };
