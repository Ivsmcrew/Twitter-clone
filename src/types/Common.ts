export interface IImageSettings {
	type: TImageTypeEnum;
	sensitive: boolean;
}

export type TImageTypeEnum = "original" | "wide" | "square";

export interface IFileDetailsResponse {
	width: number;
	height: number;
	filePath: string;
	url: string;
	fileType: string;
	customMetadata: IImageSettings;
}