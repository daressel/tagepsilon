import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import {
  HomeWrapper,
  ListItem,
  ListWrapper,
  SubTitle,
  Title,
  LogoWrapper,
} from './home.styled';

const HomeLayout = () => {
  return (
    <>
      <PageWrapper>
        <HomeWrapper>
          <LogoWrapper />
          <Title>ООО "ЭПСИЛОН"</Title>
          <SubTitle>предлагает выполнение работ</SubTitle>
          <ListWrapper>
            <ListItem>По проектированию металлоконструкций</ListItem>
            <ListItem>По изготовлению металлоконструкций</ListItem>
            <ListItem>По поставке металлоконструкций заказчику</ListItem>
            <ListItem>
              По выполнению монтажных работ и авторскому надзору
            </ListItem>
            <ListItem>
              По комплексному обслуживанию многоквартирных домов
            </ListItem>
            <ListItem>По капитальному и текущему ремонту</ListItem>
            <ListItem>
              По проектированию объектов и строительству под ключ
            </ListItem>
            <ListItem>
              По обслуживанию вентиляционных и дымовых каналов
            </ListItem>
          </ListWrapper>
        </HomeWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(HomeLayout);
