import styles from "./comments.module.scss"
import Image from "../Image"
import Post from "../Post"

const Comments = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
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
          type="text"
          className={styles.input}
          placeholder="Post your reply"
        />
        <button className={styles.button}>
					Reply
				</button>
      </form>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Comments