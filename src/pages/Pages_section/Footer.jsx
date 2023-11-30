import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleSigninClick = () => {
    navigate("/signin");
  };
  
  return (
    <div>
      <div>
        <div className="flex justify-around bg-[#00395B] p-20 text-white">
          <div>
            <h1 className="text-3xl font-semibold leading-[146.5%] pb-5">
              Streamline healthcare management <br /> for universities
            </h1>
            <p className="text-base font-medium leading-[156.5%]">
              Join a community of universities that have embraced <br /> the
              future of healthcare
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-semibold leading-[146.5%] pb-5">
              Quick links
            </h1>
            <ul className="text-base font-medium leading-[156.5%]">
              <li className="cursor-pointer pb-2">Benefits</li>
              <li className="cursor-pointer pb-2">Features</li>
              <li className="cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h1 className="text-3xl font-semibold leading-[146.5%] pb-5">
              Get Started
            </h1>
            <ul className="text-base font-medium leading-[156.5%]">
              <li onClick={handleRegisterClick} className="cursor-pointer pb-2">
                Create Account
              </li>
              <li onClick={handleSigninClick} className="cursor-pointer ">
                Sign In
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
