import Comments from "@/components/Comments";
import Image from "@/components/Image";
import Post from "@/components/Post";
import Link from "next/link";
import styles from "./page.module.scss";

const StatusPage = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.header}>
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className={styles.title}>
					Post
				</h1>
      </nav>
      <Post type="status" />
      <Comments />
    </div>
  );
};

export default StatusPage;