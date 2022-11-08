import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import profile from '../../assets/profile.jpeg';
import { AuthProvider } from "../../Context/AuthContext";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthProvider);
    console.log(user);
    const location = useLocation();
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleReview = (e) => {
        e.preventDefault();
        setLoading(true);
        const reviewText = e.target.reviewText.value;
        const reviewerEmail = user.email;
        const reviewerImg = user?.photoURL || profile;
        const reviewerName = user.displayName;
        const reviewDate = new Date().toDateString();
        const reviewTime = new Date().toLocaleTimeString();
        const serviceId = service._id;
        const reviewDetails = { reviewText, reviewerEmail, reviewerImg, reviewerName, reviewDate, reviewTime, serviceId };
        console.log(reviewDetails);
        fetch(`https://ass11-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setRefresh(!refresh);
                    setLoading(false);
                    toast.success('Review Added Successfully');
                    e.target.reset();
                }
            })
            .catch(e => console.log(e));
    }


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://ass11-server.vercel.app/reviews?serviceId=${service?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(e => console.log(e));

    }, [service?._id, refresh])
    console.log(reviews);

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
                        <h1 className="text-2xl font-bold lg:text-3xl ">Reviews</h1>
                    </div>
                    {/* Write a Review */}
                    <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <div className="bg-white shadow-lg overflow-hidden sm:rounded-md">

                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Write a Review
                                        </h3>
                                        {!user ? <div className="md:flex gap-4 items-center">
                                            <p className="my-2 max-w-2xl text-xm font-bold md:text-center text-gray-500">
                                                You Need To Login First To Write A Review.
                                            </p> <Link className="px-3 py-2 text-white bg-[#BE123B]  rounded-xl " to='/login' state={{ from: location }} replace>Login</Link>
                                        </div> : <form onSubmit={handleReview}> {loading ? <h1 className="text-center font-bold">Posting Review...</h1> : <><div className="flex items-center">
                                            <img referrerPolicy="no-referrer" src={user?.photoURL ? user.photoURL : profile} className="w-16 m-2 rounded-full" alt="" />
                                            <p>{user?.displayName ? user.displayName : 'Mr./Mrs. User'}</p>
                                        </div>
                                            <textarea className="w-full my-2 rounded-xl" type="text" name="reviewText" id="" placeholder="How was the service?" required />
                                            <button className="px-3 py-2 bg-[#BE123B] rounded-xl text-white">Post</button></>}

                                        </form>}


                                    </div>



                                </div>
                            </div>
                        </div>


                        {reviews.length < 1 ? <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <div className="bg-white shadow-lg overflow-hidden sm:rounded-md">

                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            No Reviews Yet
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            Be the first to write a review.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            : <div className="lg:col-span-3">
                                <div className="relative mt-4">
                                    <div className="bg-white shadow-lg overflow-hidden sm:rounded-md">
                                        <h1 className="p-2 text-xl">User Reviews:</h1>
                                        {reviews?.map((review,index) => <div key={index} className="px-4 py-5 sm:px-6">
                                            <div>
                                                <div className="flex items-center">

                                                    <img referrerPolicy="no-referrer" src={review?.reviewerImg ? review.reviewerImg : profile} className="w-16 m-2 rounded-full" alt="" />
                                                    <div>
                                                        <div>
                                                            <p>{review?.reviewerName ? review?.reviewerName : 'Anonymous'}</p>
                                                        </div>
                                                        <div>
                                                            <p>Date: {review.reviewDate}</p>
                                                        </div>
                                                    </div>


                                                </div>
                                                <p className="m-2 rounded"> {review.reviewText} </p>
                                            </div>
                                            <hr />
                                        </div>)}
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;