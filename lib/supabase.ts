import { createClient } from "@supabase/supabase-js";
import { clientStore } from "../config";

const supabase = createClient(clientStore.url, clientStore.key);

export const getEveryPosts = async () => {
	const { data, error } = await supabase.from("posts").select("*");

	data?.sort(({ created_at: a }, { created_b: b }) => {
		if (a < b) return 1;
		if (a > b) return -1;
		return 0;
	});

	return { data, error };
};

export const getOnePost = async (id: string) => {
	const { data, error } = await supabase.from("posts").select("*").eq("id", id);
	return { data, error };
};

export const insertPost = async (
	title: string,
	tags: string,
	content: string,
	author: string
) => {
	const { data, error } = await supabase
		.from("posts")
		.insert({ title, tags, content, author });
	return { data, error };
};

export default supabase;
