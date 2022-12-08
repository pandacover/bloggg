import type { NextApiResponse, NextApiRequest } from "next";
import { setCookie, getCookie } from "cookies-next";
import supabase from "../../lib/supabase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password, type } = req.body;

	if (getCookie("user", { req, res }))
		return res.status(200).json("User already logged in");

	switch (type) {
		case "REGISTER":
			break;

		default:
			break;
	}

	switch (type) {
		case "REGISTER":
			const { error: err } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: "http://localhost:3000/auth/login",
				},
			});

			if (err) return res.status(403).json({ message: err.message });
			res.status(201).json({ message: "Please check your email." });
			break;
		case "LOGIN":
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) return res.status(403).json({ message: error.message });

			const date = new Date();

			setCookie("user", data.session, {
				req,
				res,
				maxAge: 604800,
				expires: new Date(date.setDate(date.getDate() + 7)),
				sameSite: false,
			});

			res.status(200).json({ message: "Login successful." });
			break;
		default:
			res.status(403).json({ message: "Bad api request." });
	}
};

export default handler;
