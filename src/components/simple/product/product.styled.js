import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  color: ${colors.White};
  align-self: center;
  font-size: min(7vw, 32px);
  margin-bottom: 6vh;
`;
export const ProductImage = styled.div`
  display: flex;
  align-self: center;
  width: min(90vw, 350px);
  height: min(90vw, 350px);
  transition: all 0.2s ease-out;
  background-image: url(${({ image }) => (image ? image : 'images/logo_without_back.png')});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductDescription = styled.div`
  color: ${colors.White};
  border-radius: 10px;
  padding: 40px;
  width: 90vw;
  font-size: min(6vw, 20px);
  text-align: center;
  background-color: ${colors.PrimaryOpacity};
  margin: 50px 0;
`;

export const BackIcon = styled.div`
  cursor: pointer;
  width: 55px;
  height: 55px;
`;

export const ArrowImage = styled.div`
  cursor: pointer;
  margin: 10px;
  width: 50px;
  height: 50px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-self: center;
`;
