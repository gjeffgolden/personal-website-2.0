import usePortfolio from "../hooks/usePortfolio";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { PageContainer } from "../styles/styles";

export const TechStack = () => {
  const {
    handleClickCore,
    handleClickOther,
    handleClickLearning,
    selectedTab,
    Tabs,
  } = usePortfolio();
  return (
    <PageContainer>
      <ButtonGroup>
        <Button onClick={handleClickCore}>Core Stack</Button>
        <Button onClick={handleClickOther}>Other Stuff I've Used</Button>
        <Button onClick={handleClickLearning}>What I'm Learning</Button>
      </ButtonGroup>
      <img src="assets/react-original.svg" height="100rem" width="auto" />
    </PageContainer>
  );
};
