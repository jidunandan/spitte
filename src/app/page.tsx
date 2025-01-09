import { Landing } from "./components/Landing/";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Landing />
    </div>
  );
}
