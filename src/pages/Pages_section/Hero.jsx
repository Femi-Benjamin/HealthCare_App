import { CustomButton } from "../../static/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import dashboard from "../../assets/dashboard.png";
import Navbar from "../../layouts/Navbar";

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="border-b">
          <div className="p-24 text-center">
            <h1 className="text-5xl font-bold text-[#00395B] pb-7 leading-[146.5%]">
              Provide the <span className="text-[#FF6F61]">Right Care</span> for
              your students <br /> health needs
            </h1>
            <p className="text-lg font-normal pb-7">
              Simplify healthcare management for your university and streamline
              operations, <br /> enhance patient care, and adapt to your
              institution&apos;s unique needs.
            </p>
            <div className="text-[#fff] pb-3">
              <CustomButton
                width="200px"
                content="Get Started"
                onClick={handleRegisterClick}
                backgroundColor="#005F97"
              />
            </div>
          </div>

          <Link to="/dashboardd">
            <div className="flex justify-center p-24">
              <img src={dashboard} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
