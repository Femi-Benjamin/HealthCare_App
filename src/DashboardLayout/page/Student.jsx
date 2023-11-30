import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";

const Student = () => {
  return (
    <div className="bg-neutral-100">
      <DashboardNav />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        
        <div>
          <h1>Student</h1>
        </div>
      </div>
    </div>
  );
};

export default Student;
