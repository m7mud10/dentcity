import axios from 'axios';
import { useState } from 'react';
import Banner from "../components/Banner";







function Register() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");

  const handleSubmit = () => {
    if (Firstname.length === 0) {
      alert("Name has left Blank!");
    } else if (Lastname.length === 0) {
      alert("Mobile has left Blank!");
    } else if (email.length === 0) {
      alert("Email has left Blank!");
    } else if (password.length === 0) {
      alert("Email has left Blank!");
    }else{
      const url = "http://localhost/clinic/index.php";
      let fData = new FormData();
      fData.append("Firstname", Firstname);
      fData.append("Lastname", Lastname);
      fData.append("email", email);
      fData.append("password", password);
      fData.append("gender", gender);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
      alert("success");
    }
  };

            return (
              <>
                <Banner title="Register" />

                <section
                  id="registration"
                  className="min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative"
                >
                  <h2 className="text-3xl text-gray-8-- font-bold text-center mb-5">
                    Sign Up Now
                  </h2>
                  <div className="container">
                    <div className="row box">
                      <div className="col-lg-10 col-md-10">
                        <form id="form1">
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2 ">
                              First Name
                            </label>
                            <br />
                            <input
                              type="text"
                              name="Firstname"
                              required
                              className="w-full px-3 py-2 border rounded-md bg-white text-black"
                              value={Firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              Last Name
                            </label>
                            <br />
                            <input
                              type="text"
                              name="Lastname"
                              required
                              className="w-full px-3 py-2 border rounded-md bg-white text-black"
                              value={Lastname}
                              onChange={(e) => setLastname(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              Email
                            </label>
                            <br />
                            <input
                              type="email"
                              name="email"
                              required
                              className="w-full px-3 py-2 border rounded-md bg-white text-black"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              password
                            </label>
                            <br />
                            <input
                              type="password"
                              name="password"
                              required
                              className="w-full px-3 py-2 border rounded-md bg-white text-black"
                              value={password}
                              onChange={(e) => setpassword(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              select Gender
                            </label>
                            <br />
                            <select
                              name="gender"
                              required
                              className="w-full px-3 py-2 border rounded-md bg-white text-black"
                              value={gender}
                              onChange={(e) => setgender(e.target.value)}
                            >
                              <option value="">gender</option>
                              <option>female</option>
                              <option>male</option>
                            </select>
                          </div>

                          <button
                            type="submit"
                            name="submit"
                            value="Register"
                            onClick={handleSubmit}
                          >
                            <h6>Sign up</h6>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            );
}

export default Register;
