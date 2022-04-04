import { memo } from 'react';
import Link from 'next/link';
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
          <Email href="mailto:info@tagepsilon.ru">info@tagepsilon.ru</Email>
        </EmailWrapper>
        <PhoneWrapper>
          <Phone href="tel:+7(918)537-96-12">+7 (918) 537-96-12</Phone>
          {/* <Phone>+7 (918) 537-96-12</Phone> */}
        </PhoneWrapper>
        <SocialWrapper>
          <Link href="https://vk.com/tagepsilon" passHref>
            <a target="_blank">
              <SocialItem>
                <SVGIcon src="icons/vk_icon.svg" />
              </SocialItem>
            </a>
          </Link>
          <Link href="https://t.me/epsilon_group" passHref>
            <a target="_blank">
              <SocialItem>
                <SVGIcon src="icons/telegram_icon.svg" />
              </SocialItem>
            </a>
          </Link>
          <Link href="https://wa.me/89185379612" passHref>
            <a target="_blank">
              <SocialItem>
                <SVGIcon src="icons/whatsapp_icon.svg" />
              </SocialItem>
            </a>
          </Link>
        </SocialWrapper>
      </FooterWrapper>
    </>
  );
};

export default memo(FooterLayout);
