import Link from "next/link";
import { MenuDesktop, MenuMobile } from "./utility-menu";
import BreadCrums from "./bread-crums";

const Navbar = () => {
	return (
		<>
			<header className='w-full h-16 px-2 md:px-4 fixed top-0 left-0 bg-white bg-opacity-80 backdrop-blur'>
				<nav className='flex-1 h-full flex items-center'>
					<div className='text-lg font-medium flex-1 h-full flex items-center'>
						bloggg
					</div>
					<div className='relative flex-[2] text-sm font-medium h-full flex justify-end items-center py-4 pr-6 md:pr-0 gap-6 md:gap-0'>
						<Link href='/posts/create' className='hover:text-sky-500'>
							Create
						</Link>
						<Link href='/docs' className='hover:text-sky-500 ml-12 mr-6'>
							Docs
						</Link>
						<MenuDesktop />
						<MenuMobile />
					</div>
				</nav>
			</header>
			<div className='w-full h-16 px-2 md:px-4 mt-16 flex items-center capitalize text-gray-400 bg-opacity-80 bg-white'>
				<BreadCrums />
			</div>
		</>
	);
};

export default Navbar;
