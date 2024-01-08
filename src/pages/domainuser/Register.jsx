import nurse from '../../assets/nurse.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../static/button';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const navigate = useNavigate();
	const { auth, setAuth } = useAuth();

	const handleSigninClick = () => {
		navigate('/signin');
	};

	const [showPassword, setShowPassword] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [logo, setLogo] = useState(null);
	// const [passwordError, setPasswordError] = useState("");

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleLogoChange = (e) => {
		// Handle file input change and update the state
		const file = e.target.files[0];
		setLogo(file);
	};

	console.log(auth);
	const handleSubmit = (e) => {
		e.preventDefault();
		setAuth({ name, email, phone, password, logo });
		navigate('/');
	};

	return (
		<>
			<div className='flex bg-neutral-100'>
				<div className='relative'>
					{' '}
					{/* Added a relative positioning */}
					<img
						className='h-screen'
						src={nurse}
						alt=''
					/>
					<div className='absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
						{/* Overlay text */}
						<h2 className='mb-4 text-2xl font-bold text-white'>
							Through efficient healthcare management, you can better support your students&apos; diverse health
							needs and foster a healthier, more vibrant campus
						</h2>
					</div>
				</div>

				<div className='pt-10 mx-auto'>
					<div className='items-center px-12 text-center pb-9'>
						<h1 className='text-[#00395B] text-4xl font-bold leading-[146.5%] pb-2'>Create an Account</h1>
						<p className='text-base font-medium leading-[146.5%]'>
							Sign up and join us in transforming university healthcare
						</p>
					</div>

					<form onSubmit={handleSubmit}>
						<div>
							{/* LOGO UPLOAD */}
							<label htmlFor='logoUpload'>University Logo:</label>
							<div className='pt-5 pb-10'>
								<input
									type='file'
									id='logoUpload'
									name='logo'
									accept='image/*'
									onChange={handleLogoChange}
								/>
								{/* <input type="submit" value="Upload" /> */}
							</div>
							<label htmlFor='universityName'>University Name:</label> <br />
							<div className='pt-3 pb-6'>
								<input
									className='w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
									placeholder='e.g., GreaterHeights University '
									type='text'
									id='universityName'
									name='universityName'
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</div>
							<label htmlFor='universityEmail'>University Email Address:</label> <br />
							<div className='pt-3 pb-6'>
								<input
									className='w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
									placeholder='e.g., info@greaterheights@edu.ng'
									type='email'
									id='universityEmail'
									name='universityEmail'
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div>
							<label htmlFor='universityPhone'>University Phone Number:</label> <br />
							<div className='pt-3 pb-6'>
								<input
									className='w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
									placeholder='e.g (123) 456-789-0000'
									type='tel'
									id='universityPhone'
									name='universityPhone'
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
							</div>
							<label htmlFor='password'>Password:</label>
							<div className='flex justify-between items-center border border-[#CCC] rounded-lg mt-3 mb-3'>
								<div>
									<input
										className='h-12 p-2 bg-transparent outline-none w-96'
										placeholder='Input password'
										type={showPassword ? 'text' : 'password'}
										id='password'
										name='password'
										value={password}
										minLength={10} // Enforce minimum length
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</div>
								<div
									className='p-2 cursor-pointer text-base font-medium text-[#004C79]'
									onClick={handlePasswordVisibility}>
									<h1>{showPassword ? 'Hide' : 'Show'}</h1>
								</div>
							</div>
							{/* {passwordError && (
              <div className="mt-2 text-red-500">
                <p>{passwordError}</p>
              </div>
            )} */}
						</div>
						<h1 className='pb-9'>Password should include an uppercase, lowercase, and digits</h1>
						<div className='text-[#FFF] pb-8'>
							<CustomButton
								width='100%'
								content='Get Started'
								backgroundColor='#005F97'
							/>
						</div>
					</form>
					<div>
						<h1 className='text-base text-center cursor-pointer'>
							Already have an account?{' '}
							<span
								onClick={handleSigninClick}
								className='text-[#0072B5]'>
								Login
							</span>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
