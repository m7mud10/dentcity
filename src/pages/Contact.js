
import { useState } from "react";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFaceKiss,
  faGlobe,
  faMap,
  faMobile,

} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import './facebook-svgrepo-com.svg';


const Contact = () => {
  const [name, setname] = useState("");
  const [show, setshow] = useState(true);

  const changename = (event) => {
    setname(event.target.value);
  };

  const FormHandler = (event) => {
    event.preventDefault();
    if (name.length == "") {
      setshow(false);
      return;
    }
    console.log(name);
    setshow(true);
  };

  return (
    <>
      <Banner title="Contact us" />

      <section className="contact">
        <div className="container">
          <div className="row box">
            <div className="col-lg-6 col-md-6">
              <form onSubmit={FormHandler}>
                <div class="form-control">
                  <input placeholder="Your Name" onChange={changename} />
                  {!show && <p>not empty</p>}
                </div>
                <div class="form-control">
                  <input placeholder="Email" />
                </div>
                <div class="form-control">
                  <input placeholder="Phone Number" />
                </div>
                <select>
                  <option>Choose Examination</option>
                  <option>one</option>
                  <option>two</option>
                  <option>three</option>
                </select>
                <div class="form-control">
                  <textarea placeholder="Message"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                  <h3>Contact Us For Any Information</h3>
                  <li>
                    <FontAwesomeIcon icon={faMap} />
                    Location
                  </li>
                  <hr />
                  <p>FCI behind FOL , Sbarbay. Tanta University </p>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email & Phone
                  </li>
                  <hr />
                  <p>m7mudmorad10@gmail.com</p>
                  <p>(+20) 109 498 7803</p>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} />
                    Follow Us
                  </li>
                  <hr />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faFaceKiss} />
                    </li>
                    <li>
                      
                       
                      
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMobile} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
