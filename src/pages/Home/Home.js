import Services from "./Services";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <div className="md:w-9/12 mx-auto">
                <Slider></Slider>
            </div>
            <div className="md:w-9/12 mx-auto">
                <h1 className="text-3xl font-bold mt-10 text-center p-2 ">Services</h1>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;