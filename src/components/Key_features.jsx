import date from "../assets/date.svg"
import person from "../assets/person.svg"
import chart from "../assets/chart.svg"

const Key_features = () => {
    return (
        <div className="flex justify-between">
        
            <div className="w-[352px] h-[245px] border border-[#E6E6E6] p-8 text-left rounded-lg">
                <img className="pb-5" src={date} alt="" />
                <h1 className="text-2xl font-bold pb-5 leading-[146.5%]">Appointment scheduling</h1>
                <p className="text-base font-medium leading-[156.5%]">Simplify scheduling with university healthcare providers.</p>
            </div>
           
            <div className="w-[352px] h-[245px] border border-[#E6E6E6] p-8 text-left rounded-lg">
                <img className="pb-5" src={person} alt="" />
                <h1 className="text-2xl font-bold pb-5 leading-[146.5%]">Patient profiles</h1>
                <p className="text-base font-medium leading-[156.5%]">Simplify scheduling with university healthcare providers.</p>
            </div>
          
            <div className="w-[352px] h-[245px] border border-[#E6E6E6] p-8 text-left rounded-lg">
                <img className="pb-5" src={chart} alt="" />
                <h1 className="text-2xl font-bold pb-5 leading-[146.5%]">Program management</h1>
                <p className="text-base font-medium leading-[156.5%]">Simplify scheduling with university healthcare providers.</p>
            </div>
        </div>
    )
}

export default Key_features