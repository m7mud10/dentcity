
import { Fragment } from "react";
import Navs from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from './Footer';


const Layouts = () => {
    return (
        <Fragment>
            <Navs />
      
            <main>
                <Outlet/>
            </main>
     
            <Footer/>
            </Fragment>
    )
}
export default Layouts;