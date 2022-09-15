export interface ILabel {
	color: string;
	default: boolean;
	description: string;
	id: number;
	name: string;
	node_id: string;
	url: string;
}

export interface IUser {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
}

export interface Issue {
	author_association?: string;
	body: string;
	closed_at?: null | string;
	comments: number;
	comments_url: string;
	created_at: string;
	id: number;
	labels?: ILabel;
	labels_url?: string;
	locked: boolean;
	number: number;
	repository_url: string;
	state: string;
	timeline_url: string;
	title: string;
	updated_at: string;
	url: string;
	user: IUser;
}

export interface ImgProps {
	src: string;
}
