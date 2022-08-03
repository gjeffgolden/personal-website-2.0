import { FC } from "react";

interface ImageCardProps {
  animationDelay: string;
  src: string;
}

const ImageCard: FC<ImageCardProps> = ({ src, animationDelay }) => {
  return (
    <img
      src={src}
      height="100rem"
      width="auto"
      className="tech-card"
      style={{ animationDelay }}
    />
  );
};

export default ImageCard;
