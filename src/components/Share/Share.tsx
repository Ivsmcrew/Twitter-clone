"use client";

import React, { ChangeEvent, useState } from "react";
import NextImage from "next/image";

import { shareAction } from "@/actions";

import Image from "../Image"
import ImageEditor from "../ImageEditor";
import styles from "./share.module.scss"
import { IImageSettings } from "@/types";

const Share = () => {
	const [media, setMedia] = useState<File | null>(null);
	const [isEditorOpen, setIsEditorOpen] = useState(false);
	const [settings, setSettings] = useState<IImageSettings>({
		type: "original",
		sensitive: false,
	});

	const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setMedia(e.target.files[0]);
		}
	};

	const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
			className={styles.shareForm}
			action={(formData) => {
				shareAction(formData, settings)
				setMedia(null)
				setSettings({ type: "original", sensitive: false })
			}}
    >
      {/* AVATAR */}
      <div className={styles.avatar}>
        <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
      </div>
      {/* OTHERS */}
      <div className={styles.content}>
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className={styles.input}
        />
        {/* PREVIEW IMAGE */}
        {
          media?.type.includes("image") && previewURL &&
					<div className={styles.preview}>
            <NextImage
              src={previewURL}
              alt="Preview image"
              width={600}
              height={600}
							className={`${styles.image} ${
								settings.type === "original"
									? styles.original
									: settings.type === "square"
									? styles.square
									: styles.wide
							}`}
            />
            <button
              className={styles["edit-button"]}
							type="button"
              onClick={() => {setIsEditorOpen(true)}}
            >
              Edit
            </button>
            <button
              className={styles["close-button"]}
							type="button"
							onClick={() => {
								setMedia(null)
								setSettings({ type: "original", sensitive: false })
							}}
            >
              X
            </button>
          </div>
        }
        {
					media?.type.includes("video") && previewURL &&
          <div className={styles.preview}>
            <video src={previewURL} controls />
            <button
              className={styles["close-button"]}
							type="button"
							onClick={() => {
								setMedia(null)
								setSettings({ type: "original", sensitive: false })
							}}
            >
              X
            </button>
          </div>
        }
        {isEditorOpen && previewURL &&
          <ImageEditor
						previewURL={previewURL}
						settings={settings}
						setSettings={setSettings}
						onClose={() => setIsEditorOpen(false)}
          />
        }
        <div className={styles.actions}>
          <div className={styles.icons}>
						<input
							type="file"
							name="file"
							onChange={handleMediaChange}
							className={styles.filesInput}
							id="file"
							accept="image/*, video/*"
						/>

            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt="post feature"
                w={20}
                h={20}
                className={styles.icon}
              />
            </label>
            <Image
              path="icons/gif.svg"
              alt="post feature"
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/poll.svg"
              alt="post feature"
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/emoji.svg"
              alt="post feature"
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/schedule.svg"
              alt="post feature"
              w={20}
              h={20}
              className={styles.icon}
            />
            <Image
              path="icons/location.svg"
              alt="post feature"
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
    </form>
  );
};

export default Share;