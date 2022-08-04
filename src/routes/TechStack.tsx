import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import usePortfolio from "../hooks/usePortfolio";
import { StyledPageContainer, StyledRowContainer } from "../styles/styles";

export const TechStack = () => {
  const {
    handleClickCore,
    handleClickOther,
    handleClickLearning,
    renderCards,
  } = usePortfolio();

  return (
    <StyledPageContainer>
      <ButtonGroup>
        <Button onClick={handleClickCore}>Core Stack</Button>
        <Button onClick={handleClickOther}>Other Stuff I've Used</Button>
        <Button onClick={handleClickLearning}>What I'm Learning</Button>
      </ButtonGroup>
      <StyledRowContainer>{renderCards()}</StyledRowContainer>
    </StyledPageContainer>
  );
};
