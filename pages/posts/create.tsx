import axios from "axios";
import { useState } from "react";
import Button from "../../components/button";
import Form from "../../components/form";
import Input from "../../components/input";
import Layout from "../../components/layout";
import Loader from "../../components/loader";

const Create = () => {
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);

	const onFormSubmit = (e: Events["Form"]) => {
		e.preventDefault();
		const data = { title, tags, content };
		setLoading(true);
		axios
			.post("/api/post", data)
			.then(() => {
				setTitle("");
				setTags("");
				setContent("");
			})
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	};
	return (
		<Layout title='Write Blog'>
			<Form
				className='bg-gray-200 shadow-lg shadow-gray-400 w-[80vw] h-[95vh] md:w-[60vw] top-[2.5vh] left-[calc(50%-40vw)] md:left-[calc(50%-30vw)] p-4 flex flex-col'
				onSubmit={onFormSubmit}
			>
				<div className='mb-4 flex justify-between h-12'>
					<div className='text-2xl'>Write your blog!</div>
					<div className='h-full pr-2 min-w-[103px]'>
						<Button
							type='submit'
							disabled={loading}
							className='text-sm font-semibold uppercase text-indigo-600 relative'
						>
							{loading ? (
								<Loader className='border-indigo-600 border-b-gray-200' />
							) : (
								"Click to Post"
							)}
						</Button>
					</div>
				</div>
				<div className='flex gap-2 flex-wrap mb-6'>
					<div className='flex-[2] flex flex-col gap-2'>
						<label htmlFor='title'>Title</label>
						<Input
							name='title'
							id='title'
							placeholder='Title'
							type='text'
							value={title}
							disabled={loading}
							className='bg-gray-300 focus-within:bg-gray-400/40'
							required={true}
							onChange={setTitle}
						/>
					</div>
					<div className='flex-1 flex flex-col gap-2'>
						<label htmlFor='tags'>Tags</label>
						<Input
							name='tags'
							id='tags'
							value={tags}
							placeholder='coding javascript twitter'
							type='text'
							disabled={loading}
							className='bg-gray-300 focus-within:bg-gray-400/40'
							required={true}
							onChange={setTags}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-2 flex-grow mb-2'>
					<label htmlFor='content'>Content</label>
					<textarea
						className='resize-none h-full p-2 text-xs outline-none bg-gray-300 focus-within:bg-gray-400/40'
						id='content'
						name='content'
						value={content}
						disabled={loading}
						required={true}
						placeholder='Content'
						onChange={(e) => setContent(e.currentTarget.value)}
					/>
				</div>
			</Form>
		</Layout>
	);
};

export default Create;
