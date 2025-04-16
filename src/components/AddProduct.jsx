import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

function AddProducts(props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://backend-rrsk.onrender.com/addProduct', { name, quantity, price });
            toast.success(response.data.message);
        } 
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="w-full max-w-lg mx-auto mt-5 mb-5">
                <h3 className="text-black text-center font-bold text-xl mb-4">Add New Product Details</h3>
                <Link to="/" className="text-blue-500 hover:underline">View products</Link>
                <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block font-semibold">Student Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Student name" 
                            className="w-full border border-gray-300 p-2 rounded mt-1" 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Reg. No.</label>
                        <input 
                            type="number" 
                            placeholder="Enter Reg. No." 
                            className="w-full border border-gray-300 p-2 rounded mt-1" 
                            onChange={(e) => setQuantity(e.target.value)} 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Status</label>
                        <input 
                            type="text" 
                            placeholder="Enter status" 
                            className="w-full border border-gray-300 p-2 rounded mt-1" 
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add New Attendance</button>
                    </div>
                </form>

                

                <ToastContainer 
                    position="top-left" 
                    autoClose={2000} 
                    hideProgressBar={false} 
                    closeOnClick={true} 
                    transition={Bounce} 
                    theme="dark" 
                />
            </div>
        </>
    );
}

export default AddProducts;
