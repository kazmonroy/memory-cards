import styled from 'styled-components';
const Card = ({ src, play }) => {
  return (
    <CardStyled onClick={play}>
      <img src={src} alt='' />
    </CardStyled>
  );
};

const CardStyled = styled.div`
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
  }
`;

export default Card;
