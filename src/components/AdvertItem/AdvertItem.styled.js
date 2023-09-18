import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 274px;
`;

const IconsContainer = styled.div`
  position: absolute;
  top: ${(props) => props.backdown};
  right: ${(props) => props.backdown};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.fontSize + 4}px;
  height: ${(props) => props.fontSize + 4}px;

  font-size: ${(props) => props.fontSize}px;

  cursor: pointer;

  &:hover {
    font-size: ${(props) => props.fontSize + 4}px;
  }
`;

const StyledImage = styled.img`
  width: ${(props) => props.imageWidth};
  height: ${(props) => props.imageHeight};
  object-fit: cover;

  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    lightgray 50%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 14px;
  margin-bottom: 8px;

  padding-right: 9px;
`;

const Title = styled.h2`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  line-height: 24px;

  color: var(--text-color);

  & > span {
    color: var(--primary-color);
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  flex-grow: 1;

  margin-bottom: ${(props) => props.marginBottom};
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  color: var(--text-color-transparent);
`;
export {
  Container,
  IconsContainer,
  StyledImage,
  TitleContainer,
  Title,
  DescriptionContainer,
  Description,
};
