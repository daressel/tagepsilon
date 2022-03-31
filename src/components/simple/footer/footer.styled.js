import styled from 'styled-components';
import colors from '../../../core/constants/colors';
import stylesProps from '../../../core/constants/stylesProps';

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  bottom: 0px;
  background-color: ${colors.Primary};
  min-height: ${stylesProps.footerHeight};
`;
