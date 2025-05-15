import cn from "classnames";
import Link from "next/link";

import imagekit from "@/utils/imagekit";
import { IFileDetailsResponse } from "@/types";

import Image from "../Image";
import PostInfo from "../PostInfo";
import PostInteractions from "../PostInteractions";
import Video from "../Video";
import styles from "./post.module.scss";

const Post = async ({type}: {type?: "status" | "comment"}) => {
	const getFileDetails = (fileId: string): Promise<IFileDetailsResponse> => {
		return new Promise((resolve, reject) => {
			imagekit.getFileDetails(fileId, function(error, result) {
				if(error) reject(error);
				else resolve(result as unknown as IFileDetailsResponse);
		});
		})
	}

	const fileDetails = await getFileDetails("6811289a432c4764166cd9e3");

  return (
    <article className={styles.postContainer}>
      {/* POST TYPE */}
      <div className={styles.postType}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Lama Dev reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className={cn(styles.postContent, { [styles.postContentStatusType]: type === 'status' })}>
        {/* AVATAR */}
        <div className={cn(styles.avatar, {[styles.hidden]: type === "status"})}>
          <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
        </div>
        {/* CONTENT */}
				<div className={styles.content}>
					{/* TOP */}
					<div className={styles.userInfo}>
						<Link href={`/lamaWebDev`} className={styles.avatarLink}>
							<div
								className={cn(styles.avatar, {
									[styles.hidden]: type !== 'status',
								})}
							>
								<Image
									path="general/avatar.png"
									alt=""
									w={100}
									h={100}
									tr={true}
								/>
							</div>
							<div className={cn(styles.userDetails, { [styles.userDetailsStatusType]: type === "status"})}>
								<h1 className={styles.username}>Lama Dev</h1>
								<span className={cn(styles.userTag, { [styles.userTagStatusType]: type === "status"})}>
									@lamaWebDev
								</span>
								{type !== "status" && (
									<span className={styles.timestamp}>1 day ago</span>
								)}
							</div>
						</Link>
						<PostInfo />
					</div>
          {/* TEXT & MEDIA */}
					<Link href={`/lamaWebDev/status/123`}>
						<p className={`${type === "status" && styles.largeText}`}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
							animi. Laborum commodi aliquam alias molestias odio, ab in,
							reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
							iure nam voluptas soluta pariatur inventore.
						</p>
					</Link>
          {fileDetails && fileDetails.fileType === "image" ? (
						<div className={styles.mediaContainer}>
							<Image
								className={fileDetails.customMetadata?.sensitive ? styles.sensitive : ''}
								path={fileDetails.filePath}
								alt="Post image"
								w={fileDetails.width}
								h={fileDetails.height}
							/>
						</div>
					) : (
						<Video
							className={fileDetails.customMetadata?.sensitive ? styles.sensitive : ''}
							path={fileDetails.filePath}
						/>
					)}
					{type === "status" && (
            <span className={styles.timestamp}>8:41 PM · Dec 5, 2024</span>
          )}
          <PostInteractions />
        </div>
      </div>
    </article>
  );
};

export default Post;