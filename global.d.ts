import React from "react";
import { User } from "@supabase/supabase-js";

export {};

declare global {
	type Events = {
		Form: React.FormEvent<HTMLFormElement>;
		Button: React.MouseEvent<HTMLButtonElement, MouseEvent>;
		Input: React.ChangeEvent<HTMLInputElement>;
	};

	type contextType = {
		data: {
			user: User;
			expiresIn: number;
			access_token: string;
		} | null;
		setData: Dispatch<SetStateAction<contextType["data"]>>;
	};

	type postsType = {
		id: string;
		created_at: string;
		title: string;
		tags: string;
		content: string;
		author: string;
	};
}
