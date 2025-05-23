import Link from "next/link"
import styles from "./left-bar.module.scss"
import Image from "../Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
	return (
		<aside className={styles.container}>
			<nav className={styles.navigation}>
				<Link href="/" className={styles.logo}>
					<Image
						path="icons/logo.svg"
						alt="logo"
						w={24}
						h={24}
					/>
        </Link>
				<menu className={styles.menu}>
					{menuList.map((item) => (
							<Link
								className={styles.menuItem}
								href={item.link}
								key={item.id}
							>
								<Image
									path={`icons/${item.icon}`}
									alt={item.name}
									w={24}
									h={24}
								/>
								<span className={styles.menuItemText}>
									{item.name}
								</span>
							</Link>
						))}
				</menu>
				<Link
          className={styles.newPostImage}
          href="/compose/post"
        >
          <Image
						path="icons/post.svg"
						alt="new post"
						w={24}
						h={24}
					/>
        </Link>
        <Link
          className={styles.newPostText}
          href="/compose/post"
        >
          Post
        </Link>
			</nav>

			<div className={styles.profile}>
        <div className={styles.profileInfo}>
          <div className={styles.avatar}>
            <Image
							path="/general/avatar.png"
							alt="lama dev"
							w={100}
							h={100}
							tr={true}
						/>
          </div>
          <div className={styles.name}>
            <span className={styles.nameText}>Lama Dev</span>
            <span className={styles.username}>@lamaWebDev</span>
          </div>
        </div>
        <div className={styles.dots}>...</div>
      </div>
		</aside>
	)
}

export default LeftBar