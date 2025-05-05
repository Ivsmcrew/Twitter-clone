"use client";

import Image from "@/components/Image";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

const PostModal = () => {
	const router = useRouter();

  const closeModal = () => {
		router.back();
  };

	useBodyScrollLock(true);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* TOP */}
        <div className={styles.top}>
          <div
            className={styles.close}
            onClick={closeModal}
          >
            X
          </div>
          <div className={styles.title}>
            Drafts
          </div>
        </div>

        {/* CENTER */}
        <div className={styles.center}>
          <div className={styles.avatar}>
            <Image
              path="general/avatar.png"
              alt="Lama Dev"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="What is happening?!"
          />
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <div className={styles.icons}>
            <Image
              path="icons/image.svg"
              alt=""
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className={styles.icon}
            />
          </div>
          <button className={styles.postButton}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;