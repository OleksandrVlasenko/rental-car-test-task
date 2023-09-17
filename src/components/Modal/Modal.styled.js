import styled from "@emotion/styled";

const Container = styled.div`
  width: 541px;
  padding: 40px;

  border-radius: 24px;
  background-color: var(--background-color);
`;

const TitleContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;
`;

const MainDescription = styled.h3`
  color: var(--text-color);
  font-size: 14px;
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: 20px;

  margin-bottom: ${(props) => props.marginBottom};
`;

const RentalConditionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

const RentalConditionDescription = styled.p`
  padding: 7px 14px;

  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;

  & > span {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

export {
  Container,
  TitleContainer,
  MainDescription,
  RentalConditionsContainer,
  RentalConditionDescription,
};
