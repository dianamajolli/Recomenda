import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  width: 100%;
  background-color: #7724a7;
  color: white;
  text-align: center;
  padding: 0.15rem 0;
  font-family: 'Inria Serif', Helvetica, sans-serif;
  position: absolute;
  bottom: 0; 
  
 
  @media (min-width: 480px) {
    margin-top: 0.5rem; 
  }

  @media (min-width: 768px) {
    padding: 0.5rem 0;
    margin-top: 0.5rem; 
  }

  @media (min-width: 1024px) {
    padding: 2rem 0;
    margin-top: 2rem; 
  }

  @media (min-width: 1280px) {
    margin-top: 6rem; 
  }
`;


const FooterText = styled.p`
  font-size: 0.80rem; 
  line-height: 0.1;
  margin: 0;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterText>
      © Recomenda 2024 | Privacy Policy | Terms of Use
    </FooterText>
  </FooterContainer>
);

export default Footer;










