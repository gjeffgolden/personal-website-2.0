import { useState } from "react";

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

  return {
    handleClickCore,
    handleClickOther,
    handleClickLearning,
    selectedTab,
    Tabs,
  };
};

export default usePortfolio;
