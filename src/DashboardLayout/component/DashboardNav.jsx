import uni from "../../assets/uni.svg"
import arrowdown from "../../assets/arrowdown.svg"
import bell from "../../assets/bell.svg"

const DashboardNav = () => {
  return (
    <div className="bg-[#FFF] h-16 flex justify-end">
      <div className=" flex items-center p-6 gap-5">
        <img src={bell} alt="" />
        <div className="w-24 h-11 bg-neutral-100 flex justify-between p-2">
          <img src={uni} alt="" />
          <img src={arrowdown} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DashboardNav