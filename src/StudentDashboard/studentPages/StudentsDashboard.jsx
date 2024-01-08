import { Link } from "react-router-dom";
import { useState } from "react";
import DashboardNav from "../../DashboardLayout/component/DashboardNav";
import StudentSidebar from "../../StudentDashboard/studentComponent/StudentSidebar";
import CompleteProfile from "../../AdminDashboard/components/CompleteProfile";
import Universitylogo from "../../assets/Universitylogo.svg";
import Card from "../../DashboardLayout/component/Card";
import menu from "../../assets/menu.svg";
import iconedit from "../../assets/iconedit.svg";
import cancell from "../../assets/cancell.svg";

const StudentsDashboard = () => {
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

  const [showBookingForm, setShowBookingForm] = useState(false);

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  const BookingForm = () => {
    const [date, setDate] = useState("");
    const [reason, setReason] = useState("");

    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Simulating a booking action
      console.log("Booking submitted:", { date, reason });
      setDate("");
      setReason("");
      setShowBookingForm(false);

      // Display alert after form submission
      window.alert("Your Appointment is Booked!");
    };

    return (
      <div className="bg-white p-5 mt-5">
        <h1 className="text-2xl font-bold text-[#00395B] mb-3  ">
          Book an Appointment
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 font-medium mb-1"
            >
              Appointment Date:
            </label>
            <input
              type="datetime-local"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex justify-between">
          <div className="pb-3">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
            Name:
            </label>
            <input type="text"
              className="border border-gray-300 rounded px-3 py-2 w-full h-10 resize-none focus:outline-none focus:border-blue-500"
              id="name"
              placeholder="Your Name"
            />
          </div>

          <div className="pb-3">
            <label
              htmlFor="department"
              className="block text-gray-700 font-medium mb-1"
            >
            Department:
            </label>
            <input type="text"
              className="border border-gray-300 rounded px-3 py-2 w-full h-10 resize-none focus:outline-none focus:border-blue-500"
              id="department"
              placeholder="Your Department"
            />
          </div>

        
          <div className="pb-3">
            <label
              htmlFor="registrationNumber"
              className="block text-gray-700 font-medium mb-1"
            >
            Registration Number:
            </label>
            <input type="alphanumeric" name="registrationNumber"
              className="border border-gray-300 rounded px-3 py-2 w-full h-10 resize-none focus:outline-none focus:border-blue-500"
              id="registrationNumber"
              placeholder="Registration Number"
            />
          </div>


          <div className="pb-3">
            <label
              htmlFor="department"
              className="block text-gray-700 font-medium mb-1"
            >
              Year of Study:
            </label>
            <input type="number"
              className="border border-gray-300 rounded px-3 py-2 w-full h-10 resize-none focus:outline-none focus:border-blue-500"
              id="yearofStudy"
              placeholder="Year of Study"
            />
          </div>

          </div>

          <div className="mb-4">
            <label
              htmlFor="reason"
              className="block text-gray-700 font-medium mb-1"
            >
              Reason for Appointment:
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full h-20 resize-none focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      <div className="bg-neutral-100">
        <DashboardNav />
        <div className="flex">
          <div>
            <StudentSidebar />
          </div>

          <div className="px- p-10 mx-auto">
            <div>
              <CompleteProfile />
            </div>

            <div className="grid grid-cols-2 gap-10 mb-12 items-cent">
              <div>
                <h1 className="text-4xl text-[#00395B] leading-[146.5%] font-extrabold">
                  Upcoming Programs
                </h1>
              </div>

              <div className="flex justify-end mb-">
                <Link to="#">
                  <div className="flex gap-2 items-center text-[#005F97] text-base font-medium">
                    <div className="border border-[#005F97] rounded-full px-2">
                      &times;
                    </div>
                    <div>
                      <h1 className="">See All</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mb-10">
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
            </div>

            <div className="py-">
              <div className="bg-white p-5 h-auto">
                <h1 className="text-4xl font-bold leading-[146.5%] text-[#00395B] py-7">
                  Past Appointments
                </h1>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-[#555] font-medium text-base">
                    <thead className="bg-neutral-100 text-[#777]">
                      <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Date/time</th>
                        <th className="px-4 py-2">Reason</th>
                        <th className="px-4 py-2">Contact Information</th>
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
                        <td className="px-4 py-2">chioma.nwosu@email.com</td>
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
                                  <li>Reschedule</li>
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
                        <td className="px-4 py-2">ahmed.yusuf12@email.com</td>
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
                                  <li>Reschedule</li>
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
                        <td className="px-4 py-2">lawal.amos5@email.com</td>
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
                                  <li>Reschedule</li>
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
                        <td className="px-4 py-2">adeyemi.tolu@email.com</td>
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
                                  <li>Reschedule</li>
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
                        <td className="px-4 py-2">
                          olumide.olatunjife@email.com
                        </td>
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
                                  <li>Reschedule</li>
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
            <button
              onClick={toggleBookingForm}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Book an Appointment
            </button>
            {showBookingForm && <BookingForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsDashboard;
