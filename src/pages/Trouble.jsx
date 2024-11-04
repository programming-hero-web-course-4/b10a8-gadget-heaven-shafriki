import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Trouble = () => {
    useEffect(() => {
        document.title = "Trouble | Gadget Heaven";
    }, []);

    const [tab, setTab] = useState("mobile");
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        password: ""
    });

    const handleSubmit = () => {
        // check valid input here
        if (tab === "mobile") {
            if (!formData.phone) {
                toast.error("Please enter your phone number.", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }

            const phonePattern = /^[0-9]{11}$/; 
            if (!phonePattern.test(formData.phone)) {
                toast.error("Please enter valid phone number", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }
        } else if (tab === "email") {
            if (!formData.email) {
                toast.error("Please enter email address", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }
            
            // check valid email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                toast.error("Please enter a valid email address.", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }
        }

        if (!formData.password) {
            toast.error("Please enter your password.", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }
        toast.success("Thank you, We will contact you soon.", {
            position: "top-center",
            autoClose: 3000,
        });
    };

    const handleReset = () => {
        setFormData({
            phone: "",
            email: "",
            password: ""
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
            <ToastContainer></ToastContainer>
            <h2 className="text-xl font-semibold text-center">Are you facing any problem with products purchased from Gadget Heaven?</h2>
            <p className="text-center text-gray-500 mb-6">Please select your item and submit. Our expert will contact as early as possible.</p>

            <div className="flex justify-center border-b mb-4">
                <button
                    className={`px-4 py-2 ${tab === "mobile" ? "bg-black text-white" : "bg-white text-black"} font-semibold`}
                    onClick={() => setTab("mobile")}
                >
                    Login with mobile
                </button>
                <button
                    className={`px-4 py-2 ${tab === "email" ? "bg-black text-white" : "bg-white text-black"} font-semibold`}
                    onClick={() => setTab("email")}
                >
                    Login with email
                </button>
            </div>

            <div>
                <div className="mb-4">
                    <select className="w-full p-2 border rounded">
                        <option>Bangladesh</option>
                    </select>
                </div>

                {/*  phone input */}
                {tab === "mobile" && (
                    <div className="flex items-center mb-4">
                        <span className="border p-2 rounded-l bg-gray-100">88</span>
                        <input
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="w-full p-2 border rounded-r"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                )}

                {/* email input */}
                {tab === "email" && (
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="w-full p-2 border rounded"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                )}

                {/* pass Input */}
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="w-full p-2 border rounded"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>

                <div className="flex space-x-2 mb-4">
                    <button onClick={handleSubmit} className="w-full bg-green-500 text-white py-2 rounded">Submit</button>
                    <button onClick={() => {}} className="w-full bg-gray-300 py-2 rounded">Cancel</button>
                    <button onClick={handleReset} className="w-full bg-gray-300 py-2 rounded">Reset</button>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                    <a href="#" className="hover:underline">New Customer? Sign Up Here</a>
                </div>
            </div>
        </div>
    );
};

export default Trouble;
