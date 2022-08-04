import { FC } from "react";

import { StyledFigCaption } from "../styles/styles";

interface ImageCardProps {
  animationDelay: string;
  name: string;
  src: string;
}

const ImageCard: FC<ImageCardProps> = ({ animationDelay, name, src }) => {
  return (
    <figure className="tech-card" style={{ animationDelay }}>
      <img src={src} height="80rem" width="auto" />
      <StyledFigCaption>{name}</StyledFigCaption>
    </figure>
  );
};

export default ImageCard;
