import Link from "next/link";
import Date from "../../components/date";
import { Layout, Navbar } from "../../components/UI";
import { getEveryPosts } from "../../lib/supabase";

type postsProps = {
	data: postsType[] | null;
	error: string;
};

const Posts = ({ data, error }: postsProps) => {
	if (error) console.log(error);
	return (
		<Layout title='Explore'>
			<Navbar />
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
