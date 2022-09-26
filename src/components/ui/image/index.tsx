import { FC } from 'react';

export interface IProps {
  className?: string;
  path: string;
  width?: number;
  height?: number;
  alt?: string;
}

const Image: FC<IProps> = ({ className, path, width, height, alt }) => {
  return (
    <img
      className={className}
      src={process.env.REACT_APP_IMAGE_URI + path}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default Image;
