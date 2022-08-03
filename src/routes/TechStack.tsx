import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import usePortfolio from "../hooks/usePortfolio";
import ImageCard from "../components/ImageCard";
import { coreStackCards } from "../constants/techCards";
import { PortfolioCard } from "../models/models";
import { StyledPageContainer, StyledRowContainer } from "../styles/styles";

export const TechStack = () => {
  const {
    handleClickCore,
    handleClickOther,
    handleClickLearning,
    selectedTab,
    Tabs,
  } = usePortfolio();

  // TODO: Add in rest of cards and add button logic

  const renderCards = (cards: PortfolioCard[]) => {
    return cards.map((card, index) => (
      <ImageCard
        key={card.name}
        src={card.src}
        animationDelay={`${index / 4}s`}
      />
    ));
  };

  return (
    <StyledPageContainer>
      <ButtonGroup>
        <Button onClick={handleClickCore}>Core Stack</Button>
        <Button onClick={handleClickOther}>Other Stuff I've Used</Button>
        <Button onClick={handleClickLearning}>What I'm Learning</Button>
      </ButtonGroup>
      <StyledRowContainer>{renderCards(coreStackCards)}</StyledRowContainer>
    </StyledPageContainer>
  );
};
