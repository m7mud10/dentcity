import  { useState } from "react";
import Swal from "sweetalert2";
import Banner from "../components/Banner";
import "./Booking.css";


const Booking = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "557beb6d-5150-4597-81b5-ed04b9edad8a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Appointment Booked Successfully",
        icon: "success"
      });
    }
  };
  return (
    <>
      <Banner title="Booking" />
      <section
        id="appointment"
        className="min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="block container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl text-gray-8-- font-bold text-center mb-8">
              Book Appointment
            </h2>
            <form id= "form1" onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2 ">Full Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Phone</label>
                <br />
                <input
                  type="tel"
                  name="phone"
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Select issue</label>
                <br />
                <select
                  name="doctor"
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                >
                  <option value="">Select Examination</option>
                  <option>hhhhhhhhh</option>
                  <option>Dhhhhhhhhhhh</option>
                  <option>lllllllllllll</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">Date</label>
                <br />
                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2">
                  Reason for Visit
                </label>
                <br />
                <textarea
                  name="reason"
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600  text-Black rounded-full hover:bg-blue-700 transition "
              >
                <h6>confirm appointment</h6>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Booking;
