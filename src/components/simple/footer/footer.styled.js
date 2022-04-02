import styled from 'styled-components';
import colors from '../../../core/constants/colors';
import stylesProps from '../../../core/constants/stylesProps';

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 0px;
  background-color: ${colors.Primary};
  min-height: ${stylesProps.footerHeight};
`;

export const Title = styled.div`
  align-self: center;
  padding: 15px;
  color: ${colors.White};
`;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const SocialItem = styled.div`
  display: flex;
`;
