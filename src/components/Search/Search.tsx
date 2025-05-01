import Image from "../Image"
import styles from "./search.module.scss"

const Search = () => {
	return (
    <div className={styles.search}>
      <Image
				path="icons/explore.svg"
				alt="search"
				w={16}
				h={16}
			/>
      <input
				className={styles.searchInput}
				type="text"
				placeholder="Search"
			/>
    </div>
  )
}

export default Search