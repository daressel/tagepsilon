import Link from 'next/link';
import { memo } from 'react';
import {
  InfoItemWrapper,
  FooterWrapper,
  InfoWrapper,
  SubTitleWrapper,
  TitleWrapper,
  ItemTitle,
  NavLink,
  PhoneNumber,
  Email,
  BottomWrapper,
  CopyrightText,
  SVGWrapper,
  SocialWrapper,
  ContactWrapper,
  ItemWrapper,
  IconWrapper,
  InfoContent,
  TitleContent,
} from './footer.styled';
import { ReactSVG } from 'react-svg';

import { SecondaryText } from '../ui/text';

const FooterLayout = () => {
  return (
    <>
      <FooterWrapper>
        <TitleWrapper>Оформить заказ</TitleWrapper>
        <SubTitleWrapper>
          Оставьте заявку и наши менеджеры свяжутся с Вами в течении 15 минут
        </SubTitleWrapper>
        <InfoWrapper>
          <InfoItemWrapper>
            <ContactWrapper>
              <ItemTitle>Контактная информация</ItemTitle>
              <ItemWrapper>
                <IconWrapper>
                  <ReactSVG src="icons/call_icon.svg"></ReactSVG>
                </IconWrapper>
                <InfoContent>
                  <TitleContent>Звоните по номеру:</TitleContent>
                  <PhoneNumber>+7 (918) 537-96-12</PhoneNumber>
                </InfoContent>
              </ItemWrapper>
            </ContactWrapper>
            <ContactWrapper>
              <ItemWrapper>
                <IconWrapper>
                  <ReactSVG src="icons/map_icon.svg"></ReactSVG>
                </IconWrapper>
                <InfoContent>
                  <TitleContent>Мы находимся по адресу:</TitleContent>
                  <SecondaryText>
                    Ростовская область, город Таганрог, ул. Кузнечная, д. 6
                  </SecondaryText>
                </InfoContent>
              </ItemWrapper>
            </ContactWrapper>
            <ContactWrapper>
              <ItemWrapper>
                <IconWrapper>
                  <ReactSVG src="icons/mail_icon.svg"></ReactSVG>
                </IconWrapper>
                <InfoContent>
                  <TitleContent>Электронная почта:</TitleContent>
                  <Email>evladykin@gmail.com</Email>
                </InfoContent>
              </ItemWrapper>
            </ContactWrapper>
          </InfoItemWrapper>
          <InfoItemWrapper>
            <ItemTitle>Навигация по сайту</ItemTitle>
            <Link href="#">
              <NavLink>Главная</NavLink>
            </Link>
            <Link href="#">
              <NavLink>Услуги</NavLink>
            </Link>
            <Link href="#">
              <NavLink>Коммерческое предложение</NavLink>
            </Link>
            <Link href="#">
              <NavLink>Контакты</NavLink>
            </Link>
          </InfoItemWrapper>
          <InfoItemWrapper>
            <ItemTitle>Не нашли ответ на важный вопрос?</ItemTitle>
            <SecondaryText>Получите консультацию по телефону или напишите нам</SecondaryText>
          </InfoItemWrapper>
        </InfoWrapper>
      </FooterWrapper>
      <BottomWrapper>
        <CopyrightText>Copyright © 2021 - 2022 ООО Эпсилон</CopyrightText>
        <SocialWrapper>
          <Link href="https://vk.com/tagepsilon">
            <SVGWrapper>
              <ReactSVG src="icons/vk_icon.svg"></ReactSVG>
            </SVGWrapper>
          </Link>
          <Link href="https://t.me/epsilon_group">
            <SVGWrapper>
              <ReactSVG src="icons/telegram_icon.svg"></ReactSVG>
            </SVGWrapper>
          </Link>
          <Link href="https://wa.me/+79185379612">
            <SVGWrapper>
              <ReactSVG src="icons/whatsapp_icon.svg"></ReactSVG>
            </SVGWrapper>
          </Link>
        </SocialWrapper>
      </BottomWrapper>
    </>
  );
};

export default memo(FooterLayout);
