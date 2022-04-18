import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.White};
  text-align: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 200px;
  width: 200px;
  margin: 20px;
  align-self: center;
  background-image: url('images/logo_without_back.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Title = styled.span`
  font-size: 32px;
`;

export const SubTitle = styled.span`
  font-size: 24px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

export const ListItem = styled.div`
  background-color: ${colors.PrimaryOpacity};
  width: 40%;
  min-width: 260px;
  padding: 30px;
  margin: 10px;
  border-radius: 5px;
`;
