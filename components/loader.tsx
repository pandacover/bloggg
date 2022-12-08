type loaderProps = {
	className?: string;
	onPage?: boolean;
};

const Loader = ({ className = "", onPage = false }: loaderProps) => (
	<div
		className={`absolute left-0 top-0 w-full h-full flex items-center justify-center ${
			onPage && "bg-gray-200 z-[999]"
		}`}
	>
		<div
			className={`w-6 h-6 rounded-full border-4 border-dotted animate-spin ${className}`}
		/>
	</div>
);

export default Loader;
