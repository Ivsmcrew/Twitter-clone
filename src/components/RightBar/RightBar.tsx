import Link from "next/link"
import PopularTags from "../PopularTags"
import Recommendations from "../Recommendations"
import Search from "../Search"
import styles from "./right-bar.module.scss"

const RightBar = () => {
	return (
		<aside className={styles["right-bar"]}>
			<Search />
      <PopularTags />
      <Recommendations />
      <div className={styles.links}>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 L Corp.</span>
      </div>
		</aside>
	)
}

export default RightBar