import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;

  img {
    height: 3rem;
  }
`;