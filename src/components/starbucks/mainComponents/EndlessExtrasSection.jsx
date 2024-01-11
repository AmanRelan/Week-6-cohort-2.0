import styles from "";

const ExtraCard = ({ imageSrc, title, description }) => (
  <div className={styles.extraCard}>
    <img src={imageSrc} alt={title} className={styles.extraImage} />
    <h3 className={styles.extraTitle}>{title}</h3>
    <p className={styles.extraDescription}>{description}</p>
    <a href="/learn-more" className={styles.learnMoreLink}>
      Learn more
    </a>
  </div>
);

const EndlessExtrasSection = () => {
  return (
    <section className={styles.endlessExtrasSection}>
      <h2>Endless Extras</h2>
      <p>
        Joining Starbucks Rewards means unlocking access to exclusive benefits.
        Say hello to easy ordering, tasty Rewards and—yes, free coffee.
      </p>
      <div className={styles.extrasContainer}>
        <ExtraCard
          imageSrc="/images/fun-freebies.png" // Replace with the path to your image
          title="Fun freebies"
          description="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
        />
        <ExtraCard
          imageSrc="/images/order-pay-ahead.png" // Replace with the path to your image
          title="Order & pay ahead"
          description="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
        />
        <ExtraCard
          imageSrc="/images/get-to-free-faster.png" // Replace with the path to your image
          title="Get to free faster"
          description="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
        />
        {/* Add more cards as needed */}
      </div>
    </section>
  );
};

export default EndlessExtrasSection;
