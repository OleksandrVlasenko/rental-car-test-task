import styled from "@emotion/styled";

const LoadMoreButton = styled.button`
  border: 0;
  background-color: inherit;
  padding-inline: 0;
  padding-block: 0;

  margin-bottom: 150px;
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;

  &:hover {
    color: var(--secondary-color);
  }
`;

export { LoadMoreButton };
