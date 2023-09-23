import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <h1>This is root</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;