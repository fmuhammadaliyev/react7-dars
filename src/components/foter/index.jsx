import styled from "styled-components";

/* Asosiy card (Container) uchun umumiy stil */
const BaseCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 310px;
  height: 500px;
  color: white;
  border-radius: 12px;

  & h1 {
    text-transform: uppercase;
  }

  & p {
    margin: 15px 0;
    line-height: 1.5;
  }

  & button {
    padding: 10px 20px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

/* Uch xil variant uchun ranglar */
export const Container = styled(BaseCard)`
  background-color: #e28625;
`;

export const Sectin = styled(BaseCard)`
  background-color: #006971;
`;

export const Foterr = styled(BaseCard)`
  background-color: #004140;
`;
