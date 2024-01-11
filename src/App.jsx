import StarbucksHeader from "./components/starbucks/StarbucksHeader";
import StarbucksHero from "./components/starbucks/StarbucksHero";
import StarbucksReward from "./components/starbucks/StarbucksReward";
import FinalComponent from "./components/starbucks/mainComponents/FinalComponent";

const App = () => {
  return (
    <div>
      <StarbucksHeader />
      <StarbucksReward />
      <StarbucksHero />
      <FinalComponent />
    </div>
  );
};

export default App;
