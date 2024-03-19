import { CustomButton } from '../../static/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardLayout/component/DashboardNav';
import StudentSidebar from '../studentComponent/StudentSidebar';
import useAuth from '../../hooks/useAuth';

const StudentProfile = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const { auth } = useAuth();
	console.log(auth)

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};

	const handleUpload = () => {
		console.log('Uploading image:', selectedImage);
	};

	return (
		<div className=' bg-neutral-100'>
			<DashboardNav />
			<div className='flex'>
				<div>
					<StudentSidebar />
				</div>
				<div className='h-auto px-16 py-5'>
					<div>
						<h1 className='text-[#00395B] text-4xl font-extrabold pb-10'>Settings</h1>
					</div>

					<div className='flex gap-10 border-b-2 text-2xl text-[#BBB] leading-[146.5%] pb-2 mb-10 font-semibold'>
						<Link to='/studentprofile'>
							<div>
								<h1 className='hover:text-[#00395B]'>Profile</h1>
							</div>
						</Link>

						<Link to='/studentpassword'>
							<div>
								<h1 className='hover:text-[#00395B]'>Password</h1>
							</div>
						</Link>
					</div>

					<div className='flex items-center gap-10 mb-12'>
						<h1 className=' border  border-[#005F97] text-base font-medium  text-[#005F97] leading-normal rounded-xl p-3'>
							Profile Photo
						</h1>

						<div className='flex items-center gap-10 flex-co'>
							<label className='w-32 h-32 flex items-center justify-center border border-[#00395B] rounded-full cursor-pointer'>
								{/* Display a default profile picture or selected image */}
								{selectedImage ? (
									<img
										src={auth.logo}
										alt='Profile'
										className='w-32 h-32 rounded-full'
									/>
								) : (
									<span className='text-2xl text-[#00395B]'>+</span>
								)}

								<input
									type='file'
									accept='image/*'
									className='hidden'
									onChange={handleImageChange}
								/>
							</label>
							{selectedImage && (
								<button
									onClick={handleUpload}
									className=' border  border-[#005F97] hover:bg-blue-700 hover:text-white text-base font-medium  text-[#005F97] leading-normal rounded-xl px-7 py-3 focus:outline-none focus:shadow-outline'>
									Update photo
								</button>
							)}
						</div>
					</div>

					<div>
						<div className='grid grid-cols-2 gap-10 mb-6'>
							<div>
								<label htmlFor='universityName'> Name:</label>
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g., GreaterHeights University '
										type='text'
										id='universityName'
										name='universityName'
										value="Gidado Olayiwola"
									/>
								</div>
							</div>

							<div>
								<label htmlFor='universityEmail'>University Email Address:</label>
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g., info@greaterheights@edu.ng'
										type='email'
										id='universityEmail'
										name='universityEmail'
										value="gidado@gmail.com"
									/>
								</div>
							</div>

							<div>
								<label htmlFor='universityPhone'>Matrix Number:</label> <br />
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g (123) 456-789-0000'
										type='tel'
										id='universityPhone'
										name='universityPhone'
										value="IFT/16/0112"
									/>
								</div>
							</div>

							<div>
								<label htmlFor='universityPhone'>Department:</label> <br />
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g (123) 456-789-0000'
										type='tel'
										id='universityPhone'
										name='universityPhone'
										value="Information Technology"
									/>
								</div>
							</div>

							<div>
								<label htmlFor='universityPhone'>Genotype:</label> <br />
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g (123) 456-789-0000'
										type='tel'
										id='universityPhone'
										name='universityPhone'
										value={auth.genotype}
									/>
								</div>
							</div>

							<div>
								<label htmlFor='universityPhone'>Blood Group:</label> <br />
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g (123) 456-789-0000'
										type='tel'
										id='universityPhone'
										name='universityPhone'
										value={auth.bloodgroup}
									/>
								</div>
							</div>

							<div>
								<label htmlFor='universityPhone'>Disabled:</label> <br />
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g (123) 456-789-0000'
										type='tel'
										id='universityPhone'
										name='universityPhone'
										value={auth.disabled}
									/>
								</div>
							</div>

							<div>
								<label htmlFor='universityPhone'>Allergies:</label> <br />
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g (123) 456-789-0000'
										type='tel'
										id='universityPhone'
										name='universityPhone'
										value={auth.alergies}
									/>
								</div>
							</div>
							
							<div>
								<label htmlFor='universityPhone'>BMI:</label> <br />
								<div className='pt-3 pb-6'>
									<input
										className='w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2'
										placeholder='e.g (123) 456-789-0000'
										type='tel'
										id='universityPhone'
										name='universityPhone'
										value={auth.bmi}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* <div className='text-[#FFF] text-base leading-[146.5%]'>
						<CustomButton
							width='160px'
							content='Save changes'
							backgroundColor='#005F97'
							type='button'
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default StudentProfile;
