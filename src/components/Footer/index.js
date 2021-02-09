import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap> 
            <SocialLogo to='/'>Mie Aceh</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/mieaceh.pantepirak' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://instagram.com/mieacehpapi?igshid=4ca2m1ukflu9' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://www.youtube.com/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;