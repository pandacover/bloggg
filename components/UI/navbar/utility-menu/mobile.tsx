import { useEffect, useState } from "react";
import ThemeIcon from "./theme-icon";
import { IoPower, IoClose } from "react-icons/io5";
import {
	HiMoon,
	HiOutlineSun as HiSun,
	HiComputerDesktop as HiDesktop,
	HiChevronDown as HiDown,
} from "react-icons/hi2";

import { HiOutlineDotsVertical as HiDots } from "react-icons/hi";

const MenuMobile = () => {
	const [[light, dark, system], setThemeIndex] = useState([
		false,
		false,
		false,
	]);

	const [toggleMenu, setToggleMenu] = useState(false);

	const updateThemeState = (tabIndex: string) => {
		setThemeIndex((prev) => {
			const updatedState = prev.map((_, idx) => {
				if (idx.toString() === tabIndex) return true;
				return false;
			});
			return [updatedState[0], updatedState[1], updatedState[2]];
		});
	};

	const onThemeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selected = e.currentTarget.value;
		updateThemeState(
			selected === "light" ? "0" : selected === "dark" ? "1" : "2"
		);
		localStorage.theme = selected;
	};

	useEffect(() => {
		if (!localStorage.theme || light || dark || system) return;
		const selected = localStorage.theme;
		updateThemeState(
			selected === "light" ? "0" : selected === "dark" ? "1" : "2"
		);
	}, [light, dark, system]);

	return (
		<div className='h-full md:hidden flex items-center'>
			<button onClick={() => setToggleMenu(!toggleMenu)}>
				<HiDots />
			</button>
			<div
				className='fixed hidden data-[open-state="true"]:block w-80 right-4 top-4 rounded-md bg-white py-6 px-4 shadow-[0_0_8px_0px_#999]'
				data-open-state={toggleMenu}
			>
				<div className='relative w-full flex flex-col gap-6 divide-y-2 tracking-wide'>
					<button className='w-fit flex gap-2 items-center font-medium text-red-600'>
						Signout{" "}
						<span className='text-lg'>
							<IoPower />
						</span>
					</button>
					<div className='w-full flex justify-between items-center pt-6 text-gray-500'>
						<div className='font-light'>Switch Theme</div>
						<div className='w-28 h-11 relative flex items-center justify-between px-2 border-2 rounded-md'>
							<span className='text-lg'>
								<ThemeIcon light={light} dark={dark} />
							</span>
							<select
								className='appearance-none absolute left-0 top-0 w-full h-full bg-transparent text-center font-medium text-black'
								onChange={onThemeSelect}
							>
								<option value='light'>Light</option>
								<option value='dark'>Dark</option>
								<option value='system'>System</option>
							</select>
							<span className='text-sm'>
								<HiDown />
							</span>
						</div>
					</div>
					<button
						className='absolute right-0 border-none text-lg'
						onClick={() => setToggleMenu(!toggleMenu)}
					>
						<IoClose />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MenuMobile;
