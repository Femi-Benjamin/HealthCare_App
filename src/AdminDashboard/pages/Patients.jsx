import DashboardNav from "../../DashboardLayout/component/DashboardNav"
import Sidebarr from "../components/Sidebarr"
import { useState } from "react";
import menu from "../../assets/menu.svg";
import iconedit from "../../assets/iconedit.svg";
import cancell from "../../assets/cancell.svg";


const Patients = () => {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };
  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
  };
  const toggleMenu4 = () => {
    setIsMenuOpen4(!isMenuOpen4);
  };
  const toggleMenu5 = () => {
    setIsMenuOpen5(!isMenuOpen5);
  };

  return (

    <div className="bg-neutral-100">
      <DashboardNav />

      <div className="flex">
        <div>
          <Sidebarr />
        </div>


        <div className="mx-auto">
          <div className="py-20">
            <div className="bg-white p-5 h-auto">
              <h1 className="text-4xl font-bold leading-[146.5%] text-[#00395B] py-7">
                Appointments Overview
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-[#555] font-medium text-base">
                  <thead className="bg-neutral-100 text-[#777]">
                    <tr>
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Date/time</th>
                      <th className="px-4 py-2">Reason</th>
                      <th className="px-4 py-2">Provider</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2">1284</td>
                      <td className="px-4 py-2">Chioma Nwosu</td>
                      <td className="px-4 py-2">16 Nov, 23 - 2:30 PM</td>
                      <div className="bg-[#F8EFFA] rounded-2xl m-5">
                        <td className="px-4 py-2 text-[#9145BF]">Check-up</td>
                      </div>
                      <td className="px-4 py-2">Dr. Ibrahim Adekunle</td>
                      <div className="bg-[#E9F6F4] rounded-2xl">
                        <td className="px-4 py-2 text-[#5EB4A8]">
                          Completed
                        </td>
                      </div>

                      <td className="px-4 py-2" onClick={toggleMenu1}>
                        <img src={menu} alt="" />
                        {isMenuOpen1 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2">
                                <img src={iconedit} alt="" />
                                <li>Edit</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer">
                                <img src={cancell} alt="" />
                                <li className="text-[#D4491C]">Cancel</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">3565</td>
                      <td className="px-4 py-2">Ahmed Yusuf</td>
                      <td className="px-4 py-2">16 Nov, 23 - 10:00 AM</td>
                      <div className="bg-[#F1F9F8] rounded-2xl m-5">
                        <td className="px-4 py-2 text-[#5EB4A8]">Malaria</td>
                      </div>
                      <td className="px-4 py-2">Dr. Jennifer Bakare</td>
                      <div className="bg-[#FAFFEB] rounded-2xl">
                        <td className="px-4 py-2 text-[#DBBE57]">Ongoing</td>
                      </div>

                      <td className="px-4 py-2" onClick={toggleMenu2}>
                        <img src={menu} alt="" />
                        {isMenuOpen2 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2">
                                <img src={iconedit} alt="" />
                                <li>Edit</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer">
                                <img src={cancell} alt="" />
                                <li className="text-[#D4491C]">Cancel</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">3469</td>
                      <td className="px-4 py-2">Amina Lawal</td>
                      <td className="px-4 py-2">20 Nov, 23 - 4:00 PM</td>
                      <div className="bg-[#EFF6FA] rounded-2xl m-5">
                        <td className="px-4 py-2 text-[#3F9AD0]">
                          Consultation
                        </td>
                      </div>
                      <td className="px-4 py-2">Pharm. Rita Adebayo</td>
                      <div className="bg-[#FFECEB] rounded-2xl">
                        <td className="px-4 py-2 text-[#E58C84]">
                          Scheduled
                        </td>
                      </div>

                      <td className="px-4 py-2" onClick={toggleMenu3}>
                        <img src={menu} alt="" />
                        {isMenuOpen3 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2">
                                <img src={iconedit} alt="" />
                                <li>Edit</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer">
                                <img src={cancell} alt="" />
                                <li className="text-[#D4491C]">Cancel</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">4457</td>
                      <td className="px-4 py-2">Tolu Adeyemi</td>
                      <td className="px-4 py-2">20 Nov, 23 - 11:00 AM</td>
                      <div className="bg-[#FFECEB] rounded-2xl m-5">
                        <td className="px-4 py-2 text-[#E58C84]">
                          Vaccination
                        </td>
                      </div>
                      <td className="px-4 py-2">Dr. Olu Adewale</td>
                      <div className="bg-[#F8EFFA] rounded-2xl">
                        <td className="px-4 py-2 text-[#9145BF]">
                          Completed
                        </td>
                      </div>

                      <td className="px-4 py-2" onClick={toggleMenu4}>
                        <img src={menu} alt="" />
                        {isMenuOpen4 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2">
                                <img src={iconedit} alt="" />
                                <li>Edit</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer">
                                <img src={cancell} alt="" />
                                <li className="text-[#D4491C]">Cancel</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">4739</td>
                      <td className="px-4 py-2">Tolu Adeyemi</td>
                      <td className="px-4 py-2">20 Nov, 23 - 11:00 AM</td>
                      <div className="bg-[#F1F9F8] rounded-2xl m-5">
                        <td className="px-4 py-2 text-[#5EB4A8]">
                          Vaccination
                        </td>
                      </div>
                      <td className="px-4 py-2">Pharm. Uzo Ezewe</td>
                      <div className="bg-[#EFF6FA] rounded-2xl">
                        <td className="px-4 py-2 text-[#3F9AD0]">
                          Scheduled
                        </td>
                      </div>

                      <td className="px-4 py-2" onClick={toggleMenu5}>
                        <img src={menu} alt="" />
                        {isMenuOpen5 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2">
                                <img src={iconedit} alt="" />
                                <li>Edit</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer">
                                <img src={cancell} alt="" />
                                <li className="text-[#D4491C]">Cancel</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>




        </div>


      </div>
    </div>

  )
}

export default Patients