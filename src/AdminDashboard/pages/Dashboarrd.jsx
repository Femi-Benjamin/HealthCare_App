import { useState } from 'react';
import DashboardNav from '../../DashboardLayout/component/DashboardNav';
import Sidebarr from '../components/Sidebarr';
import StatisticCard from '../../DashboardLayout/component/StatisticCard';
import calendar from '../../assets/calendar.svg';
import barchart from '../../assets/barchart.svg';
import two from '../../assets/two.svg';
import menu from '../../assets/menu.svg';
import iconedit from '../../assets/iconedit.svg';
import cancell from '../../assets/cancell.svg';
import CompleteProfile from '../components/CompleteProfile';
import supabase from '../../config/supabaseClient';
import { useEffect } from 'react';

const Dashboarrd = () => {
	const [isMenuOpen1, setIsMenuOpen1] = useState(false);
	const [error, setError] = useState(null);
	const [appointments, setAppointments] = useState(null);

	useEffect(() => {
		const fetchAppointments = async () => {
			const { data, error } = await supabase.from('appointments').select();

			if (error) {
				setError('Could not fetch appointments');
				setAppointments(null);
				console.log(error);
			}

			if (data) {
				setAppointments(data);
				setError(null);
				console.log(appointments);
			}
		};

		fetchAppointments();
	}, []);

	const toggleMenu1 = () => {
		setIsMenuOpen1(!isMenuOpen1);
	};

	return (
		<>
			<div className='bg-neutral-100'>
				<DashboardNav />

				<div className='flex'>
					<div>
						<Sidebarr />
					</div>

					<div className='px-3 pt-10 mx-auto'>
						<div>{error && <CompleteProfile message={error} />}</div>

						<div>
							<h1 className='text-4xl font-bold leading-[146.5%] text-[#00395B] pb-7'>Dashboard</h1>
						</div>

						<div className='grid grid-cols-4 gap-10 pb-10'>
							<StatisticCard
								imgSrc={calendar}
								paragraphText='18'
								headingText='Appointments'
							/>
							<StatisticCard
								imgSrc={barchart}
								paragraphText='25'
								headingText='Programs'
							/>
							<StatisticCard
								imgSrc={two}
								paragraphText='20'
								headingText='Patients'
							/>
						</div>

						<div className=''>
							{appointments && (
								<div className='h-[500px] overflow-y-auto p-5 rounded-lg bg-white'>
									<h1 className='text-4xl font-bold leading-[146.5%] text-[#00395B] py-7'>My Appointments</h1>
									<div className='overflow-x-auto'>
										<table className='min-w-full border-collapse text-[#555] font-medium text-base'>
											<thead className='bg-neutral-100 text-[#777]'>
												<tr>
													<th className='px-4 py-2'>ID</th>
													<th className='px-4 py-2'>Name</th>
													<th className='px-4 py-2'>Date/time</th>
													<th className='px-4 py-2'>Reason</th>
													<th className='px-4 py-2'>Contact Information</th>
													<th className='px-4 py-2'>Status</th>
													<th className='px-4 py-2'>Actions</th>
												</tr>
											</thead>

											<tbody>
												{appointments &&
													appointments.map((appointment) => (
														<tr
															key={appointment.id}
															className='border-b'>
															<td className='px-4 py-2'>{appointment.reg}</td>
															<td className='px-4 py-2'>{appointment.name}</td>
															<td className='px-4 py-2'>{appointment.date}</td>
															<td className='px-4 py-2 text-[#9145BF]'>{appointment.reason}</td>
															<td className='px-4 py-2'>{appointment.department}</td>
															<td className='px-4 py-2 text-[#5EB4A8]'>{appointment.year}</td>
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
													))}
											</tbody>
										</table>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboarrd;
