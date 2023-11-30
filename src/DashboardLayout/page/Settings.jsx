import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="bg-neutral-100">
      <DashboardNav />
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="p-16">
          <div>
            <h1 className="text-[#00395B] text-4xl font-extrabold pb-10">Settings</h1>
          </div>

          <div className="flex gap-10 border-b-2 text-2xl text-[#BBB] leading-[146.5%] pb-2 mb-10 font-semibold">
            <Link to='/profilepage'>
              <div>
                <h1 className="hover:text-[#00395B]">Profile</h1>
              </div>
            </Link>

            <Link to='/passwordpage'>
              <div>
                <h1 className="hover:text-[#00395B]">Password</h1>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Settings