"use client"

import { IKImage } from "imagekitio-next";

type TImageProps = {
	path: string,
	alt: string,
	w: number,
	h: number,
	className?: string,
	tr?: boolean,
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

const Image = ({path, alt, w, h, className, tr}: TImageProps) => {
	return (
		<IKImage
			urlEndpoint={urlEndpoint}
			path={path}
			alt={alt}
			className={className}
			{...(
				tr
					? {transformation: [{width: `${w}`, height: `${h}`}]}
					: {width: `${w}`, height: `${h}`}
			)}
			lqip={{active: true, quality: 20}}
		/>
	)
};

export default Image