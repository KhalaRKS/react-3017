import { Button } from '../button/button';
import { HeaderContainer, HeaderImageContainer, HeaderTextContainer } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <h1>Si tenes zappi,</h1>
        <h2>tenes nucba.</h2>
        <p>Buscá lo que quieras y Nucba te quedes sin comida</p>
        <Button>Ver mas</Button>
      </HeaderTextContainer>
      <HeaderImageContainer>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
          alt=''
          srcSet=''
        />
      </HeaderImageContainer>
    </HeaderContainer>
  );
};
