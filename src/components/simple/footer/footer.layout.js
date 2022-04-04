import { memo } from 'react';
import {
  FooterWrapper,
  SocialWrapper,
  SocialItem,
  Title,
  EmailWrapper,
  Email,
  PhoneWrapper,
  Phone,
} from './footer.styled';
import SVGIcon from '../../ui/svg/svg';

const FooterLayout = () => {
  return (
    <>
      <FooterWrapper>
        <Title>Epsilon</Title>
        <EmailWrapper>
          <Email>info@tagepsilon.ru</Email>
        </EmailWrapper>
        <PhoneWrapper>
          <Phone>+7 (918) 537-96-12</Phone>
          {/* <Phone>+7 (918) 537-96-12</Phone> */}
        </PhoneWrapper>
        <SocialWrapper>
          <SocialItem>
            <SVGIcon src="icons/vk_icon.svg" />
          </SocialItem>
          <SocialItem>
            <SVGIcon src="icons/telegram_icon.svg" />
          </SocialItem>
          <SocialItem>
            <SVGIcon src="icons/whatsapp_icon.svg" />
          </SocialItem>
        </SocialWrapper>
      </FooterWrapper>
    </>
  );
};

export default memo(FooterLayout);
