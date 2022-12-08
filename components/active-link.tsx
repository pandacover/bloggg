import Link from "next/link";
import { useRouter } from "next/router";

type activeLinkProps = {
	href: string;
	className?: string;
	children: React.ReactNode;
};

const ActiveLink = ({ children, className = "", href }: activeLinkProps) => {
	const router = useRouter();

	return (
		<Link
			href={href}
			className={`
            ${
							router.asPath === href ? "text-red-600" : "text-indigo-600"
						} ${className}`}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;
