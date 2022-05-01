import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import Services from '../../simple/services/services';
import { HomeWrapper, SubTitle, Title, LogoWrapper } from './home.styled';

const HomeLayout = ({ selectedItem, handleSelectItem }) => {
  return (
    <>
      <PageWrapper>
        <HomeWrapper>
          {!selectedItem && (
            <>
              <LogoWrapper />
              <Title>ООО ЭПСИЛОН </Title>
              <SubTitle>предлагает выполнение работ</SubTitle>
            </>
          )}
          <Services
            selectedItem={selectedItem}
            handleSelectItem={handleSelectItem}
          />
        </HomeWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(HomeLayout);
