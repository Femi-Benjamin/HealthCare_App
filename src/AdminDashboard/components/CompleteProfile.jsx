import pajamas_error from '../../assets/pajamas_error.svg';

const completeprofile = ({ message }) => {
	return (
		<div>
			<div className='w-[988px] flex justify-between items-center bg-red-500 border border-[#E58C84] p-3 rounded-xl mb-8 text-white'>
				<h1>{message}</h1>
				<img
					src={pajamas_error}
					alt=''
				/>
			</div>
		</div>
	);
};

export default completeprofile;
