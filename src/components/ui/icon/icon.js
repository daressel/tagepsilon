import { memo } from 'react';
import { IconWrapper } from './icon.styled';

const Icon = ({ src }) => {
  return (
    <>
      <IconWrapper image={src} />
    </>
  );
};

export default memo(Icon);
