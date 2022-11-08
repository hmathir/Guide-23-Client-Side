import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const [details, setDetails] = useState({});
    const handleContact = (e) => {
        e.preventDefault();
        const messageSender = {
            name: details.name,
            email: details.email,
            phone: details.phone,
            message: details.message
        }
        fetch('https://ass11-server.vercel.app/send-messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageSender)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    toast.success(data.message);
                    e.target.reset();
                }
            })
    }
    const getValue = (e) => {
        const { name, value } = e.target;
        const oldDetails = {...details}
        oldDetails[name] = value;
        setDetails(oldDetails);
    }


    return (
        <div>
            <section className="bg-gray-200">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                Do you have any query? Feel free to contact us anytime. We are always ready to help you.
                            </p>
                            <div className="mt-8">
                                <h1 className="text-2xl font-bold text-pink-600">
                                    01858906527
                                </h1>
                                <address className="mt-2 not-italic">
                                    House 737, Road 2, Block A, Banani, Dhaka-1213
                                </address>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleContact} className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input onBlur={getValue} className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name" name="name" />
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input onBlur={getValue} className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address" type="email" id="email" name="email" />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input onBlur={getValue} className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Phone Number" type="tel" id="phone" name="phone" />
                                    </div>
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <textarea onBlur={getValue} className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message" rows={8} id="message" defaultValue={""} name="message" />
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-[#BE123B]  px-5 py-3 text-white sm:w-auto">
                                        <span className="font-medium"> Send Enquiry </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;