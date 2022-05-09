import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import Services from '../../simple/services/services';
import { HomeWrapper, SubTitle, Title, LogoWrapper } from './home.styled';
import CategoryProducts from '../../simple/categoryProducts/categoryProducts';
import AboutUs from '../about-us/about-us';
import Product from '../../simple/product/product';

const HomeLayout = ({ selectedItem, handleSelectItem }) => {
  return (
    <>
      <PageWrapper>
        <HomeWrapper>
          {!selectedItem && (
            <>
              <LogoWrapper />
              <AboutUs />
              <Title>ООО ЭПСИЛОН </Title>
              <SubTitle>предлагает выполнение работ</SubTitle>
              <CategoryProducts handleSelectItem={handleSelectItem} />
            </>
          )}
          {selectedItem && <Product product={selectedItem} handleSelectItem={handleSelectItem} />}

          {/* <Services selectedItem={selectedItem} handleSelectItem={handleSelectItem} /> */}
        </HomeWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(HomeLayout);
