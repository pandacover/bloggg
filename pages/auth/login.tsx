import { useState } from "react";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Input from "../../components/input";
import Form from "../../components/form";
import Link from "next/link";
import Loader from "../../components/loader";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const onFormSubmit = (e: Events["Form"]) => {
		e.preventDefault();
		setLoading(true);
		axios
			.post("/api/auth", {
				email,
				password,
				type: "LOGIN",
			})
			.then((res) => router.replace("/"))
			.catch((err) => console.error(err.message))
			.finally(() => setLoading(false));
	};

	return (
		<Layout title='Signin'>
			<Form
				onSubmit={onFormSubmit}
				className='bg-gray-200 shadow-lg shadow-gray-400 rounded-sm p-4 top-[calc(50%-219.5px)] w-[26rem] md:w-[30rem] left-[calc(50%-13rem)] md:left-[calc(50%-15rem)]'
			>
				<div className='mb-6'>
					<div className='text-3xl mb-2'>Welcome Back</div>
					<div className='text-xs'>Login to your account</div>
				</div>
				<div className='flex flex-col gap-2 mb-6'>
					<label htmlFor='mail' className='text-sm'>
						Email
					</label>
					<Input
						id='mail'
						name='mail'
						type='email'
						required={true}
						disabled={loading}
						value={email}
						onChange={setEmail}
						placeholder='john@doe'
						className='bg-gray-300 focus-within:bg-gray-300/50 rounded-sm'
					/>
					<div className='text-[11px] text-gray-800'>Email is required *</div>
				</div>
				<div className='flex flex-col gap-2 mb-6'>
					<label htmlFor='pass' className='text-sm'>
						Password
					</label>
					<Input
						id='pass'
						name='pass'
						type='password'
						required={true}
						disabled={loading}
						value={password}
						onChange={setPassword}
						placeholder='password'
						className='bg-gray-300 focus-within:bg-gray-300/50 rounded-sm'
					/>
					<div className='text-[11px] text-gray-800'>
						Password is required *
					</div>
				</div>
				<div className='h-11 mb-6'>
					<Button
						type='submit'
						disabled={loading}
						className='bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 disabled:bg-gray-300 relative'
					>
						{loading ? (
							<Loader className='border-indigo-600 border-b-gray-300' />
						) : (
							"Sign In"
						)}
					</Button>
				</div>
				<div className='text-xs text-center'>
					Don{"'"}t have an account? <Link href='/auth/login'>Sign Up Now</Link>
				</div>
			</Form>
		</Layout>
	);
};

export default Login;
