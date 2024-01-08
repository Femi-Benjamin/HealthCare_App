import Sidebar from "../component/Sidebar";
import DashboardNav from "../component/DashboardNav";
import { useState } from "react";
import menu from "../../assets/menu.svg";
import pause from "../../assets/pause.svg";
import cancel from "../../assets/cancel.svg";

const Student = () => {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const [isMenuOpen6, setIsMenuOpen6] = useState(false);
  const [isMenuOpen7, setIsMenuOpen7] = useState(false);

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
  const toggleMenu6 = () => {
    setIsMenuOpen6(!isMenuOpen6);
  };
  const toggleMenu7 = () => {
    setIsMenuOpen7(!isMenuOpen7);
  };

  return (
    <div className="bg-neutral-100">
      <DashboardNav />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="p-10 mx-auto">
          <div className="grid grid-cols-2 gap-10 mb-12">
            <div>
              <h1 className="text-4xl text-[#00395B] leading-[146.5%] font-extrabold">
                Student
              </h1>
            </div>
          </div>
          <div className="flex justify-end mb-10 items-center gap-2">
            <label htmlFor="search">Search:</label>
            <input
              className="p-2 bg-transparent outline-none h-12 w-80 border border-[#CCC] rounded-lg self-end"
              type="search"
            />
          </div>
          <div className="">
            <div className="bg-white p-5 h-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-[#555] font-medium text-base">
                  <thead className="bg-neutral-100 text-[#777]">
                    <tr>
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Role/Position</th>
                      <th className="px-4 py-2">Contact Information</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2">STF001</td>
                      <td className="px-4 py-2">Adebayo Ore Olatunji</td>
                      <td className="px-4 py-2">Student</td>
                      <div className="bg-transparent rounded-2xl m-5">
                        <td className="px-4 py-2">adebayo.ola@example.com</td>
                      </div>

                      <td className="px-4 py-2" onClick={toggleMenu1}>
                        <img src={menu} alt="" />
                        {isMenuOpen1 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2">
                            <ul>
                              <div className="flex gap-2 cursor-pointer">
                                <img src={pause} alt="" />
                                <li>Deactivate User</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer text-[#D4491C]">
                                <img src={cancel} alt="" />
                                <li>Remove User</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">STF002</td>
                      <td className="px-4 py-2">Adebisi Adeyemo</td>
                      <td className="px-4 py-2">Student</td>
                      <div className="bg-transparent rounded-2xl m-5">
                        <td className="px-4 py-2">adebisi.adeyemo@email.com</td>
                      </div>
                      {/* <td className="px-4 py-2">Consultant</td> */}

                      <td className="px-4 py-2" onClick={toggleMenu2}>
                        <img src={menu} alt="" />
                        {isMenuOpen2 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2 cursor-pointer">
                                <img src={pause} alt="" />
                                <li>Deactivate User</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer text-[#D4491C]">
                                <img src={cancel} alt="" />
                                <li>Remove User</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">STF003</td>
                      <td className="px-4 py-2">Olumide W Olatunji</td>
                      <td className="px-4 py-2">Student</td>
                      <div className="bg-transparent rounded-2xl m-5">
                        <td className="px-4 py-2">
                          olumide.olatunji@email.com
                        </td>
                      </div>
                      {/* <td className="px-4 py-2">Pharmacy</td> */}

                      <td className="px-4 py-2" onClick={toggleMenu3}>
                        <img src={menu} alt="" />
                        {isMenuOpen3 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2 cursor-pointer">
                                <img src={pause} alt="" />
                                <li>Deactivate User</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer text-[#D4491C]">
                                <img src={cancel} alt="" />
                                <li>Remove User</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">STF004</td>
                      <td className="px-4 py-2">Chi Ifeoma Okon</td>
                      <td className="px-4 py-2">Student</td>
                      <div className="bg-transparent rounded-2xl m-5">
                        <td className="px-4 py-2">chi.IfeomaOkon@email.com</td>
                      </div>
                      {/* <td className="px-4 py-2">Psychology</td> */}

                      <td className="px-4 py-2" onClick={toggleMenu4}>
                        <img src={menu} alt="" />
                        {isMenuOpen4 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2 cursor-pointer">
                                <img src={pause} alt="" />
                                <li>Deactivate User</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer text-[#D4491C]">
                                <img src={cancel} alt="" />
                                <li>Remove User</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">STF005</td>
                      <td className="px-4 py-2">Nahmed B Ibrahim</td>
                      <td className="px-4 py-2">Student</td>
                      <div className="bg-transparent rounded-2xl m-5">
                        <td className="px-4 py-2">NahmedB.Ibrahim@email.com</td>
                      </div>
                      {/* <td className="px-4 py-2">Nursing</td> */}

                      <td className="px-4 py-2" onClick={toggleMenu5}>
                        <img src={menu} alt="" />
                        {isMenuOpen5 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2 cursor-pointer">
                                <img src={pause} alt="" />
                                <li>Deactivate User</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer text-[#D4491C]">
                                <img src={cancel} alt="" />
                                <li>Remove User</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">STF006</td>
                      <td className="px-4 py-2">Adekoya A Jide</td>
                      <td className="px-4 py-2">Student</td>
                      <div className="bg-transparent rounded-2xl m-5">
                        <td className="px-4 py-2">AdekoyaA.Jide@email.com</td>
                      </div>
                      {/* <td className="px-4 py-2">Dentistry</td> */}

                      <td className="px-4 py-2" onClick={toggleMenu6}>
                        <img src={menu} alt="" />
                        {isMenuOpen6 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2 cursor-pointer">
                                <img src={pause} alt="" />
                                <li>Deactivate User</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer text-[#D4491C]">
                                <img src={cancel} alt="" />
                                <li>Remove User</li>
                              </div>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2">STF007</td>
                      <td className="px-4 py-2">Funke Adekoya</td>
                      <td className="px-4 py-2">Student</td>
                      <div className="bg-transparent rounded-2xl m-5">
                        <td className="px-4 py-2">
                          olumide.olatunji@email.com
                        </td>
                      </div>

                      <td className="px-4 py-2" onClick={toggleMenu7}>
                        <img src={menu} alt="" />
                        {isMenuOpen7 && (
                          <div className="bg-white border border-gray-200 rounded shadow-md p-2 left-0">
                            <ul>
                              <div className="flex gap-2 cursor-pointer">
                                <img src={pause} alt="" />
                                <li>Deactivate User</li>
                              </div>
                              <div className="flex gap-1 cursor-pointer text-[#D4491C]">
                                <img src={cancel} alt="" />
                                <li>Remove User</li>
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
          </div>{" "}
          {/* //////////////TABLE////////////////// */}
        </div>{" "}
        {/* /////////MAIN/////////// */}
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Student;
