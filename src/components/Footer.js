import './Footer.css';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone} from '@fortawesome/free-solid-svg-icons';
const footer = () => {
    return (
        <footer>
                   <div className="container">
                       <div className="row">
                       <div className="col-md-3 col-sm-6">
                           {/* <img src={footerlogo} className="footerlogo" /> */}
                           <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolor smod tempor
                               incididunt ut labore et.</p>
                               <div className="footer-contact">
                                   <div className="footer-icon">
                                       <FontAwesomeIcon icon={faPhone} />
                                   </div>
                                   <div className="footer-text">
                                       <h6>Contact Us</h6>
                                       <h4>+01 123 456 7890</h4>
                                   </div>
                               </div>
                           </div>
                           <div className="col-md-3 col-sm-6">
                               <h2>Quick Links</h2>
                               <ul>
                                   <li><a herf="#">Home</a></li>
                                   <li><a herf="#">About</a></li>
                                   <li><a herf="#">Blog</a></li>
                                   <li><a herf="#">Booking</a></li>
                                   <li><a herf="#">Fags</a></li>
                                   <li><a herf="#">Our team</a></li>
                                   <li><a herf="#">Services</a></li>
                               </ul>
                           </div>
                           <div className="col-md-3 col-sm-6">
                           <h2>Our Service</h2>
                               <ul>
                                   <li><a herf="#">Dental Care</a></li>
                                   <li><a herf="#">Cardiac Clinic</a></li>
                                   <li><a herf="#">Massege Therapy</a></li>
                                   <li><a herf="#">Cardiology</a></li>
                                   <li><a herf="#">Percise Diagnosis</a></li>
                                   <li><a herf="#">Abmbulance Services</a></li>
                                   <li><a herf="#">Services</a></li>
                               </ul>
                           </div>
                           <div className="col-md-3 col-sm-6">
                               <h2>Subcribe</h2>
                               <form>
                                   <input type="email" placeholder="Enter Email"/>
                                   <button type="submit">subscribe now</button>
                               </form>
                               {/* <ul className="social">
                                   <li><a herf="#"><img src={}/></a></li>
                                   <li><a herf="#"><img src={}/></a></li>
                                   <li><a herf="#"><img src={}/></a></li>
                                   <li><a herf="#"><img src={}/></a></li>
                               </ul> */}
                           </div>
       
                       </div>
                   </div>
                   <div className="footer-bottom">
                       <div className="container">
                           <div className="row">
                               <div className="col-lg-12 col-md-12">
                                   <span>Copyright 2022 Design & Development by ThemeTrades
       
                                   </span>
                               </div>
                           </div>
                       </div>
                   </div>
               </footer>

 )
}
export default footer;