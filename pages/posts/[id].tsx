import Date from "../../components/date";
import Layout from "../../components/layout";
import { getEveryPosts, getOnePost } from "../../lib/supabase";

type postProps = {
	data: postsType;
	error: string;
};

const Post = ({ data, error }: postProps) => {
	if (error) console.error(error);

	return (
		<Layout title='POST'>
			<div className='w-[90vw] md:w-[80vw] h-screen mx-auto py-4 relative'>
				<div className='my-10 text-center'>
					<div className='text-sm'>
						<Date dateString={data.created_at} />
					</div>
					<div className='rounded-sm my-4 text-[12vmin] max-w-full w-fit px-4 mx-auto post-title'>
						{data.title}
					</div>
					<div className='pb-2 border-b-2 border-black w-fit max-w-full mx-auto'>
						{data.author}
					</div>
				</div>
				<div className='font-light text-lg mt-20'>{data.content}</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps = async (context: any) => {
	const { id } = context.params;
	const { data, error } = await getOnePost(id);

	return {
		props: {
			data: data ? data[0] : null,
			error: error?.message || "",
		},
	};
};

export default Post;
