import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import { ColorsType } from '@src/store/types/productsType';
import styled from 'styled-components';
import ArrowLeft from '@public/svg/arrow_left.svg';
import ArrowRight from '@public/svg/arrow_right.svg';

export const Color: FC<Pick<ColorsType, 'images'>> = ({ images }) => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [isImg, setImg] = useState(false);
  const buttonNextHandler = () => {
    if (imgIndex < images.length - 1) {
      setImgIndex(prev => prev + 1);
    } else {
      setImgIndex(0);
    }
  };

  const buttonPrevHandler = () => {
    if (imgIndex > 0) {
      setImgIndex(prev => prev - 1);
    }
  };

  return (
    <ColorWrapper>
      <button className="button-left" onClick={buttonPrevHandler}>
        <ArrowLeft />
      </button>
      <img
        key={images[imgIndex]}
        src={images[imgIndex]}
        alt={images[imgIndex]}
        style={{ display: !isImg ? 'none' : 'flex' }}
        onLoad={() => setImg(true)}
      />

      <button className="button-right" onClick={buttonNextHandler}>
        <ArrowRight />
      </button>
    </ColorWrapper>
  );
};

export const ColorWrapper = styled.li`
  display: flex;
  position: relative;
  & img {
    height: auto;
    width: 350px;
  }

  & button {
    border: none;
    position: absolute;
    background: none;
    & svg {
      max-width: 80px;
      fill: none;
      stroke: black;
    }
  }
  & .button-left {
    left: 0;
  }
  & .button-right {
    right: 0;
  }
`;
