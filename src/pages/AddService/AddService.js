import { useState } from "react";
import toast from "react-hot-toast";
import useTilte from "../../hooks/useTitle";

const AddService = () => {
    const [loading, setLoading] = useState(false);
    useTilte('Add Service');

    const handleAddService = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const review = form.review.value;
        const discription = form.discription.value;
        const serviceData = {
            name,
            price,
            img,
            rating,
            review,
            discription
        }
        fetch('https://ass11-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoading(false);
                    toast.success('Service Added Successfully');
                    form.reset();
                }
            })
            .catch(e => console.log(e));
    }

    return (
        <div>
            {
                loading ? <div className='flex justify-center h-screen items-center'><h1 className='font-bold text-xl'>Loading...</h1></div> : <div>
                    <h1 className="text-3xl font-bold text-center">Add Service</h1>
                    <form onSubmit={handleAddService} className="w-11/12 md:w-9/12 mx-auto">
                        <div className="my-5">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Service Name</label>
                            <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Service Name" required />
                        </div>
                        <div className="my-5">
                            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                            <input type="text" name="price" id="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Price" required />
                        </div>
                        <div className="my-5">
                            <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                            <input type="text" name="rating" id="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Rating (Out Of 5)" required />
                        </div>
                        <div className="my-5">
                            <label htmlFor="review" className="block text-gray-700 text-sm font-bold mb-2">Total Review</label>
                            <input type="text" name="review" id="review" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Review (Total How Many People Review This Service)" required />
                        </div>
                        <div className="my-5">
                            <label htmlFor="discription" className="block text-gray-700 text-sm font-bold mb-2">Discription</label>
                            <textarea name="discription" id="discription" cols="30" rows="10" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Discription" required></textarea>
                        </div>
                        <div className="my-5">
                            <label htmlFor="img" className="block text-gray-700 text-sm font-bold mb-2">Service Image URL</label>
                            <input type="text" name="img" id="img" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="my-5">
                            <button className="px-3 py-2 bg-[#BE123B] text-white rounded-xl">Add Service</button>
                        </div>
                    </form>
                </div>
            }


        </div>
    );
};

export default AddService;