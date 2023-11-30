import { useState } from "react";

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSaveChanges = () => {
    // Add logic to handle password change
    if (newPassword === confirmNewPassword) {
      // Perform password change logic here
      console.log("Password changed successfully!");
    } else {
      console.log("New passwords do not match.");
    }
  };

  const handlePasswordVisibility = (field) => {
    switch (field) {
      case "currentPassword":
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case "newPassword":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirmNewPassword":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-16">
      {/* <h1 className="text-2xl font-semibold mb-4">Change Password</h1> */}
      <form className="space-y-10">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label htmlFor="currentPassword" className="text-lg font-medium">
              Current Password:
            </label>
            <div className="flex justify-between items-center border border-[#CCC] rounded-lg w-96">
              <div>
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="p-2 bg-transparent outline-none h-12 w-80 focus:border-blue-500"
                />
              </div>
              <div
                className="p-2 cursor-pointer text-base font-medium text-[#004C79]"
                onClick={() => handlePasswordVisibility("currentPassword")}
              >
                <h1>{showCurrentPassword ? "Hide" : "Show"}</h1>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="text-lg font-medium">
              New Password:
            </label>
            <div className="flex justify-between items-center border border-[#CCC] rounded-lg w-96">
              <div>
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="p-2 bg-transparent outline-none h-12 w-80 focus:border-blue-500"
                />
              </div>
              <div
                className="p-2 cursor-pointer text-base font-medium text-[#004C79]"
                onClick={() => handlePasswordVisibility("newPassword")}
              >
                <h1>{showNewPassword ? "Hide" : "Show"}</h1>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="confirmNewPassword" className="text-lg font-medium">
              Confirm New Password:
            </label>
            <div className="flex justify-between items-center border border-[#CCC] rounded-lg w-96">
              <div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="p-2 bg-transparent outline-none h-12 w-80 focus:border-blue-500"
                />
              </div>
              <div
                className="p-2 cursor-pointer text-base font-medium text-[#004C79]"
                onClick={() => handlePasswordVisibility("confirmNewPassword")}
              >
                <h1>{showConfirmPassword ? "Hide" : "Show"}</h1>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSaveChanges}
          className="bg-[#005F97] text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;
