import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div className="w-11/12 md:w-9/12 mx-auto my-10">
            <section>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <h1 className="text-2xl font-bold lg:text-3xl">{service.name}</h1>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <img alt="" src={service.img} className="h-72 w-full rounded-xl object-cover lg:h-[540px]" />

                            </div>

                        </div>
                        <div className="lg:sticky lg:top-0">
                            <form className="space-y-4 lg:pt-8">
                                <fieldset>
                                    <legend className="text-lg font-bold">Rating</legend>
                                    <div className="mt-2 flex gap-1">
                                        <div className="flex items-center">
                                            <p> <FontAwesomeIcon className="text-yellow-400" icon={faStar} /> {service.rating} Out Of 5.0 Star.</p>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="text-lg font-bold">Total Review</legend>
                                    <div className="mt-2 flex gap-1">
                                        <div className="flex items-center">
                                            <p> <FontAwesomeIcon className="text-[#BE123B]" icon={faUser} /> {service.review} People Review it.</p>
                                        </div>
                                    </div>
                                </fieldset>

                                <div>
                                    <p className="text-xl font-bold">৳ <span className="line-through mr-2">{parseInt(service.price) + 1000}</span> ৳{service.price}</p>
                                </div>
                                <button type="submit" className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
                                    Add to cart
                                </button>
                                <button type="button" className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide">
                                    Notify when on sale
                                </button>
                            </form>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="prose max-w-none mt-6 aspect-video w-full rounded-xl">
                                <p>{service.discription}</p>

                                <h2>Why Guide 23?</h2>
                                <ul>
                                    <li>100% Safety And Security.</li>
                                    <li>Provide 100% Halal Foods.</li>
                                    <li>No Extra Cost.</li>
                                    <li>Special Discount For Special Persons.</li>
                                    <li>And Many More...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <h1 className="text-2xl font-bold lg:text-3xl">Reviews</h1>
                    </div>
                    {/* Write a Review */}
                    <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Write a Review
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            Your review will be posted publicly on the web.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;