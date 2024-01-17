import StarbucksHeader from "./components/starbucks/StarbucksHeader";
import StarbucksHero from "./components/starbucks/StarbucksHero";
import StarbucksReward from "./components/starbucks/StarbucksReward";
import BusinessCard from "./components/SolutionBusinessCard";
const App = () => {
  return (
    <div>
      <BusinessCard
        name="Aman Relan"
        description="Node.js developer with 4+ years Of experience"
        interests={["React.js", "Node.js", "Web Dev"]}
        linkedin="linkedin.com/in/aman-relan"
        twitter="twitter.com/AmanRelan"
      />
      <StarbucksHeader />
      <StarbucksReward />
      <StarbucksHero />
    </div>
  );
};

export default App;
