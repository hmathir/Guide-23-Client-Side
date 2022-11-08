import { useEffect } from "react";
import useTilte from "../../hooks/useTitle";
import Banner from "./Banner";
import Contact from "./Contact";
import HomeService from "./Home_Services";
import Map from "./Map";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      useTilte('Home');
    return (
        <div>
            <div className="w-11/12 md:w-9/12 mx-auto">
                <Banner></Banner>
            </div>
            <div className="w-11/12 md:w-9/12 mx-auto">
                <h1 className="text-3xl font-bold py-10 text-center ">Services</h1>
                <HomeService></HomeService>
            </div>
            <div className="w-11/12 md:w-9/12 mx-auto "  id="contact">
                <h1 className="text-3xl font-bold py-10 text-center ">Contact</h1>
                <Contact></Contact>
            </div>
            <div className="w-11/12 md:w-9/12 mx-auto ">
                <h1 className="text-3xl font-bold py-10 text-center ">Our Branch</h1>
                <Map></Map>
            </div>
        </div>
    );
};

export default Home;