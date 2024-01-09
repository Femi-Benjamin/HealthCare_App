import nurse from "../../assets/nurse.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../static/button";
import useAuth from "../../hooks/useAuth";

const MoreInfo = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleSigninClick = () => {
    navigate("/signin");
  };

  const [genotype, setGenotype] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [disabled, setDisabled] = useState("");
  const [alergies, setAlergies] = useState("");
  const [bmi, setBmi] = useState("");


  console.log(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth((prevAuth) => ({
      ...prevAuth,
      genotype,
      bloodgroup,
      disabled,
      alergies,
      bmi,
    }));
    navigate("/studentdashboard");
  };

  return (
    <>
      <div className="flex bg-neutral-100">
        <div className="relative">
          {" "}
          {/* Added a relative positioning */}
          <img className="h-screen" src={nurse} alt="" />
          <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {/* Overlay text */}
            <h2 className="mb-4 text-2xl font-bold text-white">
              Through efficient healthcare management, you can better support
              your students&apos; diverse health needs and foster a healthier,
              more vibrant campus
            </h2>
          </div>
        </div>

        <div className="pt-10 mx-auto">
          <div className="items-center px-12 text-center pb-9">
            <h1 className="text-[#00395B] text-4xl font-bold leading-[146.5%] pb-2">
              Let&apos;s know more about you
            </h1>
            <p className="text-base font-medium leading-[146.5%]">
              Give more information about yourself
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="universityName">Genotype:</label> <br />
              <div className="pt-3 pb-6">
                <input
                  className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g., AA "
                  type="text"
                  id="universityName"
                  name="universityName"
                  onChange={(e) => {
                    setGenotype(e.target.value);
                  }}
                />
              </div>
              <label htmlFor="universityEmail">Blood group:</label>{" "}
              <br />
              <div className="pt-3 pb-6">
                <input
                  className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g., O+"
                  type="text"
                  id="universityEmail"
                  name="universityEmail"
                  onChange={(e) => {
                    setBloodgroup(e.target.value);
                  }}
                />
              </div>
              <label htmlFor="universityEmail">Disabled:</label>{" "}
              <br />
              <div className="pt-3 pb-6">
                <input
                  className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g., Yes or No"
                  type="text"
                  id="universityEmail"
                  name="universityEmail"
                  onChange={(e) => {
                    setDisabled(e.target.value);
                  }}
                />
              </div>
              <label htmlFor="universityPhone">Allergies:</label>{" "}
              <br />
              <div className="pt-3 pb-6">
                <input
                  className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g Lactose intolerant"
                  type="text"
                  id="universityPhone"
                  name="universityPhone"
                  onChange={(e) => {
                    setAlergies(e.target.value);
                  }}
                />
              </div>
              <label htmlFor="universityPhone">BMI:</label>{" "}
              <br />
              <div className="pt-3 pb-6">
                <input
                  className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g 80kg"
                  type="text"
                  id="universityPhone"
                  name="universityPhone"
                  onChange={(e) => {
                    setBmi(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="text-[#FFF] pb-8">
              <CustomButton
                width="100%"
                content="Continue"
                backgroundColor="#005F97"
              />
            </div>
          </form>
          <div>
            <h1 className="text-base text-center cursor-pointer">
              Already have an account?{" "}
              <span onClick={handleSigninClick} className="text-[#0072B5]">
                Login
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
