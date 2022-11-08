import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import profile from '../../assets/profile.jpeg';


const ReviewCard = ({ review, refresh, setRefresh }) => {

    const [service, setService] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();


    useEffect(() => {
        fetch(`https://ass11-server.vercel.app/services/${review?.serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [review?.serviceId]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleDelete = () => {
        const agree = window.confirm('Are you sure to delete this review?');
        if(!agree){
            return;
        }
        fetch(`https://ass11-server.vercel.app/reviews/${review?._id}`, {
            method: 'DELETE'
        })
            .then(res => {
                res.json()
                setRefresh(!refresh);
            })
            .then(data => {
                if (data) {
                    if (agree) {
                        toast.success('Review deleted successfully');
                    }
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            {
                isLoading ? <h1 className='text-center'>Loading...</h1> : <div className="sm:pr-8 flex gap-4 justify-between items-center p-4">
                    <div className='flex items-center gap-4'>
                        <img src={service?.img ? service?.img : profile} className="w-20 h-20 rounded-xl" alt="" />
                        <div>
                            <h3 className="text-xl font-bold ">{service?.name ? service?.name : 'Unavailable'}</h3>
                            <p className="text-sm ">
                                Your Review: {review?.reviewText ? review?.reviewText : 'Nothing...'}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link to={`/reviews/${review._id}`} state={{ from: location }} replace className='text-white rounded-xl'><FontAwesomeIcon icon={faEdit} /></Link>
                        <button onClick={handleDelete} className=' text-white rounded-xl'><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            }

            <hr />
        </div>
    );
};

export default ReviewCard;