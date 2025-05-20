import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = (props) => {
    return (
    <section className="banner">
        <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>{props.title}</h2>
                    <li>
                        <Link to='/Home' className="link">
                            <FontAwesomeIcon icon={faHome} />
                            Home
                        </Link>
                    </li>
                </div>
        </div>
    </section>
    );
}
export default Banner;