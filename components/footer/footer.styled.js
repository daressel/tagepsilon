import styled from 'styled-components';
import { Color } from '../../constants/colors';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-inline: 30px;
  color: white;
  background-image: linear-gradient(rgba(3, 3, 5, 0.65) 0%, rgba(3, 3, 5, 0.65) 100%),
    url('/earth.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 2000px;
`;

export const TitleWrapper = styled.span`
  color: ${Color.White};
  font-weight: 200;
  font-size: 50px;
  text-align: center;
`;

export const SubTitleWrapper = styled.span`
  color: ${Color.Primary};
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
