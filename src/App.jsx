import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/domainuser/Register";
import Signin from "./pages/domainuser/Signin";
import Dashboardd from "./DashboardLayout/page/Dashboardd.jsx";
import Programs from "./DashboardLayout/page/Programs.jsx";
import Staff from "./DashboardLayout/page/Staff.jsx";
import Student from "./DashboardLayout/page/Student.jsx";
// import Settings from "./DashboardLayout/page/Settings.jsx"
import ProfilePage from "./DashboardLayout/page/ProfilePage.jsx";
import PasswordPage from "./DashboardLayout/page/PasswordPage.jsx";
import NewProgram from "./DashboardLayout/page/NewProgram.jsx";
import StaffMembers from "./DashboardLayout/page/StaffMembers.jsx";
////////////////////////////////////////////////////////////////
import Dashboarrd from "./AdminDashboard/pages/Dashboarrd.jsx";
import Programm from "./AdminDashboard/pages/Programm.jsx";
import Patients from "./AdminDashboard/pages/Patients.jsx";
// import Setting from "./AdminDashboard/pages/Setting.jsx"
import AdminProfile from "./AdminDashboard/pages/AdminProfile.jsx";
import AdminPassword from "./AdminDashboard/pages/AdminPassword.jsx";
import AdminSignin from "./AdminDashboard/pages/userdomain/AdminSignin.jsx";
////////////////////////////////////////////////////////////////
import StudentsDashboard from "./StudentDashboard/studentPages/StudentsDashboard.jsx";
import StudentProfile from "./StudentDashboard/studentPages/StudentProfile.jsx";
import StudentPassword from "./StudentDashboard/studentPages/StudentPassword.jsx";
import NewProgramm from "./AdminDashboard/pages/NewProgramm.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboardd" element={<Dashboardd />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/student" element={<Student />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/passwordpage" element={<PasswordPage />} />
          <Route path="/newprogram" element={<NewProgram />} />
          <Route path="/staffmembers" element={<StaffMembers />} />
          <Route path="/newprogramm" element={<NewProgramm />} />
          {/* ///////////////////////////////////////////////// */}
          <Route path="/dashboarrd" element={<Dashboarrd />} />
          <Route path="/programm" element={<Programm />} />
          <Route path="/patients" element={<Patients />} />

          {/* <Route path="/setting" element={<Setting />} /> */}
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/adminpassword" element={<AdminPassword />} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          {/* ///////////////////////////////////////////////// */}
          <Route path="/studentdashboard" element={<StudentsDashboard />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/studentpassword" element={<StudentPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
