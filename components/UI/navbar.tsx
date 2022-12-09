import Link from "next/link";
import styles from "../../styles/links.module.css";

const Navbar = () => {
	return (
		<header className='h-12 md:h-16 w-[90vw] mx-auto flex items-center justify-between'>
			<div>
				<Link href='/posts' className='text-xl'>
					Bloggg
				</Link>
			</div>
			<div className='text-sm flex items-center gap-6'>
				<Link
					href='/posts/create'
					className={`${styles.hover} flex justify-center items-center w-16 h-8 text-indigo-600`}
				>
					Create
				</Link>
				<button
					className={`${styles.hover} flex justify-center items-center w-16 h-8 text-red-600`}
				>
					Logout
				</button>
			</div>
		</header>
	);
};

export default Navbar;
