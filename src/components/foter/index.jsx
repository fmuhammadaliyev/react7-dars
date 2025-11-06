import styled from "styled-components";

const BaseCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 300px;
  height: 500px;
  color: white;
  transition: 0.3s;

  & h1 {
    text-transform: uppercase;
    margin-top: -40px;
  }

  & p {
    margin: 15px 0;
    line-height: 1.5;
    padding-top: 20px;
  }

  & button {
    position: absolute;
    margin-top: 350px;
    padding: 10px 20px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    align-self: self-start;
    width: auto;
  }
`;

export const Container = styled(BaseCard)`
  background-color: #e28625;

  & button:hover {
    background-color: #e28625;
    color: white;
  }
`;

export const Sectin = styled(BaseCard)`
  background-color: #006971;

  & button:hover {
    background-color: #006971;
    color: white;
  }
`;

export const Foterr = styled(BaseCard)`
  background-color: #004140;

  & button:hover {
    background-color: #004140;
    color: white;
  }
`;
