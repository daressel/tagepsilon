import { memo, useState, useEffect } from 'react';
import {
  ServiceWrapper,
  ServiceTitle,
  ServiceImage,
  ServiceDescription,
  BackIcon,
  HeadWrapper,
  ArrowImage,
  ActionsWrapper,
} from './service.styled';
import Link from 'next/link';
import Icon from '../../ui/icon/icon';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';

const ServiceLayout = ({ service, activeImage, handleClickArrow }) => {
  return (
    <>
      <PageWrapper>
        <ServiceWrapper>
          <HeadWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <Link href="/" passHref>
              <BackIcon>
                <Icon src="icons/cross_icon.png" />
              </BackIcon>
            </Link>
          </HeadWrapper>
          <ServiceImage image={service.images[activeImage]} />
          <ActionsWrapper>
            <ArrowImage onClick={() => handleClickArrow(-1)}>
              <Icon src="icons/prev_arrow_icon.png" />
            </ArrowImage>
            <ArrowImage onClick={() => handleClickArrow(1)}>
              <Icon src="icons/next_arrow_icon.png" />
            </ArrowImage>
          </ActionsWrapper>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(ServiceLayout);
