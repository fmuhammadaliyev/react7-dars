import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  width: 310px;
  height: 500px;
  background-color: yellow;
  border-radius: 12px;

  & button {
    padding: 10px 20px;
    background-color: #e28625;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #b86e1c;
    }
  }
`;
