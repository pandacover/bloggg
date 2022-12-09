import { useEffect, useState } from "react";
import ThemeIcon from "./theme-icon";
import { IoPower } from "react-icons/io5";
import {
	HiMoon,
	HiOutlineSun as HiSun,
	HiComputerDesktop as HiDesktop,
} from "react-icons/hi2";

const MenuDesktop = () => {
	const [[light, dark, system], setThemeIndex] = useState([
		false,
		false,
		false,
	]);

	const [toggleThemeMenu, setToggleThemeMenu] = useState(false);

	const updateThemeState = (tabIndex: string) => {
		setThemeIndex((prev) => {
			const updatedState = prev.map((_, idx) => {
				if (idx.toString() === tabIndex) return true;
				return false;
			});
			return [updatedState[0], updatedState[1], updatedState[2]];
		});
	};

	const onThemeSelect = (e: Events["Button"]) => {
		updateThemeState(e.currentTarget.getAttribute("tabIndex") || "0");
		localStorage.theme = e.currentTarget.getAttribute("aria-label");
		setToggleThemeMenu(false);
	};

	useEffect(() => {
		if (!localStorage.theme || light || dark || system) return;
		const selected = localStorage.theme;
		updateThemeState(
			selected === "light" ? "0" : selected === "dark" ? "1" : "2"
		);
	}, [light, dark, system]);

	return (
		<>
			<div className='h-full hidden md:flex gap-6 text-lg border-l border-l-gray-300 pl-6'>
				<button
					className='text-sky-500'
					onClick={() => setToggleThemeMenu(!toggleThemeMenu)}
				>
					<ThemeIcon light={light} dark={dark} />
				</button>
				<button className='hover:text-red-600'>
					<IoPower />
				</button>
			</div>
			<div
				className='absolute w-32 py-1 rounded-md shadow-lg bg-white top-full right-[42px] hidden data-[menu-open="true"]:block'
				data-menu-open={toggleThemeMenu}
			>
				<button
					className='w-full flex p-2 items-center gap-2 hover:bg-gray-100 data-[selected="true"]:text-sky-500 theme-item'
					tabIndex={0}
					onClick={onThemeSelect}
					data-selected={light}
					aria-label='light'
				>
					<span className='text-lg'>
						<HiSun />
					</span>
					Light
				</button>
				<button
					className='w-full flex p-2 items-center gap-2 hover:bg-gray-100 data-[selected="true"]:text-sky-500 theme-item'
					tabIndex={1}
					onClick={onThemeSelect}
					data-selected={dark}
					aria-label='dark'
				>
					<span className='text-lg'>
						<HiMoon />
					</span>
					Dark
				</button>
				<button
					className='w-full flex p-2 items-center gap-2 hover:bg-gray-100 data-[selected="true"]:text-sky-500 theme-item'
					tabIndex={2}
					onClick={onThemeSelect}
					data-selected={system}
					aria-label='system'
				>
					<span className='text-lg'>
						<HiDesktop />
					</span>
					System
				</button>
			</div>
		</>
	);
};

export default MenuDesktop;
