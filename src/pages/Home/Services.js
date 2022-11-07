import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://ass11-server.vercel.app/services?limit=3`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, [])

    console.log(services);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    services.map((service,index) => <div key={index} className="border border-black">
                        <Link href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
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
                                        <dd className="">{service.discription.slice(0,100)}</dd>
                                    </div>
                                </dl>

                                <div className="mt-6 flex items-center gap-8 text-xs">
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                        

                                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                            <p className="text-gray-500">Rating</p>

                                            <p className="font-medium">{service.rating}</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                      

                                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                            <p className="text-gray-500">Total Review</p>

                                            <p className="font-medium">{service.review}</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                            <button className="px-2 py-1 bg-teal-400 text-white rounded-xl ">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;