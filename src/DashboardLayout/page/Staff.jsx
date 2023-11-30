import { useState } from "react";
import { CustomButton } from "../../static/button";
import { Link } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";
import iconpeople from "../../assets/iconpeople.svg";

const Staff = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const copyLinkToClipboard = () => {
    // Logic to copy the link to the web app
    // Web app Link here
    const linkToCopy = "yourWebAppLink";
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const sendInvitation = () => {
    // Logic to send the invitation email
    console.log(`Invitation sent to ${emailAddress}`);
    // Close the modal after sending the email
    closeModal();
  };

  return (
    <div className="bg-neutral-100">
      <DashboardNav />
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="items-center text-center mx-auto my-auto pb-24">
          <img className="mx-auto pb-10" src={iconpeople} alt="" />
          <div>
            <h1 className="text-4xl text-[#00395B] leading-[146.5%] font-bold pb-3">
              You haven&apos;t added any staff member yet
            </h1>
            <p className="text-base text-[#777] font-medium leading-[146.5%] pb-6">
              Enhance your healthcare services by inviting staff members to
              manage <br /> appointments, programs, and provide quality care.
            </p>
          </div>
          {/* Button to open modal */}
          <div className="text-[#FFF]">
            <CustomButton
              onClick={openModal}
              width="248px"
              content="Invite staff members"
              backgroundColor="#005F97"
              type="button"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-50 bg-white p-8 w-auto rounded-lg shadow-lg">
            <span
              onClick={closeModal}
              className="text-[#004C79] cursor-pointer flex justify-end mb-3"
            >
              &times;
            </span>
            <Link to="/staffmembers">
              <h2 className="text-2xl font-bold mb-6 text-[#00395B] leading-[146.5%]">
                Invite Members
              </h2>
            </Link>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-[50px] border border-[#CCC] rounded px-3 py-2 mb-8 outline-none"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <button
                onClick={sendInvitation}
                className="h-[50px] bg-[#005F97] text-white px-5 rounded"
              >
                Send
              </button>
            </div>
            <button
              onClick={copyLinkToClipboard}
              className="text-base leading-normal text-[#005F97] px-4 py-2 rounded border border-[#005F97] hover:bg-gray-100 w-[355px] mb-5"
            >
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
