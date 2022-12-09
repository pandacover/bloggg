import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const BreadCrums = () => {
	const [paths, setPaths] = useState<string[]>([]);
	const router = useRouter();

	useEffect(() => {
		const pathsTemp = router.asPath
			.split("?")[0]
			.split("/")
			.filter((path) => path.length);
		setPaths(["home", ...pathsTemp]);
	}, [router]);

	return (
		<>
			{paths.map((path, idx) => {
				if (idx === paths.length - 1)
					return (
						<div className='text-black' key={`crums-${idx}`}>
							{path}
						</div>
					);
				return (
					<div key={`crums-${idx}`} className='flex gap-3 mr-3 items-center'>
						{path}
						<span>
							<FiChevronRight />
						</span>
					</div>
				);
			})}
		</>
	);
};

export default BreadCrums;
