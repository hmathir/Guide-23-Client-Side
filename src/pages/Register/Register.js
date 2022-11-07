import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Register = () => {
    const { signUpWithEmail } = useContext(AuthProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signUpWithEmail(email, password).then(() => {
            navigate(from, { replace: true })
            toast.success('Registration Successful')
            form.reset();
        }).catch(e => console.log(e));
    }

    return (
        <div className="pb-20">

            <div className="w-11/12 mx-auto max-w-md p-8 space-y-3 rounded-xl  border border-black mt-20">
                <h1 className="text-2xl font-bold text-center text-[#BE123B] ">Sign Up</h1>
                <form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
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
        </div>
    );
};

export default Register;