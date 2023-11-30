import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../../static/button";
import nurse from "../../../assets/nurse.svg";

const AdminSignin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    // Logic to validate password and update errors
    const errors = [];

    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }

    setPasswordError(errors.join("\n"));
  };

  return (
    <>
      <div className="flex bg-neutral-100">
        <div className="relative">
          {" "}
          {/* Added a relative positioning */}
          <img className="h-screen" src={nurse} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            {/* Overlay text */}
            <h2 className="text-white text-2xl font-bold mb-4">
              Through efficient healthcare management, you can better support
              your students&apos; diverse health needs and foster a healthier,
              more vibrant campus
            </h2>
          </div>
        </div>

        <div className="mx-auto pt-10">
          <div className="px-12 text-center items-center pb-12">
            <h1 className="text-[#00395B] text-4xl font-bold leading-[146.5%] pb-2">
              Sign in to your account
            </h1>
            <p className="text-base font-medium leading-[146.5%]">
              Please change your password upon login. If you don&apos;t have a{" "}
              <br /> password, please contact your Super Admin to get one.
            </p>
          </div>

          <div>
            <label htmlFor="email address">Email Address:</label>
            <div className="pt-3 pb-6">
              <input
                className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                placeholder="john.doe@example.com"
                type="email"
                id="email"
                name="email"
              />
            </div>

            <label htmlFor="password">Password:</label>
            <div className="flex justify-between items-center border border-[#CCC] rounded-lg mt-3 mb-10">
              <div>
                <input
                  className="p-2 bg-transparent outline-none h-12 w-96"
                  placeholder="Input password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  minLength={10} // Enforce minimum length
                />
              </div>
              <div
                className="p-2 cursor-pointer text-base font-medium text-[#004C79]"
                onClick={handlePasswordVisibility}
              >
                <h1>{showPassword ? "Hide" : "Show"}</h1>
              </div>
            </div>

            {passwordError && (
              <div className="text-red-500 mt-2">
                <p>{passwordError}</p>
              </div>
            )}
          </div>

          <Link to="/dashboarrd">
            <div className="text-[#FFF] pb-10">
              <CustomButton
                width="516px"
                content="Login"
                backgroundColor="#005F97"
                type="submit"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSignin;
