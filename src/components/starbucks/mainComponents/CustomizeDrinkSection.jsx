const customizeSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 20px",
  backgroundColor: "#eaeaea",
};
const CustomizeDrinkSection = () => {
  return (
    <div className={customizeSectionStyle}>
      <h2>Get your favorites for free</h2>
      <div>
        <span>25★</span>
        <span>50★</span>
        <span>150★</span>
        <span>200★</span>
        <span>400★</span>
      </div>
      <div className={customizeSectionStyle}>
        <h3>Customize your drink</h3>
        <p>
          Make your drink just right with an extra espresso shot, dairy
          substitute or a dash of your favorite syrup.
        </p>
        <div>
          {/* <img src="/espresso-shot.png" alt="Espresso shot" />
          <img src="/milk-substitute.png" alt="Milk substitute" /> */}
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default CustomizeDrinkSection;
