type inputProps = {
	id: string;
	name: string;
	type: string;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	placeholder: string;
	value?: any;
	onChange: any;
};

const Input = ({
	id,
	name,
	type,
	value = "",
	onChange,
	placeholder,
	className = "",
	disabled = false,
	required = false,
}: inputProps) => (
	<input
		id={id}
		type={type}
		name={name}
		required={required}
		disabled={disabled}
		placeholder={placeholder}
		value={value}
		onChange={(e: Events["Input"]) => onChange(e.target.value)}
		className={`px-4 py-3 text-xs outline-none ${className}`}
	/>
);

export default Input;
