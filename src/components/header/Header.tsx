import React from 'react'
import { HeaderContainer } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { ThemeGlobalContext } from '../../context/ThemeGlobalContext';
import { shade } from 'polished';
import icon from '../../assets/images/pokeapi_icon.png';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header: React.FC = () => {
  const { colors, title } = React.useContext(ThemeContext);
  const { toggleTheme, handleSearchPokemon, searchPokemon, setSearchPokemon } = React.useContext(ThemeGlobalContext);

  const navigate = useNavigate();

  const notify = () => toast.error("Pokemon not found!");

  const handleSearch = async () => {
    const pokemon = await handleSearchPokemon(searchPokemon);
    console.log(pokemon)

    if (searchPokemon === '' || typeof pokemon === 'string') {
      setSearchPokemon('');
      notify();
    } else {
      navigate(`/pokemon/${searchPokemon}`);
    }
  }

  return (
    <HeaderContainer>
      <div className='test'>
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
      </div>
      <div className='test2'>
        <input
          onChange={(e) => setSearchPokemon(e.target.value)}
          type="text"
          placeholder="Search"
          name='searchPokemon'
          value={searchPokemon}
        />
        <button
          type="button"
          onClick={() => handleSearch()}
        >
          <BiSearchAlt
            size={30}
            color={colors.primary}
          />
        </button>
      </div>
    </HeaderContainer>
  );
}

export default Header