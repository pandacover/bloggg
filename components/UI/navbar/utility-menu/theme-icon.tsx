import {
	HiMoon,
	HiOutlineSun as HiSun,
	HiComputerDesktop as HiDesktop,
} from "react-icons/hi2";

const ThemeIcon = ({ light, dark }: { [key: string]: boolean }) => {
	return light ? <HiSun /> : dark ? <HiMoon /> : <HiDesktop />;
};

export default ThemeIcon;
