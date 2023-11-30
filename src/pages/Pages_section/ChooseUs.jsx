import Benefit_img from "../../assets/Benefit_img.svg";
import Circle_tick from "../../components/Circle_tick";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <>
      <div className="text-center items-center p-28 border-b">
        <div className="pb-24">
          <h1 className="text-5xl font-bold text-[#00395B] leading-[146.5%] pb-10">
            Why Choose Us
          </h1>
          <p className="text-lg font-normal leading-[156.5%] ">
            We offer a unified, efficient, and adaptable approach to <br />{" "}
            healthcare management.
          </p>
        </div>
        <div className="flex justify-around text-lg">
          <Link to="/adminsignin">
            <img src={Benefit_img} alt="" />
          </Link>
          <h1 className="text-left">
            Adapting to your unique needs, we foster collaboration <br /> among
            healthcare professionals and students, freeing <br /> providers to
            focus on patient care
            <div className="pt-10 pl-5">
              <Circle_tick />
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
