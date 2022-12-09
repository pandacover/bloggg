import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Layout, Button, Input, Form, Loader } from "../../components/UI";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const onFormSubmit = (e: Events["Form"]) => {
		e.preventDefault();
		setLoading(true);
		axios
			.post("/api/auth", {
				email,
				password,
				type: "REGISTER",
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.error(err.message))
			.finally(() => setLoading(false));
	};

	return (
		<Layout title='Signup'>
			<Form
				onSubmit={onFormSubmit}
				className='bg-gray-200 shadow-lg shadow-gray-400 rounded-sm p-4 top-[calc(50%-219.5px)] w-[24rem] md:w-[30rem] left-[calc(50%-12rem)] md:left-[calc(50%-15rem)]'
			>
				<div className='mb-4 md:mb-6'>
					<div className='text-2xl md:text-3xl mb-2'>Get Started</div>
					<div className='text-[11px] md:text-xs'>Create a new account</div>
				</div>
				<div className='flex flex-col gap-2 mb-4 md:mb-6'>
					<label htmlFor='mail' className='text-xs md:text-sm'>
						Email
					</label>
					<Input
						id='mail'
						name='mail'
						type='email'
						value={email}
						required={true}
						disabled={loading}
						onChange={setEmail}
						placeholder='john@doe'
						className='bg-gray-300 focus-within:bg-gray-300/50 rounded-sm'
					/>
					<div className='text-[11px] text-gray-800'>Email is required *</div>
				</div>
				<div className='flex flex-col gap-2 mb-4 md:mb-6'>
					<label htmlFor='pass' className='text-xs md:text-sm'>
						Password
					</label>
					<Input
						id='pass'
						name='pass'
						type='password'
						required={true}
						value={password}
						disabled={loading}
						onChange={setPassword}
						placeholder='password'
						className='bg-gray-300 focus-within:bg-gray-300/50 rounded-sm'
					/>
					<div className='text-[11px] text-gray-800'>
						Password is required *
					</div>
				</div>
				<div className='h-11 mb-4 md:mb-6'>
					<Button
						type='submit'
						disabled={loading}
						className='bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 disabled:bg-gray-300 relative'
					>
						{loading ? (
							<Loader className='border-indigo-600 border-b-gray-300' />
						) : (
							"Sign Up"
						)}
					</Button>
				</div>
				<div className='text-xs text-center'>
					Have an account? <Link href='/auth/login'>Sign In Now</Link>
				</div>
			</Form>
		</Layout>
	);
};

export default Signup;
