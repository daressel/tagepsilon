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
`;
export const ProductImage = styled.div`
  display: flex;
  align-self: center;
  position: relative;
  min-width: 280px;
  width: 100%;
  height: 300px;
  transition: all 0.2s ease-out;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ image }) =>
    image ? image : '/images/logo_without_back.png'});
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
`;

export const BackIcon = styled.div``;

export const ArrowImage = styled.div``;

export const ActionsWrapper = styled.div`
  display: flex;
`;