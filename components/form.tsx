type formProps = {
	className?: string;
	children: React.ReactNode;
	onSubmit: (e: Events["Form"]) => void;
};

const Form = ({ className = "", children, onSubmit }: formProps) => {
	return (
		<form className={`absolute block ${className}`} onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default Form;
