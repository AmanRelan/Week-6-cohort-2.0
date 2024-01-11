const stepsSectionStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#fff",
};

const stepStyle = {
  width: "30%",
  textAlign: "center",
};

const Step = ({ number, title, description }) => (
  <div className={stepStyle}>
    <div className={number}>{number}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const StepsSection = () => {
  return (
    <div className={stepsSectionStyle}>
      <Step
        number="1"
        title="Create an account"
        description="To get started, join now. You can also sign in to the app to get access to the full range of Starbucks® Rewards benefits."
      />
      <Step
        number="2"
        title="Order and pay how you’d like"
        description="Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways."
      />
      <Step
        number="3"
        title="Earn Stars, get Rewards"
        description="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
      />
    </div>
  );
};

export default StepsSection;
