import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colors from '../../../core/constants/colors';

// const blink = keyframes`
//   from {
//     box-shadow: 0 0 7px 6px ${colors.PrimaryBright};
//   }
//   to 50%,
//   100% {
//   }
//   50% {
//     box-shadow: 0 0 5px 4px ${colors.PrimaryBright};
//   }
//   100% {
//     box-shadow: 0 0 7px 6px ${colors.PrimaryBright};
//   }
// `;

export const CategoryProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colors.White};
`;

export const MainCircle = styled.div`
  position: relative;
  background-color: ${colors.Black};
  border-radius: 50%;
  /* width: 40vw; */
  /* height: 40vw; */
  width: min(40vw, 400px);
  height: min(40vw, 400px);
  margin: min(50vw, 300px) 0;
`;

export const ProductCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.Black};
  border-radius: 50%;
  width: min(34vw, 200px);
  height: min(34vw, 200px);
  left: ${({ left }) => `${left}`};
  bottom: ${({ bottom }) => `${bottom}`};
  transition: all 0.3s ease-in-out;
  overflow-wrap: anywhere;
  color: ${colors.White};
  text-align: center;
  font-size: min(4vw, 20px);
  box-shadow: 0 0 2px 3px ${colors.PrimaryBright};
  :hover {
    box-shadow: 0 0 5px 7px ${colors.PrimaryBright};
  }
  /* animation: ${blink} 1s linear infinite; */
  /* bottom: -70%;
  left: -50%; */
`;
