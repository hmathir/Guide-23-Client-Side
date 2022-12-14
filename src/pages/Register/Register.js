import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import useTilte from "../../hooks/useTitle";

const Register = () => {
    const { signUpWithEmail, updateUserProfile } = useContext(AuthProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [loading, setLoading] = useState(false);


    const handleRegister = (event) => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        signUpWithEmail(email, password).then(() => {
            updateUserProfile(name, photoURL).then(() => {
                const currentUser = {
                    email: email,
                }
    
                fetch('https://ass11-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                }).then(res => res.json()).then(data => {
                    localStorage.setItem('guide23-token',data.token)
                    form.reset();
                    window.location.reload(); //reload again to get the user data.
                }).catch(e => {
                    setLoading(false);
                    toast.error(e.message)
                });
                navigate(from, { replace: true })
                toast.success('Registration Successful')
            }).catch((error) => {
                setLoading(false);
                toast.error(error.message)
            });
        
        }).catch(e => {
            setLoading(false);
            toast.error(e.message)
        });
    }
    useTilte('Register');
    return (
        <>{loading ? <div className="flex justify-center items-center h-screen">
        <h1 className="font-bold text-xl">Loading...</h1>
    </div>  : <div className="pb-20">

        <div className="w-11/12 mx-auto max-w-md p-8 space-y-3 rounded-xl  border border-black mt-20">
            <h1 className="text-2xl font-bold text-center text-[#BE123B] ">Sign Up</h1>
            <form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-[#BE123B]  font-bold">Name*</label>
                    <input required type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block text-[#BE123B]  font-bold">Photo URL*</label>
                    <input required type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-[#BE123B]  font-bold">Email*</label>
                    <input required type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-[#BE123B]  font-bold">Password*</label>
                    <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center bg-[#BE123B]  text-white rounded-lg">Register</button>
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
                <Link to='/login' className="underline text-gray-800">Log In</Link>
            </p>
        </div>
    </div>}</>
    
    );
};

export default Register;