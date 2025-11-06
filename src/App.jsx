import { Container, Sectin, Foterr } from "./components/foter";
import styled from "styled-components";
import groupImg from "./assets/rasm1.png";
import groupImgg from "./assets/rasm2.png";
import groupImmg from "./assets/rasm3.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  gap: 0;

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <Container>
        <img
          src={groupImg}
          alt="group"
          style={{ width: "64px", position: "relative", top: "-80px" }}
        />
        <h1>Sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button>Learn more</button>
      </Container>

      <Sectin>
        <img
          src={groupImgg}
          alt="group"
          style={{ width: "64px", position: "relative", top: "-80px" }}
        />
        <h1>SUVs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button>Learn more</button>
      </Sectin>

      <Foterr>
        <img
          src={groupImmg}
          alt="group"
          style={{ width: "64px", position: "relative", top: "-80px" }}
        />
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button>Learn more</button>
      </Foterr>
    </Wrapper>
  );
}
