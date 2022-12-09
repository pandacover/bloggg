import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../lib/user-context";
import { useState } from "react";
import Router from "next/router";
import Loader from "../components/loader";

export default function App({ Component, pageProps }: AppProps) {
	const [data, setData] = useState<contextType["data"] | null>(null);
	const [loading, setLoading] = useState(false);

	Router.events.on("routeChangeStart", () => setLoading(true));
	Router.events.on("routeChangeError", () => setLoading(false));
	Router.events.on("routeChangeComplete", () => setLoading(false));

	return (
		<UserContext.Provider value={{ data, setData }}>
			{loading ? (
				<Loader onPage={true} className='border-indigo-600 border-b-gray-200' />
			) : (
				<Component {...pageProps} />
			)}
		</UserContext.Provider>
	);
}
