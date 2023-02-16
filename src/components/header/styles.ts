import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;

  .test {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    width: 100%;

    img {
      height: 3rem;
    }
  }

  .test2 {
    background: ${(props) => props.theme.colors.background};
    border-radius: 5px;
    display: flex;
    width: 90%;

    input {
      border: none;
      border-radius: 5px;
      outline: none;
      padding: 0.5rem;
      width: 100%;
    }

    button {
      background: ${(props) => props.theme.colors.background};
      border: none;
      border-radius: 5px;
      width: 3rem;

      svg {
        background: transparent;
        height: 100%;
        width: 100%;
      }
    }
  }
`;