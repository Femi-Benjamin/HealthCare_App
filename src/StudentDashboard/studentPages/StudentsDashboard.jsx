import { Link } from 'react-router-dom';
import { useState } from 'react';
import DashboardNav from '../../DashboardLayout/component/DashboardNav';
import StudentSidebar from '../../StudentDashboard/studentComponent/StudentSidebar';
import menu from '../../assets/menu.svg';
import iconedit from '../../assets/iconedit.svg';
import cancell from '../../assets/cancell.svg';
import supabase from '../../config/supabaseClient';
import useAuth from '../../hooks/useAuth';

const StudentsDashboard = () => {
	const [isMenuOpen1, setIsMenuOpen1] = useState(false);

	const toggleMenu1 = () => {
		setIsMenuOpen1(!isMenuOpen1);
	};

	const [showBookingForm, setShowBookingForm] = useState(false);

	const toggleBookingForm = () => {
		setShowBookingForm(!showBookingForm);
	};

	const BookingForm = () => {
		const { auth } = useAuth();
		const [date, setDate] = useState('');
		const [name, setName] = useState('');
		const [department, setDepartment] = useState('');
		const [reg, setReg] = useState('');
		const [year, setYear] = useState('');
		const [reason, setReason] = useState('');
		const [error, setError] = useState('');
		const [isSubmitting, setIsSubmitting] = useState(false);

		const handleSubmit = async (e) => {
			e.preventDefault();
			if (!date || !name || !department || !reg || !year || !reason) {
				setError('Please fill in all the fields correctly');
				return;
			}
	
			// Set the button text to "Sending" during form submission
			setIsSubmitting(true);
	
			try {
				const { data, error } = await supabase
					.from('appointments')
					.insert([{ date, name, department, reg, year, reason }]);
	
				if (error) {
					console.log(error.message);
					setError(error.message);
				}
	
				if (data) {
					console.log(data);
					setDate('');
					setName('');
					setDepartment('');
					setReg('');
					setYear('');
					setReason('');
					setError(null);
				}
			} catch (error) {
				console.error('Error submitting form:', error.message);
				setError('An error occurred while submitting the form');
			} finally {
				setIsSubmitting(false);
			}
		};

		return (
			<div className='p-5 mt-5 bg-white rounded-lg mb-7'>
				<h1 className='text-2xl font-bold text-[#00395B] mb-3  '>Book an Appointment</h1>
				{error && (
					<div className='text-center text-white h-[30px] w-[100%] rounded-lg bg-red-500'>{error}</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='date'
							className='block mb-1 font-medium text-gray-700'>
							Appointment Date:
						</label>
						<input
							type='text'
							id='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
							placeholder='Thursday, 17th Febuary, 2024'
							className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
							required
						/>
					</div>

					<div className='flex items-center justify-between'>
						<div className='pb-3'>
							<label
								htmlFor='name'
								className='block mb-1 font-medium text-gray-700'>
								Name:
							</label>
							<input
								type='text'
								className='w-full h-10 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500'
								id='name'
								placeholder='Your Name'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className='pb-3'>
							<label
								htmlFor='department'
								className='block mb-1 font-medium text-gray-700'>
								Department:
							</label>
							<input
								type='text'
								className='w-full h-10 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500'
								id='department'
								placeholder='Your Department'
								onChange={(e) => setDepartment(e.target.value)}
							/>
						</div>

						<div className='pb-3'>
							<label
								htmlFor='registrationNumber'
								className='block mb-1 font-medium text-gray-700'>
								Registration Number:
							</label>
							<input
								type='alphanumeric'
								name='registrationNumber'
								className='w-full h-10 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500'
								id='registrationNumber'
								placeholder='Registration Number'
								onChange={(e) => setReg(e.target.value)}
							/>
						</div>

						<div className='pb-3'>
							<label
								htmlFor='department'
								className='block mb-1 font-medium text-gray-700'>
								Year of Study:
							</label>
							<input
								type='number'
								className='w-full h-10 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500'
								id='yearofStudy'
								placeholder='Year of Study'
								onChange={(e) => setYear(e.target.value)}
							/>
						</div>
					</div>

					<div className='mb-4'>
						<label
							htmlFor='reason'
							className='block mb-1 font-medium text-gray-700'>
							Reason for Appointment:
						</label>
						<textarea
							id='reason'
							value={reason}
							onChange={(e) => setReason(e.target.value)}
							className='w-full h-20 px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500'
							required></textarea>
					</div>
					<div className='flex justify-end'>
						<button
							type='submit'
							disabled={isSubmitting}
							className='px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600'>
							{isSubmitting ? 'Sending...' : 'Confirm'}
						</button>
					</div>
				</form>
			</div>
		);
	};

	return (
		<>
			<div className='bg-neutral-100'>
				<DashboardNav />
				<div className='flex'>
					<div>
						<StudentSidebar />
					</div>

					<div className='p-10 mx-auto px-'>
						{/* <div>
							<CompleteProfile />
						</div> */}

						<div className='grid grid-cols-2 gap-10 mb-12 items-cent'>
							<div>
								<h1 className='text-4xl text-[#00395B] leading-[146.5%] font-extrabold'>Upcoming Programs</h1>
							</div>

							<div className='flex justify-end mb-'>
								<button
									onClick={toggleBookingForm}
									className='px-4 py-2 mt-4 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600'>
									Book an Appointment
								</button>
							</div>
						</div>

						<>{showBookingForm && <BookingForm />}</>

						{/* <div className='grid grid-cols-3 gap-5 mb-10'>
							<Card
								date='18 Nov 2023, 10:00 AM'
								title='Mental health awareness'
								description='Join us for an insightful workshop on mental health awareness. This educational session aims to provide...'
								imgSrc={Universitylogo}
								txt='Super Admin'
							/>
							<Card
								date='20 Nov 2023, 3:30 PM'
								title='Fitness challenge kickoff'
								description='Join us for a high-energy Fitness Challenge! This event is designed to promote physical activity and frien...'
								imgSrc={Universitylogo}
								txt='Jane Smith'
							/>
							<Card
								date='26 Nov 2023, 3:00 PM'
								title='Nutrition seminar'
								description='Embark on a journey to better health with our Nutrition Seminar! This insightful session is dedicated to u...'
								imgSrc={Universitylogo}
								txt='Andrew Lueger'
							/>
						</div> */}

						<div className='py-'>
							<div className='h-auto p-5 bg-white'>
								<h1 className='text-4xl font-bold leading-[146.5%] text-[#00395B] py-7'>Your information</h1>
								<div className='overflow-x-auto'>
									<table className='min-w-full border-collapse text-[#555] font-medium text-base'>
										<thead className='bg-neutral-100 text-[#777]'>
											<tr>
												<th className='px-4 py-2'>Reg. No</th>
												<th className='px-4 py-2'>Name</th>
												<th className='px-4 py-2'>Faculty</th>
												<th className='px-4 py-2'>Department</th>
												<th className='px-4 py-2'>Contact Information</th>
												<th className='px-4 py-2'>Status</th>
												<th className='px-4 py-2'>Actions</th>
											</tr>
										</thead>

										<tbody>
											<tr className='border-b'>
												<td className='px-4 py-2'>17/SC/MC/1284</td>
												<td className='px-4 py-2'>Chioma Amanda Nwosu</td>
												<td className='px-4 py-2'>Engineering</td>
												<td className='px-4 py-5'>Electrical</td>
												{/* <div className='bg-[#F8EFFA] rounded-2xl m-5'>
													<td className='px-4 py-2 text-[#9145BF]'>Check-up</td>
												</div> */}
												<td className='px-4 py-2'>chioma.nwosu@email.com</td>
												<div className='bg-[#E9F6F4] rounded-2xl mt-3'>
													<td className='px-4 py-2 text-[#5EB4A8]'>Completed</td>
												</div>

												<td
													className='px-4 py-2'
													onClick={toggleMenu1}>
													<img
														src={menu}
														alt=''
													/>
													{isMenuOpen1 && (
														<div className='left-0 p-2 bg-white border border-gray-200 rounded shadow-md'>
															<ul>
																<div className='flex gap-2'>
																	<img
																		src={iconedit}
																		alt=''
																	/>
																	<li>Reschedule</li>
																</div>
																<div className='flex gap-1 cursor-pointer'>
																	<img
																		src={cancell}
																		alt=''
																	/>
																	<li className='text-[#D4491C]'>Cancel</li>
																</div>
															</ul>
														</div>
													)}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentsDashboard;
