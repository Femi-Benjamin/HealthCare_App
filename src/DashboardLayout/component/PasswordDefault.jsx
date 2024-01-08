import { useState } from "react";

const PasswordDefault = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const togglePasswordVisibility = (passwordType) => {
    switch (passwordType) {
      case "current":
        setShowCurrentPassword((prevState) => !prevState);
        break;
      case "new":
        setShowNewPassword((prevState) => !prevState);
        break;
      case "confirm":
        setShowConfirmNewPassword((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const inputType = (passwordType) => {
    switch (passwordType) {
      case "current":
        return showCurrentPassword ? "text" : "password";
      case "new":
        return showNewPassword ? "text" : "password";
      case "confirm":
        return showConfirmNewPassword ? "text" : "password";
      default:
        return "password";
    }
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Default password</h1>

        <p className="mb-4 text-base font-medium">
          This password is what your staff members will use to log in to this
          platform
        </p>
      </div>

      <form className="space-y-10">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label htmlFor="currentpassword" className="text-lg font-medium">
              Default Password:
            </label>
            <div className="flex justify-between items-center border border-[#CCC] rounded-lg w-96">
              <div>
                <input
                  className="h-12 p-2 bg-transparent outline-none w-80 focus:border-blue-500"
                  type={inputType("current")}
                  value={"healthcare1234"}
                />
              </div>
              <div
                className="p-2 cursor-pointer text-base font-medium text-[#004C79]"
                onClick={() => togglePasswordVisibility("current")}
              >
                <h1>{showCurrentPassword ? "Hide" : "Show"}</h1>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-[#005F97] text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PasswordDefault;
