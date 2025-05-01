import Link from "next/link";
import Image from "../Image";
import styles from "./popular-tags.module.scss";

const PopularTags = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.heading}>
				{"What's Happening"}
			</h1>
      {/* TREND EVENT */}
      <div className={styles.trendEvent}>
        <div className={styles.imageWrapper}>
          <Image
            path="general/event.png"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className={styles.eventText}>
          <h2 className={styles.eventTitle}>
						It seems like the love
					</h2>
          <span className={styles.timestamp}>
						Last Night
					</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className={styles.topic}>
        <div className={styles.topicHeader}>
          <span className={styles.topicCategory}>
						Technology • Trending
					</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className={styles.topicTitle}>
					OpenAI
				</h2>
        <span className={styles.topicCount}>
					20K posts
				</span>
      </div>
      {/* TOPICS */}
      <div className={styles.topic}>
        <div className={styles.topicHeader}>
          <span className={styles.topicCategory}>
						Technology • Trending
					</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className={styles.topicTitle}>
					OpenAI
				</h2>
        <span className={styles.topicCount}>
					20K posts
				</span>
      </div>
      {/* TOPICS */}
      <div className={styles.topic}>
        <div className={styles.topicHeader}>
          <span className={styles.topicCategory}>
						Technology • Trending
					</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className={styles.topicTitle}>
					OpenAI
				</h2>
        <span className={styles.topicCount}>
					20K posts
				</span>
      </div>
      {/* TOPICS */}
      <div className={styles.topic}>
        <div className={styles.topicHeader}>
          <span className={styles.topicCategory}>
						Technology • Trending
					</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className={styles.topicTitle}>
					OpenAI
				</h2>
        <span className={styles.topicCount}>
					20K posts
				</span>
      </div>
      <Link href="/" className={styles.link}>
				Show More
			</Link>
    </article>
  );
};

export default PopularTags;
