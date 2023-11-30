import nurse from "../../assets/nurse.svg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from "../../static/button";

const Register = () => {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/signin');
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (value) => {
    const regex = {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      digits: /[0-9]/,
      // specialChars: /[!@#$%^&*()_+{}[\]:;<>,.?/~`]/,
    };

    const errors = [];

    if (!regex.uppercase.test(value)) {
      errors.push('Password must include at least one uppercase letter.');
    }
    if (!regex.lowercase.test(value)) {
      errors.push('Password must include at least one lowercase letter.');
    }
    if (!regex.digits.test(value)) {
      errors.push('Password must include at least one digit.');
    }
    // if (!regex.specialChars.test(value)) {
    //   errors.push('Password must include at least one special character.');
    // }

    // Validation logic goes here:
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }

    setPasswordError(errors.join('\n'));
  };
  return (
    <>
      <div className="flex bg-neutral-100">
        <div className="relative"> {/* Added a relative positioning */}
          <img className="h-screen" src={nurse} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            {/* Overlay text */}
            <h2 className="text-white text-2xl font-bold mb-4">
              Through efficient healthcare management, you can better support your students&apos; diverse health needs and foster a healthier, more vibrant campus
            </h2>
          </div>
        </div>

        <div className="mx-auto pt-10">
          <div className="px-12 text-center items-center pb-12">
            <h1 className="text-[#00395B] text-4xl font-bold leading-[146.5%] pb-2">Create an Account</h1>
            <p className="text-base font-medium leading-[146.5%]">Sign up and join us in transforming university healthcare</p>
          </div>

          <div>
            {/* LOGO UPLOAD */}
            <label htmlFor="logoUpload">University Logo:</label>

            <div className="pt-5 pb-10">
              <form action="/upload" method="post" encType="multipart/form-data">
                <input type="file" id="logoUpload" name="logo" accept="image/*" />
                {/* <input type="submit" value="Upload" /> */}
              </form>
            </div>

            <label htmlFor="universityName">University Name:</label> <br />
            <div className="pt-3 pb-6">
              <input
                className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                placeholder="e.g., GreaterHeights University "
                type="text" id="universityName" name="universityName"
              />
            </div>

            <label htmlFor="universityEmail">University Email Address:</label> <br />
            <div className="pt-3 pb-6">
              <input
                className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                placeholder="e.g., info@greaterheights@edu.ng"
                type="email" id="universityEmail" name="universityEmail"
              />
            </div>

            <label htmlFor="universityPhone">University Phone Number:</label> <br />
            <div className="pt-3 pb-6">
              <input
                className="w-[516px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                placeholder="e.g (123) 456-789-0000"
                type="tel" id="universityPhone" name="universityPhone"
              />
            </div>

            <label htmlFor="password">Password:</label>
            <div className="flex justify-between items-center border border-[#CCC] rounded-lg mt-3 mb-3">
              <div>
                <input
                  className="p-2 bg-transparent outline-none h-12 w-96"
                  placeholder="Input password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  minLength={10} // Enforce minimum length
                />
              </div>
              <div className="p-2 cursor-pointer text-base font-medium text-[#004C79]" onClick={handlePasswordVisibility}>
                <h1>{showPassword ? 'Hide' : 'Show'}</h1>
              </div>
            </div>
            {passwordError && (
              <div className="text-red-500 mt-2">
                <p>{passwordError}</p>
              </div>
            )}
          </div>
          <h1 className="pb-9">Password should include an uppercase, lowercase, and digits</h1>
          <div className="text-[#FFF] pb-10">
            <CustomButton
              width="516px"
              content="Create account"
              backgroundColor="#005F97"
              type="submit"
            />
          </div>
          <div>
            <h1 className="text-center text-base cursor-pointer">Already have an account?
              {" "}
              <span
                onClick={handleSigninClick}
                className="text-[#0072B5]">Login
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
