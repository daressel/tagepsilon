import styled from 'styled-components';
import colors from '../../../core/constants/colors';
import stylesProps from '../../../core/constants/stylesProps';

export const ChildrenWrapper = styled.div`
  margin-top: ${stylesProps.navBarHeight};
  /* padding: 20px; */
`;

export const MainWrapper = styled.div`
  background-color: ${colors.Dark};
  /* background-image: url('images/background1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
`;

export const ScrollToTop = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 10;
  left: 87%;
  bottom: 10%;
  border-radius: 50%;
  width: min(10vw, 70px);
  height: min(10vw, 70px);
  background-color: ${colors.Primary};
  box-shadow: 0 0 2px 2px ${colors.PrimaryBright};
`;
