


import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Form = () => {

    const [userData, setUserData] = useContext(DataContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { name, service, price, date };

        setUserData((prevUserData) => [...prevUserData, newData]); // ✅ Update state correctly

        setName("");
        setService("");
        setPrice("");
        setDate("");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-bold text-purple-500 mb-6">Invoice Generator</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Client Name:</label>
                        <input
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full rounded-md border-2 border-purple-500 py-2 px-4 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-purple-300"
                            type="text"
                            id="name"
                            placeholder="Client Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Provided:</label>
                        <input
                            value={service}
                            required
                            onChange={(e) => setService(e.target.value)}
                            className="mt-1 block w-full rounded-md border-2 border-purple-500 py-2 px-4 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-purple-300"
                            type="text"
                            id="service"
                            placeholder="Service Provided"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                        <input
                            value={price}
                            required
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 block w-full rounded-md border-2 border-purple-500 py-2 px-4 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-purple-300"
                            type="number"
                            id="price"
                            placeholder="Price"
                        />
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                        <input
                            value={date}
                            required
                            onChange={(e) => setDate(e.target.value)}
                            className="mt-1 block w-full rounded-md border-2 border-purple-500 py-2 px-4 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-purple-300"
                            type="date"
                            id="date"
                            placeholder="Date"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-purple-500 text-white py-3 px-4 rounded-md hover:bg-purple-400 focus:ring-2 focus:ring-purple-300 transition duration-300"
                        >
                            Generate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
