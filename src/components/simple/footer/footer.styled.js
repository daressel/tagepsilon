import styled from 'styled-components';
import colors from '../../../core/constants/colors';
import mediaSize from '../../../core/constants/mediaSize';
import stylesProps from '../../../core/constants/stylesProps';

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 0px;
  color: ${colors.White};
  background-color: ${colors.Primary};
  min-height: ${stylesProps.footerHeight};
  align-content: center;
  align-items: center;
  justify-content: center;
  @media ${mediaSize.mobileL.max} {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  align-self: center;
  padding: 10px;
  font-size: 18px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SocialItem = styled.div`
  display: flex;
  cursor: pointer;
  background-color: ${colors.Primary};
  transition: all 0.3s ease-out;
  border-radius: 20%;
  :hover {
    filter: brightness(1.15);
  }
`;

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
`;

export const Phone = styled.a`
  font-size: 18px;
  align-self: center;
  margin: 10px;
  cursor: pointer;
`;

export const Email = styled.a`
  font-size: 18px;
  align-self: center;
  margin: 10px;
  cursor: pointer;
`;
