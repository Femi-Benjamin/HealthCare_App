import { CustomButton } from "../../static/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardNav from "../../DashboardLayout/component/DashboardNav";
import Sidebarr from "../components/Sidebarr";

const AdminProfile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [staffId, setStaffId] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // You can perform additional checks/validation on the file if needed
        setSelectedImage(file);
    };

    const handleUpload = () => {
        // Code to handle the image upload
        // For example, you might use a library like axios to upload the image to a server
        console.log("Uploading image:", selectedImage);
        // Replace this with your image upload logic
    };

    return (
        <div className="bg-neutral-100">
            <DashboardNav />
            <div className="flex">
                <div>
                    <Sidebarr />
                </div>

                <div className="p-16">
                    <div>
                        <h1 className="text-[#00395B] text-4xl font-extrabold pb-10">
                            Settings
                        </h1>
                    </div>

                    <div className="flex gap-10 border-b-2 text-2xl text-[#BBB] leading-[146.5%] pb-2 mb-10 font-semibold">
                        <Link to="/adminprofile">
                            <div>
                                <h1 className="hover:text-[#00395B]">Profile</h1>
                            </div>
                        </Link>

                        <Link to="/adminpassword">
                            <div>
                                <h1 className="hover:text-[#00395B]">Password</h1>
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center gap-10 mb-20">
                        <h1 className=" border  border-[#005F97] text-base font-medium  text-[#005F97] leading-normal rounded-xl p-3">
                            Profile Photo
                        </h1>

                        <div className="flex flex-co gap-10 items-center">
                            <label className="w-32 h-32 flex items-center justify-center border border-[#00395B] rounded-full cursor-pointer">
                                {/* Display a default profile picture or selected image */}
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
                                    className=" border  border-[#005F97] hover:bg-blue-700 hover:text-white text-base font-medium  text-[#005F97] leading-normal rounded-xl px-7 py-3 focus:outline-none focus:shadow-outline"
                                >
                                    Change Profile photo
                                </button>
                            )}
                        </div>
                    </div>
                    {/* ////////////////////////////////// */}
                    <div className="flex flex-col gap-6 mb-6">
                        <div className="flex gap-6">
                            <div className="w-1/4">
                                <label htmlFor="title" className="text-[#333] font-medium">Title</label>
                                <div>
                                    <select className="border border-[#CCC] rounded-md p-2 w-[200px]" name="title" id="title outline-none" value={title} onChange={(e) => setTitle(e.target.value)}>
                                        <option value="1"></option>
                                        <option value="2">Dr</option>
                                        <option value="3">Mr</option>
                                        <option value="4">Mrs</option>
                                        <option value="5">Miss</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-1/4">
                                <label
                                    htmlFor="firstName"
                                    className="text-[#333] font-medium"
                                >
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="border border-[#CCC] rounded-md p-2 outline-none"
                                />
                            </div>

                            <div className="w-1/4">
                                <label
                                    htmlFor="lastName"
                                    className="text-[#333] font-medium"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="border border-[#CCC] rounded-md p-2 outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-1/4">
                                <label htmlFor="staffId" className="text-[#333] font-medium">
                                    Staff ID
                                </label>
                                <input
                                    id="staffId"
                                    type="text"
                                    value={staffId}
                                    onChange={(e) => setStaffId(e.target.value)}
                                    className="border border-[#CCC] rounded-md p-2 outline-none"
                                />
                            </div>
                            <div className="w-1/4">
                                <label htmlFor="email" className="text-[#333] font-medium">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border border-[#CCC] rounded-md p-2 outline-none"
                                />
                            </div>
                            <div className="w-1/4">
                                <label htmlFor="phone" className="text-[#333] font-medium">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="border border-[#CCC] rounded-md p-2 outline-none"
                                />
                            </div>
                        </div>
                        <div className="text-[#FFF] text-base leading-[146.5%] mt-5">
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
        </div>
    );
};

export default AdminProfile;
