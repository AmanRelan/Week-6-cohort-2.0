import styles from "";

const RewardTier = ({ stars, description }) => (
  <div className={styles.rewardTier}>
    <span className={styles.stars}>{stars}</span>
    <p>{description}</p>
  </div>
);

const RewardsTierSection = () => {
  return (
    <div className={styles.rewardsTierSection}>
      <RewardTier stars="25★" description="Customize your drink" />
      {/* Add other reward tiers here */}
    </div>
  );
};

export default RewardsTierSection;
