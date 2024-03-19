import uni from "../../assets/uni.svg"
import arrowdown from "../../assets/arrowdown.svg"
import bell from "../../assets/bell.svg"
import useAuth from "../../hooks/useAuth"

const DashboardNav = () => {
  const { auth } = useAuth();
  return (
    <div className="bg-[#FFF] p-1 flex justify-end">
      <div className="flex items-center gap-5 p-6 ">
        <img src={bell} alt="" />
        <div className="p-2 rounded-lg bg-neutral-100">
          <p className="block">{auth.name}</p>
        <p className="block">{auth.email}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav