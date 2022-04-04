import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import {
  ContactsWrapper,
  ContentWrapper,
  Email,
  Phone,
  Text,
  Title,
} from './contacts.styled';

const ContactsLayout = () => {
  return (
    <>
      <PageWrapper>
        <ContactsWrapper>
          <Title>Контакты</Title>
          <ContentWrapper>
            <Text>Прием звонков: с 9:00 до 17:00 (Пн-Пт)</Text>
            <Text>
              Адрес : 347900 Ростовская обл., г. Таганрог ул. Кузнечная, 6
            </Text>
            <Text>ИНН 6154155213 </Text>
            <Text>КПП 615401001</Text>
            <Text>ОГРН 1196196022725</Text>
            <Email href="mailto:info@tagepsilon.ru">
              Е-mail: info@tagepsilon.ru
            </Email>
            <Phone href="tel:+7(918)537-96-12">Тел. +7 (918) 537-96-12</Phone>
          </ContentWrapper>
        </ContactsWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(ContactsLayout);
