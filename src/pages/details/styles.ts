import styled from "styled-components";

export const DetailsImageContainer = styled.div`
  align-items: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1.25rem 1.25rem 0 1.25rem;
    width: 100%;

    a {
      color: #fff;
      font-size: 24px;
      text-decoration: none;
    }

    p {
      font-size: 24px;
    }
  }

  img {
    height: 20rem;
    padding: 1.25rem;
    width: 20rem;
  }
`;

export const DetailsInfoContainer = styled.div`
  display: flex;
  color: #333;
  flex-direction: column;
  padding: 1.25rem;
  width: 100%;

  h1 {
    font-size: 24px;
    margin-bottom: 0.5rem;
    text-align: center;
    width: 100%;
  }

  .pokemon_types {
    display: flex;
    margin-bottom: 0.5rem;

    p {
      background: ${(props) => props.theme.colors.primary};
      border-radius: 0.5rem;
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      font-weight: 600;
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      text-align: center;
    }
  }
`;

export const BaseStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;

  h1 {
    margin: 0;
    text-align: center;
  }

  li {
    margin-bottom: 0.5rem;
    list-style: none;
  }

  .bar {
    background: #353b48;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0,12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: block;
    height: 10px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    span {
      background: linear-gradient(135deg, rgba(236, 0, 140, 1)0%, rgba(252, 176, 69, 1)100%);
      float: left;
      height: 100%;
    }

    .hp {
      background: #388E39;
      animation: skillAnimation 3s ease-in-out;
    }
    .attack {
      background: #D32F2F;
      animation: skillAnimation 3s ease-in-out;
    }
    .defense {
      background: #1976D2;
      animation: skillAnimation 3s ease-in-out;
    }
    .special-attack {
      background: #FBC02D;
      animation: skillAnimation 3s ease-in-out;
    }
    .special-defense {
      background: #7B1FA2;
      animation: skillAnimation 3s ease-in-out;
    }
    .speed {
      background: #FFA000;
      animation: skillAnimation 3s ease-in-out;
    }

    @keyframes skillAnimation {
      0% {
        width: 0;
      }
    }
  }
`;

export const PokemonSW = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 100%;

  div span {
    font-size: 16px;
    font-weight: 600;
    margin: 0.5rem;
  }
`;