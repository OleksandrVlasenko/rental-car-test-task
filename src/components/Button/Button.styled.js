import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 12px;
  width: ${(props) => props.buttonWidth};

  border-radius: 12px;
	border: 0;
  background-color: var(--primary-color);

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--secondary-text-color);

  &:hover {
    background: var(--secondary-color);
  }
`;

export { ButtonStyled };
