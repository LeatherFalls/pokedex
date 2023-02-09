import React from 'react'
import { HeaderContainer } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { ThemeGlobalContext } from '../../context/ThemeGlobalContext';
import { shade } from 'polished';
import icon from '../../assets/images/pokeapi_icon.png';


const Header: React.FC = () => {
  const { colors, title } = React.useContext(ThemeContext);
  const { toggleTheme } = React.useContext(ThemeGlobalContext);

  return (
    <HeaderContainer>
      <img src={ icon } alt="logo" />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
      />
    </HeaderContainer>
  );
}

export default Header