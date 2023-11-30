import { Link } from 'react-router-dom';
import pajamas_error from "../../assets/pajamas_error.svg";

const completeprofile = () => {
  return (
    <div>
      <Link to="/adminprofile">
        <div className="w-[988px] flex justify-between items-center bg-[#FFECEB] border border-[#E58C84] p-3 rounded-xl mb-8">
          <h1>Complete your profile</h1>
          <img src={pajamas_error} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default completeprofile;
