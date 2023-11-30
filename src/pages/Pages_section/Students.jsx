import { CustomButton } from "../../static/button";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="bg-[#EEF6FB] border-b">
        <div className="text-center items-center p-28">
          <h1 className="text-5xl font-bold text-[#00395B] leading-[146.5%] pb-10">
            Your students deserve the best
          </h1>
          <p className="text-lg font-normal leading-[156.5%] pb-10">
            Gain access to powerful tools and join us in transforming healthcare
            management on your campus!
          </p>

          <div className="text-[#fff]">
            <CustomButton
              width="200px"
              content="Get Started"
              onClick={handleRegisterClick}
              backgroundColor="#005F97"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
