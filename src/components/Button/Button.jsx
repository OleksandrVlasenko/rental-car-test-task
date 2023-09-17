import { ButtonStyled } from "./Button.styled";

const Button = ({ toogleModal, children, buttonWidth }) => {
  return (
    <ButtonStyled onClick={toogleModal} type="button" buttonWidth={buttonWidth}>
      {children}
    </ButtonStyled>
  );
};

export { Button };
