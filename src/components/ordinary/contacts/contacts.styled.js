import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  font-size: 24px;
  color: ${colors.White};
`;

export const Title = styled.span`
  font-size: 32px;
  margin: 30px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 50px 10px;
  flex-direction: column;
  background-color: ${colors.PrimaryOpacity};
  border-radius: 10px;
`;

export const Text = styled.span`
  margin: 10px;
`;
export const Email = styled.a`
  margin: 10px;
  cursor: pointer;
`;
export const Phone = styled.a`
  margin: 10px;
  cursor: pointer;
`;
