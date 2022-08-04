import { useState } from "react";

import ImageCard from "../components/ImageCard";
import {
  coreStackCards,
  learningCards,
  otherTechCards,
} from "../constants/techCards";
import { PortfolioCard } from "../models/models";

enum Tabs {
  CORE = "core",
  OTHER = "other",
  LEARNING = "learning",
}

const usePortfolio = () => {
  const [selectedTab, setSelectedTab] = useState(Tabs.CORE);

  const handleClickCore = () => setSelectedTab(Tabs.CORE);
  const handleClickOther = () => setSelectedTab(Tabs.OTHER);
  const handleClickLearning = () => setSelectedTab(Tabs.LEARNING);

  const getCards = (cards: PortfolioCard[]) => {
    return cards.map((card, index) => (
      <ImageCard
        key={card.name}
        src={card.src}
        animationDelay={`${index / 10}s`}
      />
    ));
  };

  const renderCards = () => {
    if (selectedTab === Tabs.CORE) {
      return getCards(coreStackCards);
    }

    if (selectedTab === Tabs.OTHER) {
      return getCards(otherTechCards);
    }

    if (selectedTab === Tabs.LEARNING) {
      return getCards(learningCards);
    }

    throw new Error("Oops, there aren't any cards!");
  };

  return {
    handleClickCore,
    handleClickOther,
    handleClickLearning,
    renderCards,
    selectedTab,
    Tabs,
  };
};

export default usePortfolio;
