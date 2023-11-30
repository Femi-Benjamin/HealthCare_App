import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../static/button";
import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can perform additional checks/validation on the file if needed
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Here, you can write code to handle the image upload
    // For example, you might use a library like axios to upload the image to a server
    console.log("Uploading image:", selectedImage);
    // Replace this with your image upload logic
  };

  return (
    <div className="bg-neutral-100">
      <DashboardNav />
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="p-16">
          <div>
            <h1 className="text-[#00395B] text-4xl font-extrabold pb-10">
              Settings
            </h1>
          </div>

          <div className="flex gap-10 border-b-2 text-2xl text-[#BBB] leading-[146.5%] pb-2 mb-10 font-semibold">
            <Link to="/profilepage">
              <div>
                <h1 className="hover:text-[#00395B]">Profile</h1>
              </div>
            </Link>

            <Link to="/passwordpage">
              <div>
                <h1 className="hover:text-[#00395B]">Password</h1>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-10 mb-20">
            <h1 className="text-base font-medium text-[#005F97] leading-normal border border-[#005F97] rounded-xl p-3">
              Change Profile picture
            </h1>

            <div className="flex flex-co gap-10 items-center">
              <label className="w-32 h-32 flex items-center justify-center border border-[#00395B] rounded-full cursor-pointer">
                {/* Display a default profile picture or the selected image */}
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Profile"
                    className="w-32 h-32 rounded-full"
                  />
                ) : (
                  <span className="text-2xl text-[#00395B]">+</span>
                )}

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              {selectedImage && (
                <button
                  onClick={handleUpload}
                  className="border border-[#005F97] hover:bg-blue-700 hover:text-white text-base font-medium text-[#005F97] leading-normal rounded-xl px-7 py-3 focus:outline-none focus:shadow-outline"
                >
                  Upload
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-6">
            <div>
              <label htmlFor="universityName">University Name:</label>
              <div className="pt-3 pb-6">
                <input
                  className="w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g., GreaterHeights University "
                  type="text"
                  id="universityName"
                  name="universityName"
                />
              </div>
            </div>

            <div>
              <label htmlFor="universityEmail">University Email Address:</label>
              <div className="pt-3 pb-6">
                <input
                  className="w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g., info@greaterheights@edu.ng"
                  type="email"
                  id="universityEmail"
                  name="universityEmail"
                />
              </div>
            </div>

            <div>
              <label htmlFor="universityPhone">University Phone Number:</label>{" "}
              <br />
              <div className="pt-3 pb-6">
                <input
                  className="w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g (123) 456-789-0000"
                  type="tel"
                  id="universityPhone"
                  name="universityPhone"
                />
              </div>
            </div>
          </div>
          <div className="text-[#FFF] text-base leading-[146.5%]">
            <CustomButton
              width="160px"
              content="Save changes"
              backgroundColor="#005F97"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
