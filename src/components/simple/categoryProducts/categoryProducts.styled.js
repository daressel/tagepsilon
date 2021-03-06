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

export const CategoryContentWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const CategoryProductsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: ${colors.White};
`;

export const MainCircle = styled.div`
  background-color: ${colors.Black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* width: 40vw; */
  /* height: 40vw; */
  width: min(32vw, 500px);
  height: min(32vw, 500px);
  margin: min(40vw, 150px) 0;
`;

export const ImageMain = styled.div`
  background-image: url(${({ image }) => `/${image}`});
  width: 70%;
  height: 70%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  filter: invert(1);
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
  width: min(25vw, 200px);
  height: min(25vw, 200px);
  left: ${({ left }) => `calc(${left} - (min(25vw, 200px)/2))`};
  bottom: ${({ bottom }) => `calc(${bottom} - (min(25vw, 200px)/2))`};
  transition: all 0.2s ease-in-out;
  overflow-wrap: anywhere;
  color: ${colors.White};
  text-align: center;
  font-size: min(3vw, 24px);
  box-shadow: 0 0 1px 2px ${colors.PrimaryBright};
  :hover {
    box-shadow: 0 0 4px 5px ${colors.PrimaryBright};
    width: min(26vw, 210px);
    height: min(26vw, 210px);
    left: ${({ left }) => `calc(${left} - (min(26vw, 210px)/2))`};
    bottom: ${({ bottom }) => `calc(${bottom} - (min(26vw, 210px)/2))`};
    z-index: 10;
  }
  /* animation: ${blink} 1s linear infinite; */
  /* bottom: -70%;
  left: -50%; */
`;

export const CategoryNavbar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  /* height: 20vh; */
  justify-content: space-between;
  width: 100%;
`;
export const NavbarItem = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-out;
  font-size: max(13px, min(2vw, 20px));
  cursor: pointer;
  color: ${colors.White};
  height: 70px;
  width: 100%;
  /* min-width: 100px; */
  background-color: ${({ active }) => active && `${colors.PrimaryHover}`};
  :hover {
    background-color: ${colors.PrimaryHover};
  }
`;
