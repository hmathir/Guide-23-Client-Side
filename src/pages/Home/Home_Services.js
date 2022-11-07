import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeService = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ass11-server.vercel.app/services?limit=3`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, [])

    console.log(services);
    return (
        <>
            {loading ? <h1 className="flex text-xl font-bold justify-center items-center"> Loading... </h1> : <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        services.map((service, index) => <div key={index} className="border border-black rounded-lg">
                            <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100">
                                <img
                                    alt="Home"
                                    src={service.img}
                                    className="h-56 w-full rounded-md object-cover"
                                />

                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dd className="text-sm text-gray-500">৳ {service.price}</dd>
                                        </div>

                                        <div>
                                            <dd className="font-bold text-xl">{service.name}</dd>
                                        </div>
                                    </dl>

                                    <dl>
                                        <div>
                                            <dd className="">{service.discription.slice(0, 97) + '...'}</dd>
                                        </div>
                                    </dl>

                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <FontAwesomeIcon icon={faStar} />

                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">Rating</p>

                                                <p className="font-medium">{service.rating}</p>
                                            </div>
                                        </div>

                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">

                                            <FontAwesomeIcon icon={faUser} />
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">Total Review</p>

                                                <p className="font-medium">{service.review}</p>
                                            </div>
                                        </div>

                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <Link to={`/service/${service._id}`}  className="px-3 py-2 bg-[#BE123B] text-white rounded-xl ">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }

                </div>
                <div className="flex justify-center mt-5">
                    <Link className="px-3 py-2  rounded-xl bg-[#BE123B] font-bold text-white" to='/services'>See More</Link>
                </div>
            </div>
            }
        </>


    );
};

export default HomeService;