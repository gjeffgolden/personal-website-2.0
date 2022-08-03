import { FC } from "react";

interface ImageCardProps {
  src: string;
  style: string;
}

const ImageCard: FC<ImageCardProps> = ({ src }) => {
  return <img src={src} height="100rem" width="auto" className="tech-card" />;
};

export default ImageCard;
