import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import Layout from "../components/layout";

const HomePage = ({ user }: { [key: string]: string }) => {
	const router = useRouter();

	useEffect(() => {
		if (!user) router.replace("/auth/signup");
	}, [user, router]);

	return (
		<Layout title='Home'>
			<h1>HOME PAGE</h1>
		</Layout>
	);
};

export const getServerSideProps = async ({
	req,
	res,
}: {
	[key: string]: any;
}) => {
	const user = getCookie("user", { req, res }) || {};

	return {
		props: {
			user,
		},
	};
};

export default HomePage;
