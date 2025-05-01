import Image from "../Image";
import styles from "./post-info.module.scss"

const PostInfo = () => {
	return (
    <div className={styles.postInfo}>
      <Image path="icons/infoMore.svg" alt="" w={16} h={16} />
    </div>
  );
}

export default PostInfo