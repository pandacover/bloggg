import Head from "next/head";

type layoutProps = {
	children: React.ReactNode;
	title: string;
};

const Layout = ({ children, title }: layoutProps) => {
	return (
		<div
			className='w-screen mx-auto h-screen relative'
			style={{ maxWidth: "min(100%, 1368px)" }}
		>
			<Head>
				<title>{`Bloggg | ${title}`}</title>
				<meta
					name='description'
					content='A bloggg website made with Nextjs by @pandacover'
				/>
			</Head>
			{children}
		</div>
	);
};

export default Layout;
