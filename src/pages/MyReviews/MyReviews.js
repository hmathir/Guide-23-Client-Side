import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContext";

const MyReviews = () => {    
    const { user } = useContext(AuthProvider);
    const [reviews, setReviews] = useState([]);
    console.log(user.email);
    
    useEffect(() => {
        fetch(`https://ass11-server.vercel.app/reviews?reviewerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
            .catch(error => console.log(error));
    }, [user?.email]);

    
    return (
        <div>
            
        </div>
    );
};

export default MyReviews;