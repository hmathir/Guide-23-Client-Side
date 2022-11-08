import { useEffect, useState } from "react";
import useTilte from "../../hooks/useTitle";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useTilte('Blogs');

    useEffect(() => {
        fetch(`https://ass11-server.vercel.app/blogs`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            {loading ? <div className='flex justify-center h-screen items-center'><h1 className='font-bold text-xl'>Loading...</h1></div> : <div className="w-11/12 md:w-9/12 mx-auto py-10 ">
                {
                    blogs.map((blog, index) => <div key={index}>
                        <div className="mb-5 border border-black p-2 rounded-xl">
                            <h1 className="text-xl font-bold">{blog.blogTitle}</h1>
                            <p>{blog.blogDiscription}</p>
                        </div>
                    </div>)
                }

            </div>}
        </>

    );
};

export default Blogs;