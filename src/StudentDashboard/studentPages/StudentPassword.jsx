import { Link } from "react-router-dom";
import { useState } from "react";
import DashboardNav from "../../DashboardLayout/component/DashboardNav";
import StudentSidebar from "../studentComponent/StudentSidebar";

const StudentPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmNewPassword = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const handleSaveChanges = () => {
    if (newPassword === confirmNewPassword) {
      console.log("Password changed successfully!");
    } else {
      console.log("New passwords do not match.");
    }
  };

  return (
    <div className="bg-neutral-100">
      <DashboardNav />

      <div className="flex">
        <div>
          <StudentSidebar />
        </div>
        <div className="p-16">
          <div>
            <h1 className="text-[#00395B] text-4xl font-extrabold pb-10">
              Settings
            </h1>
          </div>

          <div className="flex gap-10 border-b-2 text-2xl text-[#BBB] leading-[146.5%] pb-2 mb-20 font-semibold">
            <Link to="/studentprofile">
              <div>
                <h1 className="hover:text-[#00395B]">Profile</h1>
              </div>
            </Link>

            <Link to="/studentpassword">
              <div>
                <h1 className="hover:text-[#00395B]">Password</h1>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="flex mb-6">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="text-lg font-medium"
                >
                  Current Password:
                </label>
                <div className="relative mr-4">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="border border-[#CCC] rounded-md p-2 w-[316px] outline-none"
                    placeholder="Current Password"
                  />
                  <button
                    className="absolute top-2 right-2"
                    onClick={toggleShowCurrentPassword}
                  >
                    {showCurrentPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex mb-6">
              <div>
                <label htmlFor="newPassword" className="text-lg font-medium">
                  New Password:
                </label>
                <div className="relative mr-4">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border border-[#CCC] rounded-md p-2 w-[316px] outline-none"
                    placeholder="New Password"
                  />
                  <button
                    className="absolute top-2 right-2"
                    onClick={toggleShowNewPassword}
                  >
                    {showNewPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex mb-6">
              <div>
                <label
                  htmlFor="confirmNewPassword"
                  className="text-lg font-medium"
                >
                  Confirm New Password:
                </label>
                <div className="relative mr-4">
                  <input
                    type={showConfirmNewPassword ? "text" : "password"}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="border border-[#CCC] rounded-md p-2 w-[316px] outline-none"
                    placeholder="Confirm New Password"
                  />
                  <button
                    className="absolute top-2 right-2"
                    onClick={toggleShowConfirmNewPassword}
                  >
                    {showConfirmNewPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSaveChanges}
            className="bg-[#005F97] text-white font-medium py-2 px-4 rounded-md transition duration-300 mt-5"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPassword;
