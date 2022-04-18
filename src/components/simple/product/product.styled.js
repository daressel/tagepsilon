import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  color: ${colors.White};
  align-self: center;
  font-size: 32px;
  margin-bottom: 100px;
`;
export const ProductImage = styled.div`
  display: flex;
  align-self: center;
  /* position: relative; */
  min-width: 280px;
  width: 500px;
  height: 300px;
  transition: all 0.2s ease-out;
  /* background-position: center; */

  background-image: url(${({ image }) =>
    image ? image : 'images/logo_without_back.png'});
  /* background-size: auto; */
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
  width: 100%;
  text-align: center;
  min-width: 280px;
  margin: 10px 0;
  background-color: ${colors.PrimaryOpacity};
  margin-bottom: 50px;
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
