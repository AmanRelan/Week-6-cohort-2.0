import Logo from "./logo.png";
import location from "./location-pin.svg";

const StarbucksHeader = () => {
  return (
    <div style={styles.topHeader}>
      <div style={{ display: "flex" }}>
        <img src={Logo} style={{ height: 60 }} alt="starbucks-logo" />
        <div style={styles.topHeader}>
          <p style={styles.navItems}>Menu</p>
          <p style={styles.navItems}>Rewards</p>
          <p style={styles.navItems}>Gift Cards</p>
        </div>
      </div>
      <div style={styles.rightSection}>
        <div style={styles.locationDesign}>
          <img src={location} alt="find" style={styles.imageHeight} />
          <span>Find a Store</span>
        </div>
        <button style={styles.buttonWhiteBackground}>Sign In</button>
        <button style={styles.buttonBlackBackground}>Join Now</button>
      </div>
    </div>
  );
};
const styles = {
  topHeader: {
    display: "flex",
    gap: "30px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  navItems: {
    cursor: "pointer",
    marginTop: "25px",
    fontWeight: 600,
    fontSize: "larger",
  },
  imageHeight: { height: 20 },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  locationDesign: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  buttonWhiteBackground: {
    background: "transparent",
    border: "black solid",
    borderRadius: "30px",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "12px",
    padding: "10px 15px",
    textTransform: "uppercase",
    lineHeight: "1",
    margin: "0 5px",
  },
  buttonBlackBackground: {
    background: "black",
    border: "black solid",
    borderRadius: "30px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "12px",
    padding: "10px 15px",
    textTransform: "uppercase",
    lineHeight: "1",
    margin: "0 5px",
  },
};

export default StarbucksHeader;
