import { motion } from 'framer-motion';
import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import {
    HomeContainer,
    LinkContainer,
    LinksContainer,
    NavbarContainer,
    SpanStyled,
    UserContainer,
    UserNav,
} from './styles';
export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <a href='/#'>
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png'
            alt=''
          />
        </a>
      </div>
      <LinksContainer>
        <HomeContainer>
          <motion.div whileTap={{scale: 0.97}}>
            <a href='/#'>
              <LinkContainer home={true}>
                <FaHome />
              </LinkContainer>
                Home
            </a>
          </motion.div>
          <UserNav>

          <UserContainer>
            <SpanStyled>Iniciar sesión</SpanStyled>
            <FaUser />
          </UserContainer>
          </UserNav>
        </HomeContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};
