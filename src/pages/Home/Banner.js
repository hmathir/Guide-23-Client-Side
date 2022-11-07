import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <div>
            <section className="relative bg-[url(https://media.istockphoto.com/photos/ll-be-back-in-couple-of-months-picture-id1035062826?k=20&m=1035062826&s=170667a&w=0&h=Hen1AzF6dpLGIWqM5EaMUqake33rzQOebIbKRmMcr3U=)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let me find your
                            <strong className="block font-extrabold text-rose-700">
                                Destination.
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                           Guide 23 is a Travel Guide service provided by HM Athir. It is a one-stop solution for all your travel needs. You can find all the information you need about your destination, including hotels, restaurants, attractions, and more.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link to="/services" className="block w-full rounded bg-[#BE123B] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#541624]  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                Our Services
                            </Link>
                            <a href="https://facebook.com/athirofficial" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;