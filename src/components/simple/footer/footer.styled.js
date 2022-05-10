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
  padding: 13px;
  margin: 3px;
  width: 60px;
  height: 60px;
  border-radius: 20%;
  :hover {
    background-color: ${colors.PrimaryHover};
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
  padding: 10px;
  transition: all 0.3s ease-out;
  border-radius: 5px;
  :hover {
    background-color: ${colors.PrimaryHover};
  }
`;

export const Email = styled.a`
  font-size: 18px;
  align-self: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  border-radius: 5px;
  padding: 10px;
  :hover {
    background-color: ${colors.PrimaryHover};
  }
`;
