import React, { memo } from 'react';
import Button from '../ui/button/button';

import {
  ContainerWrapper,
  LogoWrapper,
  LogoImgWrapper,
  NameCompany,
  About,
  MenuWrapper,
  ConnectWrapper,
} from './navBar.styled';

const NavBar = () => {
  return (
    <ContainerWrapper>
      <LogoWrapper>
        <LogoImgWrapper></LogoImgWrapper>
        <NameCompany>ООО Эпсилон</NameCompany>
        <About>
          Проектирование и изготовление и поставка металлокострукций различного назначение
        </About>
      </LogoWrapper>
      <MenuWrapper>Главная Услуги Комерческое предложение Контакты</MenuWrapper>
      <ConnectWrapper>
        <Button>Связаться с нами</Button>
      </ConnectWrapper>
    </ContainerWrapper>
  );
};

export default memo(NavBar);
