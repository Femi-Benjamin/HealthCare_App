import { CustomButton } from '../static/button'
import { useNavigate } from 'react-router-dom';
import Universitylogo from "../assets/Universitylogo.svg"

const Navbar = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };
    const handleSigninClick = () => {
        navigate('/signin');
    };
    return (
        <>
            <div>
                <div className="bg-transparent shadow px-14 text-black">
                    {/* MAIN FLEX */}
                    <div className="p-5 flex justify-between items-center">
                        <div>
                            <img src={Universitylogo} alt="" />
                        </div>

                        {/* SECOND FLEX */}
                        <div>
                            <ul className='flex gap-10 text-lg'>
                                <li className='cursor-pointer '>Benefits</li>
                                <li className='cursor-pointer '>Features</li>
                                <li className='cursor-pointer '>FAQs</li>
                            </ul>
                        </div>

                        <div className='flex gap-5'>
                            <div className="border border-[#005F97] rounded-md text text-[#005F97]">
                                <CustomButton
                                    width="92px"
                                    content="Sign In"
                                    onClick={handleSigninClick}
                                    backgroundColor=""
                                />
                            </div>
                            <div className='text-[#fff]'>
                                <CustomButton
                                    width="157px"
                                    content="Create account"
                                    onClick={handleRegisterClick}
                                    backgroundColor="#005F97"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar