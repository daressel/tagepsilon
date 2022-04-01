import styled from 'styled-components';

export const SVGWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline: 8px;
  border-radius: 50%;
  padding: 11px;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    width: 45px;
    height: 45px;
    filter: invert(65%) sepia(0%) saturate(1%) hue-rotate(184deg)
      brightness(97%) contrast(84%);
  }
`;
