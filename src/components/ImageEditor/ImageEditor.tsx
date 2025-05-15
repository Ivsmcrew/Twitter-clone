import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import styles from "./image-editor.module.scss"

import { IImageSettings, TImageTypeEnum } from "@/types";

interface ImageEditorProps {
	previewURL: string;
	settings: IImageSettings;
	setSettings: Dispatch<SetStateAction<IImageSettings>>
	onClose: () => void;
}

const ImageEditor: FC<ImageEditorProps> = (props) => {
	const { previewURL, settings, setSettings, onClose} = props;

	const handleChangeSensitive = (sensitive: boolean) => {
    setSettings((prev) => ({ ...prev, sensitive }));
  };
  const handleChangeType = (type: TImageTypeEnum) => {
    setSettings((prev) => ({ ...prev, type }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <svg
              width={32}
              viewBox="0 0 24 24"
              onClick={() => {
								setSettings({ type: "original", sensitive: false });
								onClose()
							}}
              className={styles.backIcon}
            >
              <path
                fill="#e7e9ea"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className={styles.title}>Media Settings</h1>
          </div>
          <button className={styles.saveButton} onClick={onClose}>
            Save
          </button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className={styles.imageContainer}>
          <Image
            src={previewURL}
            alt="Preview image in the editor"
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
        </div>

        {/* SETTINGS */}
        <div className={styles.settings}>
          <div className={styles.typeSelectors}>
            <div
              className={styles.typeButton}
              onClick={() => handleChangeType("original")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    settings.type === "original"
                      ? styles.iconActive
                      : styles.iconInactive
                  }
                  d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              Original
            </div>
            <div
              className={styles.typeButton}
              onClick={() => handleChangeType("wide")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    settings.type === "wide"
                      ? styles.iconActive
                      : styles.iconInactive
                  }
                  d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              Wide
            </div>
            <div
              className={styles.typeButton}
              onClick={() => handleChangeType("square")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    settings.type === "square"
                      ? styles.iconActive
                      : styles.iconInactive
                  }
                  d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              Square
            </div>
          </div>
          <div
            className={`${styles.sensitiveButton} ${
              settings.sensitive ? styles.sensitiveActive : styles.sensitiveInactive
            }`}
            onClick={() => handleChangeSensitive(!settings.sensitive)}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageEditor