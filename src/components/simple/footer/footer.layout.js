import { memo } from 'react';
import {
  FooterWrapper,
  SocialWrapper,
  SocialItem,
  Title,
} from './footer.styled';
import SVGIcon from '../../ui/svg/svg';

const FooterLayout = () => {
  return (
    <>
      <FooterWrapper>
        <Title>Epsilon</Title>
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
