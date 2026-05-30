import { StyledFigCaption } from "../styles/styles";

interface ImageCardProps {
  animationDelay: string;
  name: string;
  src: string;
}

const ImageCard = ({ animationDelay, name, src }: ImageCardProps) => {
  return (
    <figure className="tech-card" style={{ animationDelay }}>
      <img src={src} alt={name} width={80} height={80} loading="lazy" />
      <StyledFigCaption>{name}</StyledFigCaption>
    </figure>
  );
};

export default ImageCard;
