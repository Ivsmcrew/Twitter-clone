"use client"

import { IKVideo } from "imagekitio-next";

type TVideoProps = {
	className?: string;
	path: string;
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

const Video = ({path, className}: TVideoProps) => {
	return (
		<IKVideo
			className={className}
			urlEndpoint={urlEndpoint}
			path={path}
			transformation={[{width: "1920", height: "1080", q: "90"}]}
			controls={true}
		/>
	)
};

export default Video