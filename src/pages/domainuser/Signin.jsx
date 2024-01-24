import nurse from '../../assets/nurse.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	const navigate = useNavigate();

	const handleRegisterClick = () => {
		navigate('/register');
	};

	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [userType, setUserType] = useState('doctor');
	const [email, setEmail] = useState('');

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handlePasswordChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
		validatePassword(newPassword);
	};

	const validatePassword = (password) => {
		const errors = [];

		if (password.length < 6) {
			errors.push('Password should be at least 6 characters long');
		}

		setPasswordError(errors.join('\n'));
	};

	const handleUserTypeChange = (e) => {
		setUserType(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleLogin = () => {
		// Validate email and other necessary validations
		if (email && password && !passwordError) {
			// Logic for checking user type and navigating accordingly
			if (userType === 'doctor') {
				navigate('/dashboarrd');
			} else if (userType === 'student') {
				navigate('/studentdashboard');
			}
		} else {
			// Show error message for incomplete login details
			alert('Please fill in all required fields');
		}
	};


	return (
		<>
			<div className='flex bg-neutral-100'>
				<div className='md:block hidden'>
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
				</div>

				<div className='pt-10 mx-auto'>
					<div className='items-center px-12 pb-12 text-center'>
						<h1 className='text-[#00395B] text-4xl font-bold leading-[146.5%] pb-2'>Welcome back!</h1>
						<p className='text-base font-medium leading-[146.5%]'>
							Sign in to continue your health management journey
						</p>
					</div>

					<div>
						<label htmlFor='universityEmail'>Email Address:</label>
						<div className='pt-3 pb-6'>
							<input
								className='w-full h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
								placeholder='e.g., info@greaterheights@edu.ng'
								type='email'
								id='universityEmail'
								name='universityEmail'
								value={email}
								onChange={handleEmailChange}
							/>
						</div>


						<label htmlFor='userType'>Select Role:</label>
						<div className='pt-3 pb-6'>
							<select
								className='w-full h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
								id='userType'
								name='userType'
								value={userType}
								onChange={handleUserTypeChange}>
								<option value='doctor'>Doctor</option>
								<option value='student'>Student</option>
							</select>
						</div>

						<label htmlFor='password'>Password:</label>
						<div className='flex justify-between items-center border border-[#CCC] rounded-lg mt-3 mb-10'>
							<div>
								<input
									className='h-12 p-2 bg-transparent outline-none w-96'
									placeholder='Input password'
									type={showPassword ? 'text' : 'password'}
									id='password'
									name='password'
									value={password}
									onChange={handlePasswordChange}
									minLength={10} // Enforce minimum length
								/>
							</div>
							<div
								className='p-2 cursor-pointer text-base font-medium text-[#004C79]'
								onClick={handlePasswordVisibility}>
								<h1>{showPassword ? 'Hide' : 'Show'}</h1>
							</div>
						</div>

						{passwordError && (
							<div className='mt-2 text-red-500'>
								<p>{passwordError}</p>
							</div>
						)}
					</div>

					<button
						onClick={handleLogin}
						className={`w-[516px] p-2 rounded-md bg-[#005F97] text-white mb-5 ${!email || !password || passwordError ? 'cursor-not-allowed' : 'cursor-pointer'}`}
						disabled={!email || !password || passwordError}
					>
						Login
					</button>
					<div>
						<h1 className='text-base text-center cursor-pointer'>
							{' '}
							Don&apos;t have an account?{' '}
							<span
								onClick={handleRegisterClick}
								className='text-[#0072B5]'>
								Register
							</span>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
