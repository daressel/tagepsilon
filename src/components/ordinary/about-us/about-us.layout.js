import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import { AboutUsWrapper, ContentText, ContentWrapper, Title, SubTitle } from './about-us.styled';

const AboutUsLayout = () => {
  return (
    <>
      {/* <PageWrapper> */}
      <AboutUsWrapper>
        <Title>О компании</Title>
        {/* <SubTitle>ЧЕМ ЗАНИМАЕТСЯ НАША КОМПАНИЯ</SubTitle> */}
        <ContentWrapper>
          <ContentText>
            Наша миссия: Мы руководствуемся тремя принципами – честность, последовательность и
            справедливость, предлагая клиентам ассортимент качественной продукции при оптимальном
            уровне цен и сервиса.
          </ContentText>
        </ContentWrapper>
        <ContentWrapper>
          <ContentText>
            Имеется аттестация СТО ГК Трансстрой-005-2007, СТП 012-200 Инспекции по контролю
            качества изготовления и монтажа мостовых конструкций (г.Москва).
          </ContentText>
        </ContentWrapper>
        <ContentWrapper>
          <ContentText>
            Мы всегда открыты к дружескому диалогу! Главный принцип работы нашей компании –
            формирование с клиентами долговременных партнерских отношений, основанных на
            профессионализме и взаимовыгодном сотрудничестве!
          </ContentText>
        </ContentWrapper>
        <ContentWrapper>
          <ContentText>
            Наш главный капитал — это сотрудники компании, команда единомышленников и профессионалов
            своего дела!
          </ContentText>
        </ContentWrapper>
      </AboutUsWrapper>
      {/* </PageWrapper> */}
    </>
  );
};

export default memo(AboutUsLayout);
