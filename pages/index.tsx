import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../components/UI";

const HomePage = ({ user }: any) => {
	const router = useRouter();
	useEffect(() => {
		if (user) router.replace("/posts");
	}, [router, user]);

	return (
		<Layout title='Home'>
			<div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
				<div className='text-4xl font-bold'>Welcome to Bloggg</div>
				<div className='flex gap-6'>
					<Link href='/posts'>Explore Blogs</Link>
					<Link href='/auth/signup' className='text-indigo-600'>
						Join us Today
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps = async ({
	req,
	res,
}: {
	[key: string]: any;
}) => {
	const cookies = req.cookies;
	if (!cookies || cookies.length <= 0 || JSON.stringify(cookies) === "{}")
		return {
			props: {},
		};

	const {
		user: { email },
	} = JSON.parse(cookies.user);

	return {
		props: {
			user: email || "",
		},
	};
};

export default HomePage;
