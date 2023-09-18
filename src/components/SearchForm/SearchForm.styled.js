import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;

  padding-bottom: 50px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const InputsContainer = styled.div`
  display: flex;
`;

const InputBox = styled.div`
  display: flex;
  width: 160px;
  height: 48px;

  padding: 14px 0px 14px 24px;
  border-right: ${(props) => props.borderRigth};
  border-radius: ${(props) => props.borderRadius};
  background: #f7f7fb;

  color: var(--text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  & input {
    padding: 0;
    width: 88px;

    color: var(--text-color);
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    border: 0;
    background-color: #f7f7fb;
    outline: 0;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const SubmitButton = styled.button`
  width: 136px;
  height: 48px;

  border: 0;
  border-radius: 12px;
  background-color: var(--primary-color);

  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export { Form, Label, InputsContainer, InputBox, SubmitButton};
