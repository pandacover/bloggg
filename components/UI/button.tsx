type buttonProps = {
	className?: string;
	children: React.ReactNode;
	onClick?: (e: Events["Button"]) => void;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
};

const Button = ({
	children,
	onClick = () => {},
	className = "",
	type = "button",
	disabled = false,
}: buttonProps) => (
	<button
		className={`${className} flex w-full h-full items-center justify-center`}
		onClick={onClick}
		type={type}
		disabled={disabled}
	>
		{children}
	</button>
);

export default Button;
