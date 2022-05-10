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
import Icon from '../../ui/icon/icon';

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
                <Icon src="icons/vk_icon.png" />
              </SocialItem>
            </a>
          </Link>
          <Link href="https://t.me/epsilon_group" passHref>
            <a target="_blank">
              <SocialItem>
                <Icon src="icons/telegram_icon.png" />
              </SocialItem>
            </a>
          </Link>
          <Link href="https://wa.me/+79185379612" passHref>
            <a target="_blank">
              <SocialItem>
                <Icon src="icons/whatsapp_icon.png" />
              </SocialItem>
            </a>
          </Link>
        </SocialWrapper>
      </FooterWrapper>
    </>
  );
};

export default memo(FooterLayout);
