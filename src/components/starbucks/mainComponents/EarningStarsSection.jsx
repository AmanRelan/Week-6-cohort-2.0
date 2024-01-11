import styles from "";

const EarnMethod = ({ starsPerDollar, title, description, iconSrc }) => (
  <div className={styles.earnMethod}>
    <div className={styles.earnMethodHeader}>
      <img src={iconSrc} alt={title} className={styles.methodIcon} />
      <span className={styles.starsPerDollar}>{starsPerDollar}</span>
    </div>
    <h3 className={styles.methodTitle}>{title}</h3>
    <p className={styles.methodDescription}>{description}</p>
  </div>
);

const EarningStarsSection = () => {
  return (
    <section className={styles.earningStarsSection}>
      <h2>Cash or card, you earn Stars</h2>
      <p>
        No matter how you pay, you can earn Stars with your morning coffee.
        Those Stars add up to (really delicious) Rewards.
      </p>
      <div className={styles.earnMethodsContainer}>
        <EarnMethod
          starsPerDollar="1★ per dollar"
          title="Scan and pay separately"
          description="Use cash or credit/debit card at the register."
          iconSrc="/images/scan-pay-icon.png"
        />
        <EarnMethod
          starsPerDollar="2★ per dollar"
          title="Preload"
          description="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option."
          iconSrc="/images/preload-icon.png"
        />
        <EarnMethod
          starsPerDollar="Up to 3★ per dollar"
          title="Earn Stars even faster"
          description="Earn Stars on all purchases you make with our credit card in and outside of Starbucks."
          iconSrc="/images/visa-card-icon.png"
        />
      </div>
    </section>
  );
};

export default EarningStarsSection;
