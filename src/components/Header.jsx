import styled from 'styled-components';
import rickAndMortyLogo from '../assets/rick.svg';

const Header = ({ score }) => {
  return (
    <HeaderStyled>
      <Nav>
        <img src={rickAndMortyLogo} alt='' />
        <h3>Score: {score}</h3>
      </Nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;

  @media (max-width: 580px) {
    padding: 8px 16px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 580px) {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      height: 32px;
      width: 32px;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export default Header;
