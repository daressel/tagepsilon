import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

export const Title = styled.span`
  text-align: center;
  font-size: 32px;
  margin: 20px;
`;

export const SubTitle = styled.span`
  color: ${colors.Primary};
  text-align: center;
`;

export const ContentWrapper = styled.div`
  border: 1px solid ${colors.Primary};
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  text-align: center;
  min-width: 280px;
  margin: 10px 0;
`;

export const ContentText = styled.span``;
