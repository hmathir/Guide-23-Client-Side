import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import useTilte from "../../hooks/useTitle";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
    const { user} = useContext(AuthProvider);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`https://ass11-server.vercel.app/reviews?reviewerEmail=${user?.email}`, {
            headers: {
                "authorization" : `Bearer ${localStorage.getItem('guide23-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [user?.email, refresh]);
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      useTilte('My Reviews');


    return (
        <>
            {loading ? <div className="flex justify-center items-center h-screen">
                <h1 className="font-bold text-xl">Loading...</h1>
            </div> : <div className="w-11/12 md:w-7/12 mx-auto">
                <div className="my-10 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                    <div className="text-white ">
                        {
                            reviews.length > 0 ? <>
                            {
                            reviews.map((review, index) => <ReviewCard key={index} review={review} refresh={refresh} setRefresh={setRefresh}></ReviewCard>)
                        }</> : <div className="flex justify-center items-center">
                            <h1 className="font-bold text-xl">No reviews were added.</h1>
                        </div>
                        }
                    </div>
                </div>

            </div>}</>


    );
};

export default MyReviews;