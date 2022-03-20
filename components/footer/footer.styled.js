import styled from 'styled-components';
import { Color } from '../../constants/colors';
import { PrimaryText, Text, SecondaryText } from '../ui/text';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-inline: 30px;
  color: white;
  background-image: linear-gradient(rgba(3, 3, 5, 0.65) 0%, rgba(3, 3, 5, 0.65) 100%),
    url('/earth.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  /* height: 2000px; */
  border-top: 1px solid ${Color.Dark};
  border-bottom: 1px solid ${Color.Dark};
`;

export const TitleWrapper = styled(Text)`
  font-weight: 200;
  font-size: 50px;
  text-align: center;
`;

export const SubTitleWrapper = styled(PrimaryText)`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const InfoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-inline: 20px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled(Text)`
  font-size: 20px;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const NavLink = styled(SecondaryText)`
  cursor: pointer;
  :hover {
    color: ${Color.Primary};
  }
`;

export const PhoneNumber = styled(Text)`
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
`;

export const Email = styled(PrimaryText)`
  font-size: 17px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

export const BottomWrapper = styled.div`
  /* height: 400px; */
  display: flex;
  justify-content: space-between;
  padding: 70px;
  color: ${Color.White};
  background-color: ${Color.Black};
`;

export const CopyrightText = styled(SecondaryText)`
  font-weight: 500;
  font-size: 16px;
`;

export const SVGWrapper = styled.div`
  width: 45px;
  height: 45px;
  margin-inline: 8px;
  border: 1px solid ${Color.Dark};
  border-radius: 50%;
  padding: 11px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    border-color: ${Color.Primary};
  }
  svg {
    filter: invert(65%) sepia(0%) saturate(1%) hue-rotate(184deg) brightness(97%) contrast(84%);
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
