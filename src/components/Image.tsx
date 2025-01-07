"use client";
import { IKImage } from "imagekitio-next";

type ImageType = {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, width, height, alt, className }: ImageType) => {
  return (
    <IKImage
      path={path}
      urlEndpoint={urlEndpoint}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
