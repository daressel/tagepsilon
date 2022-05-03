import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${colors.Black};
  transition: all 0.2s ease-out;
  color: ${colors.Black};
  background-color: ${colors.White};
  &:hover {
    color: ${colors.White};
    background-color: ${colors.Black};
  }
`;

export const ButtonPrimary = styled(Button)`
  color: ${colors.Primary};
  background-color: ${colors.White};
  border-color: ${colors.PrimaryOpacity};
  &:hover {
    color: ${colors.White};
    background-color: ${colors.PrimaryOpacity};
    border-color: ${colors.PrimaryBright};
  }
`;
