import Universitylogo from "../../assets/Universitylogo.svg";
import radix from "../../assets/radix.svg";
import { Link } from "react-router-dom";
import materialnote from "../../assets/materialnote.svg";
// import people from "../../assets/people.svg";
import setting from "../../assets/setting.svg";
import logout from "../../assets/logout.svg";

const StudentSidebar = () => {
  return (
    <div className="w-80 h-[920p h-screen bg-[#FFF] text-[#999999]">
      <Link to="/">
        <div className="p-5 flex justify-center items-center ">
          <img src={Universitylogo} alt="" />
        </div>
      </Link>

      <ul className="flex-1 px-14 p-10  border-b">
        <Link to="/studentdashboard" activeClassName="active-link">
          <div className="flex px-10 gap-2 hover:bg-[#97d0f1] hover:text-[#00395B] hover:rounded-xl">
            <img src={radix} alt="" />
            <li className="py-5 cursor-pointer">Dashboard</li>
          </div>
        </Link>

        <Link to="/newprogram">
          <div className="flex px-10 gap-3 hover:bg-[#97d0f1] hover:text-[#00395B] hover:rounded-xl">
            <img src={materialnote} alt="" />
            <li className="py-5  cursor-pointer">Programs</li>
          </div>
        </Link>

        {/* <Link to="#">
          <div className="flex px-10 gap-3 hover:bg-[#97d0f1] hover:text-[#00395B] hover:rounded-xl">
            <img src={people} alt="" />
            <li className="py-5 cursor-pointer">Patients</li>
          </div>
        </Link> */}

        <Link to="/studentprofile">
          <div className="flex px-10 gap-3 hover:bg-[#97d0f1] hover:text-[#00395B] hover:rounded-xl">
            <img src={setting} alt="" />
            <li className="py-5 cursor-pointer">Settings</li>
          </div>
        </Link>
      </ul>

      <div className="py-16 px-24">
        <button className="text-[#FF5722] border border-red-500 rounded-md p-3 px-5 flex gap-2  items-center  hover:bg-red-600 hover:text-white ">
          <img src={logout} alt="" />
          <h1>Log Out</h1>
        </button>
      </div>
    </div>
  );
};

export default StudentSidebar;
