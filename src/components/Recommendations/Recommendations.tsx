import Link from "next/link";
import Image from "../Image";
import styles from "./recommendations.module.scss";

const Recommendations = () => {
  return (
    <article className={styles.recommendations}>
      {/* USER CARD */}
      <div className={styles.userCard}>
        {/* IMAGE AND USER INFO */}
        <div className={styles.userInfo}>
          <div className={styles.avatarWrapper}>
            <Image path="general/avatar.png" alt="John Doe" w={100} h={100} tr={true} />
          </div>
          <div>
            <h1 className={styles.userName}>John Doe</h1>
            <span className={styles.userHandle}>@johnDoe</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className={styles.followButton}>Follow</button>
      </div>

      <div className={styles.userCard}>
        <div className={styles.userInfo}>
          <div className={styles.avatarWrapper}>
            <Image path="general/avatar.png" alt="John Doe" w={100} h={100} tr={true} />
          </div>
          <div>
            <h1 className={styles.userName}>John Doe</h1>
            <span className={styles.userHandle}>@johnDoe</span>
          </div>
        </div>
        <button className={styles.followButton}>Follow</button>
      </div>

      <div className={styles.userCard}>
        <div className={styles.userInfo}>
          <div className={styles.avatarWrapper}>
            <Image path="general/avatar.png" alt="John Doe" w={100} h={100} tr={true} />
          </div>
          <div>
            <h1 className={styles.userName}>John Doe</h1>
            <span className={styles.userHandle}>@johnDoe</span>
          </div>
        </div>
        <button className={styles.followButton}>Follow</button>
      </div>

      <Link href="/" className={styles.showMoreLink}>
        Show More
      </Link>
    </article>
  );
};

export default Recommendations;
