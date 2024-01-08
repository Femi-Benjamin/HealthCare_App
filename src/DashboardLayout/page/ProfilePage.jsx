import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../static/button";
import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";
import useAuth from "../../hooks/useAuth";

const ProfilePage = () => {
  const { auth } = useAuth();

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


          <div>
            <div className="grid grid-cols-2 gap-10 mb-6">
            <div>
              <label htmlFor="universityName"> Name:</label>
              <div className="pt-3 pb-6">
                <input
                  className="w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g., GreaterHeights University "
                  type="text"
                  id="universityName"
                  name="universityName"
                  value={auth.name}
                />
              </div>
            </div>

            <div>
              <label htmlFor="universityEmail"> Email Address:</label>
              <div className="pt-3 pb-6">
                <input
                  className="w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g., info@greaterheights@edu.ng"
                  type="email"
                  id="universityEmail"
                  name="universityEmail"
                  value={auth.email}
                />
              </div>
            </div>

            <div>
              <label htmlFor="universityPhone"> Phone Number:</label>{" "}
              <br />
              <div className="pt-3 pb-6">
                <input
                  className="w-[316px] h-12 bg-transparent border border-[#CCC] rounded-lg outline-none p-2"
                  placeholder="e.g (123) 456-789-0000"
                  type="tel"
                  id="universityPhone"
                  name="universityPhone"
                  value={auth.phone}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
