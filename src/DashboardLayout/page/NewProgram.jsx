import Card from "../component/Card";
import { Link } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";
import Universitylogo from "../../assets/Universitylogo.svg";

const NewProgram = () => {
  return (
    <div className="bg-neutral-100">
      <DashboardNav />
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="p-10 mx-auto">
          <div className="grid grid-cols-2 gap-10 mb-12 items-cent">
            <div>
              <h1 className="text-4xl text-[#00395B] leading-[146.5%] font-extrabold">
                Programs
              </h1>
            </div>

            <div className="flex justify-end mb-10">
              <Link to="/programs">
                <div className="flex gap-2 items-center text-[#005F97] text-base font-medium">
                  <div className="border border-[#005F97] rounded-full px-2">
                    &times;
                  </div>
                  <div>
                    <h1 className="">New program</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <Card
              date="18 Nov 2023, 10:00 AM"
              title="Mental health awareness"
              description="Join us for an insightful workshop on mental health awareness. This educational session aims to provide..."
              imgSrc={Universitylogo}
              txt="Super Admin"
            />
            <Card
              date="20 Nov 2023, 3:30 PM"
              title="Fitness challenge kickoff"
              description="Join us for a high-energy Fitness Challenge! This event is designed to promote physical activity and frien..."
              imgSrc={Universitylogo}
              txt="Jane Smith"
            />
            <Card
              date="26 Nov 2023, 3:00 PM"
              title="Nutrition seminar"
              description="Embark on a journey to better health with our Nutrition Seminar! This insightful session is dedicated to u..."
              imgSrc={Universitylogo}
              txt="Andrew Lueger"
            />
            <Card
              date="15 Dec 2023, 3:30 PM"
              title="Mental health seminar"
              description="Dive into the important conversation about mental health at our Mental Health Awareness Talk. We'll have..."
              imgSrc={Universitylogo}
              txt="Jason Ivan"
            />
            <Card
              date="01 Dec 2023, 11:00 AM"
              title="Creative writing workshop"
              description="Unleash your creativity at our Creative Writing Workshop! This interactive session is perfect for aspiring writ...."
              imgSrc={Universitylogo}
              txt="Administrator"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProgram;
