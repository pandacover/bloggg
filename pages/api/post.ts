import { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { getEveryPosts, getOnePost, insertPost } from "../../lib/supabase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { title, tags, content, id } = req.body;
	switch (req.method) {
		case "GET":
			id
				? res.status(200).json(await getOnePost(id))
				: res.status(200).json(await getEveryPosts());
			break;
		case "POST":
			const cookies = req.cookies;
			if (!cookies.user) return res.status(400).send("User not authorized");

			const user = JSON.parse(cookies.user).user.email;

			const { error } = await insertPost(
				title,
				tags,
				content,
				user.split("@")[0]
			);
			if (error) return res.status(parseInt(error.code)).send(error.message);
			res.status(201).send("Published successfully.");
			break;
		default:
			res.status(403).json(new Error("Bad request."));
	}
};

export default handler;
