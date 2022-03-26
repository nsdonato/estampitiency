import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 100%;
  }

  div > p:nth-of-type(1) {
    font-weight: 500;
    font-size: 20px;
  }

  div > p:nth-of-type(2) {
    color: gray;
  }

  div > button {
    margin-top: auto;
  }
`;
