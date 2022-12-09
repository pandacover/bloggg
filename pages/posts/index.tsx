import Link from "next/link";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getEveryPosts } from "../../lib/supabase";

type postsProps = {
	data: postsType[] | null;
	error: string;
};

const Posts = ({ data, error }: postsProps) => {
	if (error) console.log(error);
	return (
		<Layout title='Explore'>
			<div className='w-[90vw] h-full mx-auto py-4'>
				<div className='text-[10vmin] w-full text-center'>
					Check out What&apos;s new
				</div>
				<ul className='flex flex-wrap mt-16 gap-2'>
					{data &&
						data.map((post) => (
							<li key={post.id} className='flex-[40%] pb-20 '>
								<Link
									href={`/posts/${post.id}`}
									className='text-black group block w-fit'
								>
									<div className='text-xs text-gray-600'>
										<Date dateString={post.created_at} />
									</div>
									<div className='group-hover:text-indigo-600 mt-4 text-[5vmin]'>
										{post.title}
									</div>
									<div className='flex items-center'>
										<span className='text-xs mr-4'>by</span>
										<span className='text-lg capitalize'>{post.author}</span>
									</div>
								</Link>
							</li>
						))}
				</ul>
			</div>
			<div className='w-[14rem] h-[60px] fixed bottom-10 left-[calc(50%-7rem)] rounded-md grid grid-cols-2 bg-black text-gray-300 text-sm divide-x-2 divide-gray-800 py-2'>
				<Link
					href='/posts/create'
					className='hover:text-white flex justify-center items-center'
				>
					Create
				</Link>
				<button className='hover:text-white flex items-center justify-center'>
					Logout
				</button>
			</div>
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const { data, error } = await getEveryPosts();
	return {
		props: {
			data: data || null,
			error: error?.message || "",
		},
	};
};

export default Posts;
