import styled from 'styled-components';
import { Color } from '../../constants/colors';

export const Text = styled.span`
  color: ${Color.White};
  font-size: 14px;
  transition: all 0.2s;
`;

export const SecondaryText = styled(Text)`
  color: ${Color.Secondary};
  padding: 10px 0;
`;

export const PrimaryText = styled(Text)`
  color: ${Color.Primary};
`;

export const DarkText = styled(Text)`
  color: ${Color.Dark};
`;
