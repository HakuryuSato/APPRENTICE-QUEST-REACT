import Image from "next/image";
import React from "react";

interface CatImageProps {
  width?: number;
  height?: number;
}

export const CatImage: React.FC<CatImageProps> = ({ width = 200, height = 200 }) => {
  return (
    <>
      <Image
        src="/images/cat.jpg"
        alt="Cute Cat"
        width={width}
        height={height}
        style={{ margin: "10px" }}
      />
    </>
  );
};
