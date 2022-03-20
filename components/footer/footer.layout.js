import { memo } from 'react';
import {
  ContactsWrapper,
  FooterWrapper,
  InfoWrapper,
  SubTitleWrapper,
  TitleWrapper,
} from './footer.styled';

const FooterLayout = () => {
  return (
    <FooterWrapper>
      <TitleWrapper>Оформить заказ</TitleWrapper>
      <SubTitleWrapper>
        Оставьте заявку и наши менеджеры свяжутся с Вами в течении 15 минут
      </SubTitleWrapper>
      <InfoWrapper>
        <ContactsWrapper>qweqwe</ContactsWrapper>
        <ContactsWrapper>asdasd</ContactsWrapper>
        <ContactsWrapper>zxczxc</ContactsWrapper>
      </InfoWrapper>
    </FooterWrapper>
  );
};

export default memo(FooterLayout);
