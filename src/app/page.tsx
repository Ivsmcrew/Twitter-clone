import Feed from "@/components/Feed"
import Share from "@/components/Share"
import Link from "next/link"
import styles from "./page.module.scss"
import cn from "classnames"

const Homepage = () => {
  return (
    <main className={styles.homepage}>
			<nav className={styles.nav}>
				<Link className={cn(styles.navItem, styles.navItemActive)} href="/">For you</Link>
				<Link className={cn(styles.navItem)} href="/">Following</Link>
				<Link className={cn(styles.navItem)} href="/">React.js</Link>
				<Link className={cn(styles.navItem)} href="/">Javascript</Link>
				<Link className={cn(styles.navItem)} href="/">CSS</Link>
			</nav>
			<Share />
			<Feed />
		</main>
  )
}

export default Homepage