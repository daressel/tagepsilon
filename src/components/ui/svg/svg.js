import { memo } from 'react';
import { ReactSVG } from 'react-svg';
import { SVGWrapper } from './svg.styled';

const SVGIcon = ({ src }) => {
  return (
    <>
      <SVGWrapper>
        <ReactSVG src={src}></ReactSVG>
      </SVGWrapper>
    </>
  );
};

export default memo(SVGIcon);
