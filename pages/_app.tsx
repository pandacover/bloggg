import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../lib/user-context";
import { useState } from "react";
import Router from "next/router";
import PageLoader from "../components/page-loader";

export default function App({ Component, pageProps }: AppProps) {
	const [data, setData] = useState<contextType["data"] | null>(null);
	const [loading, setLoading] = useState(false);

	Router.events.on("routeChangeStart", () => setLoading(true));
	Router.events.on("routeChangeError", () => setLoading(false));
	Router.events.on("routeChangeComplete", () => setLoading(false));

	return (
		<UserContext.Provider value={{ data, setData }}>
			{loading ? <PageLoader /> : <Component {...pageProps} />}
		</UserContext.Provider>
	);
}
