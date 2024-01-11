import starbucksheroImage from "./starbucks-rewards-hero.png";

const StarbucksHero = () => {
  return (
    <div
      style={{ backgroundColor: "#d4e9e2", display: "flex", height: "600px" }}
    >
      <div style={styles.hero}>
        <h1>
          FREE COFFEE <br /> IS A TAP AWAY
        </h1>
        <p>Join now to start earning Rewards</p>
        <button>Join Now</button>
        <p>
          Or <u>join in the app</u> for the best experience
        </p>
      </div>
      <div>
        <img
          src={starbucksheroImage}
          alt="starbucks-hero"
          style={styles.imageStyles}
        />
      </div>
    </div>
  );
};

const styles = {
  imageStyles: {
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  hero: {
    textAlign: "start",
    position: "absolute",
    top: "50%",
    left: "19%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
};
export default StarbucksHero;
