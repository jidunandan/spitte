import styles from "./Landing.module.scss";
import LandingMainImg from "../../../../public/icons/LandingMain.png";
import Image from "next/image";
const Landing = () => {
  return (
    <div className={styles.Landing}>
      <div className={styles.imageContainer}>
        <Image
          src={LandingMainImg}
          alt="landing-logo"
          className={styles.image}
        />
      </div>
      <div className={styles.footerSection}>
        <div className={styles.appNameDesc}>
          <h3 className={styles.title}>Splitte</h3>
          <p className={styles.description}>
            Effortlessly split expenses and manage finances
          </p>
        </div>
        <button className={styles.joinNow}>JOIN NOW</button>
      </div>
    </div>
  );
};

export default Landing;
