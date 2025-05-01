import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";
import styles from "./page.module.scss";

const UserPage = () => {
  return (
    <main className={styles.container}>
      {/* PROFILE TITLE */}
      <nav className={styles.profileTitle}>
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className={styles.profileName}>
					Lama Dev
				</h1>
      </nav>
      {/* INFO */}
      <section className={styles.info}>
        {/* COVER & AVATAR CONTAINER */}
        <div className={styles.coverContainer}>
          {/* COVER */}
          <div className={styles.cover}>
            <Image path="general/cover.jpg" alt="" w={600} h={200} tr={true} />
          </div>
          {/* AVATAR */}
          <div className={styles.avatar}>
            <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.iconBtn}>
            <Image path="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className={styles.iconBtn}>
            <Image path="icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className={styles.iconBtn}>
            <Image path="icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className={styles.followBtn}>Follow</button>
        </div>
        {/* USER DETAILS */}
        <div className={styles.details}>
          <div>
            <h1 className={styles.username}>
							Lama Dev
						</h1>
            <span className={styles.handle}>
							@lamaWebDev
						</span>
          </div>
          <p>
						Lama Dev Youtube Channel
					</p>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <Image path="icons/userLocation.svg" alt="location" w={20} h={20} />
              <span>
								USA
							</span>
            </div>
            <div className={styles.metaItem}>
              <Image path="icons/date.svg" alt="date" w={20} h={20} />
              <span>
								Joined May 2021
							</span>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.statsItem}>
              <span className={styles.statsValue}>
								100
							</span>
              <span className={styles.statsLabel}>
								Followers
							</span>
            </div>
            <div className={styles.statsItem}>
              <span className={styles.statsValue}>
								100
							</span>
              <span className={styles.statsLabel}>
								Followings
							</span>
            </div>
          </div>
        </div>
      </section>
      <Feed />
    </main>
  );
};

export default UserPage;
