import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import profile from '../../assets/profile.jpeg';
import { AuthProvider } from "../../Context/AuthContext";

const EditReview = () => {
    const review = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {user, loading} = useContext(AuthProvider);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.reviewText.value;

        fetch(`https://ass11-server.vercel.app/reviews/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
                },
                body: JSON.stringify({reviewText})
            }).then(res => res.json()).then(data =>{
                if(data){
                    toast.success('Review Updated');
                    navigate(from, {replace: true})
                }
            }).catch(e => console.log(e));

    }
    return (
        <div className="w-11/12 md:w-6/12 md:py-10 mx-auto border border-black p-4 rounded-xl">
            <form onSubmit={handleUpdate}> {loading ? <h1 className="text-center font-bold">Posting Review...</h1> : <>
            <h1 className="text-center font-bold text-xl">Want To Change Your Review?</h1>
            <div className="flex items-center">
                                            <img referrerPolicy="no-referrer" src={user?.photoURL ? user.photoURL : profile} className="w-16 m-2 rounded-full" alt="" />
                                            <p>{user?.displayName ? user.displayName : 'Mr./Mrs. User'}</p>
                                        </div>
                                            <textarea className="w-full my-2 rounded-xl" type="text" name="reviewText" id="" placeholder="How was the service?" defaultValue={review.reviewText} required />
                                            <button className="px-3 py-2 bg-[#BE123B] rounded-xl text-white">Update</button></>}

                                        </form>
        </div>
    );
};

export default EditReview;