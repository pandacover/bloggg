import Link from "next/link";
import { useState } from "react";
import BreadCrums from "./bread-crums";
import { MenuDesktop, MenuMobile } from "./utility-menu";

const Navbar = () => {
	return (
		<>
			<header className='w-full h-32 flex flex-col px-2 md:px-4 fixed top-0 left-0 bg-white bg-opacity-80 backdrop-blur'>
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
				<div className='w-full flex-1 flex items-center capitalize text-gray-400'>
					<BreadCrums />
				</div>
			</header>
		</>
	);
};

export default Navbar;
