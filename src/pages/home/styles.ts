import styled from "styled-components";

export const HomeContainer = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.25rem;
  width: 100%;

  .pokemon_card {
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0.5rem;
    padding: 1.25rem;
    width: calc(100% / 2 - 1rem);

    img {
      height: 5rem;
      margin: 0 auto;
      width: 5rem;
    }

    h1 {
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      margin-top: 0.5rem;
      text-align: center;
    }
  }
`;