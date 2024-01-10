import Logo from "./logo.png";
const StarbucksHeader = () => {
  return (
    <div style={styles.topHeader}>
      <div>
        <img src={Logo} alt="starbucks-logo" />
      </div>
      <div style={styles.topHeader}>
        <p style={styles.navItems}>Menu</p>
        <p style={styles.navItems}>Rewards</p>
        <p style={styles.navItems}>Gift Cards</p>
      </div>
      <div>
        <p>
          <i>Icon</i>Find a Store
        </p>
      </div>
      <div>
        <button>Sign In</button>
      </div>
      <div>
        <button>Join Now</button>
      </div>
    </div>
  );
};
const styles = {
  topHeader: { display: "flex", gap: "30px" },
  navItems: {
    cursor: "pointer",
    marginTop: "25px",
    fontWeight: 600,
    fontSize: "larger",
  },
};

export default StarbucksHeader;
