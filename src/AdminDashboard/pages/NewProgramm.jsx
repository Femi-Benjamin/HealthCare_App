import { Link } from "react-router-dom";
import { useState } from "react";
import { CustomButton } from "../../static/button";
import file from "../../assets/file.svg";
import Sidebarr from "../components/Sidebarr";
import DashboardNav from "../../DashboardLayout/component/DashboardNav";

const NewProgramm = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  };

  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <div className="bg-neutral-100">
      <DashboardNav />

      <div className="flex">
        <div>
          <Sidebarr />
        </div>

        <div className="items-center text-center mx-auto my-auto pb-24">
          <img className="mx-auto pb-10" src={file} alt="" />
          <div>
            <h1 className="text-4xl text-[#00395B] leading-[146.5%] font-bold pb-3">
              You haven&apos;t created any program yet
            </h1>
            <p className="text-base text-[#777] font-medium leading-[146.5%] pb-6">
              Programs provide a structured approach to address specific health{" "}
              <br /> needs and promote a healthier campus community.
            </p>
          </div>
          {/* Button to open first modal */}
          <div className="text-[#FFF]">
            <CustomButton
              width="248px"
              content="Create a program"
              backgroundColor="#005F97"
              type="button"
              onClick={openFirstModal}
            />
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////
          /////////////////////First Modal Structure//////////////////////
          //////////////////////////////////////////////////////////////// 
      */}
      {isFirstModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-8 w-[435px] h-[586px] rounded-10">
            {/* CLOSE MODAL BUTTON */}
            <div className="flex justify-end mb-5">
              <button
                onClick={closeFirstModal}
                className="text-[#004C79] px-4 py-2"
              >
                &times;
              </button>
            </div>
            <h2 className="text-[28px] font-bold mb-5 text-[#00395B]">
              Create a new program
            </h2>
            {/* Input fields for title, description, date, and time */}
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              placeholder="e.g., Mindfulness Meditation Session"
              className="w-full border rounded px-3 py-2 mb-5"
            />

            <label htmlFor="description">Description:</label>
            <textarea
              placeholder="Describe your program in a few sentences"
              className="w-full border rounded px-3 py-2 mb-5 h-24 resize-none"
            ></textarea>

            {/* Add date and time selectors here */}
            <div className="flex justify-between mb-6">
              {/* Date selector */}
              {/* <label htmlFor="date">Start Date:</label> <br /> */}
              <input
                type="date"
                placeholder="Date"
                className="w-[48%] border rounded px-3 py-2"
              />

              {/* Time selector */}
              {/* <label htmlFor="time">Time:</label> */}
              <input
                type="time"
                placeholder="Time"
                className="w-[48%] border rounded px-3 py-2"
              />
            </div>

            {/* CLOSE MODAL BUTTON */}
            <div className="text-[#FFF] flex justify-center">
              <CustomButton
                width="355px"
                content="Next"
                backgroundColor="#005F97"
                type="button"
                onClick={openSecondModal}
              />
            </div>
          </div>
        </div>
      )}
      {/* /////////////////////////////////////////////////////////////////
          /////////////////////Second Modal Structure//////////////////////
          //////////////////////////////////////////////////////////////// 
      */}
      {isSecondModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-8 w-[435px] h-[586p rounded-10">
            {/* CLOSE MODAL BUTTON */}
            <div className="flex justify-end mb-5">
              <button
                onClick={closeSecondModal}
                className="text-[#004C79] px-4 py-2"
              >
                &times;
              </button>
            </div>
            <h2 className="text-[28px] font-bold mb-5 text-[#00395B]">
              Almost done!
            </h2>
            {/* Additional input fields */}
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              placeholder="Enter the program's location"
              className="w-full border rounded px-3 py-2 mb-5"
            />

            <label htmlFor="programType">Program Type:</label>
            <input
              type="text"
              placeholder="Select a program type"
              className="w-full border rounded px-3 py-2 mb-5"
            />

            <label htmlFor="targetAudience">Target Audience:</label>
            <input
              type="text"
              placeholder="Select or type your target audience"
              className="w-full border rounded px-3 py-2 mb-5"
            />

            <label htmlFor="activities">Activities:</label>
            <textarea
              placeholder="List activities that would be carried out during this program."
              className="w-full border rounded px-3 py-2 mb-5 h-24 resize-none"
            ></textarea>

            {/* CLOSE MODAL BUTTON */}
            <Link to="/newprogram">
              <div className="text-[#FFF] flex justify-center">
                <CustomButton
                  width="355px"
                  content="Create program"
                  backgroundColor="#005F97"
                  type="button"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewProgramm;
