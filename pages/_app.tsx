import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import type { AppProps } from "next/app";
import { Loader } from "../components/UI";
import { UserContext } from "../lib/user-context";

export default function App({ Component, pageProps }: AppProps) {
	const [data, setData] = useState<contextType["data"] | null>(null);
	const [loading, setLoading] = useState(false);

	Router.events.on("routeChangeStart", () => setLoading(true));
	Router.events.on("routeChangeError", () => setLoading(false));
	Router.events.on("routeChangeComplete", () => setLoading(false));

	return (
		<UserContext.Provider value={{ data, setData }}>
			{loading ? (
				<div className='w-screen max-w-[1368px] h-screen mx-auto relative'>
					<Loader
						onPage={true}
						className='border-indigo-600 border-b-gray-200'
					/>
				</div>
			) : (
				<Component {...pageProps} />
			)}
		</UserContext.Provider>
	);
}
