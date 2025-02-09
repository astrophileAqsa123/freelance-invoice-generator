import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { jsPDF } from "jspdf";

const AllInvoices = () => {
  const [userData, setUserData] = useContext(DataContext);
  
  const handleDownload = (e, element) => {
    e.preventDefault(); 

    const doc = new jsPDF(
      {
        orientation: "portrait",
        unit: "mm",
        format: [80, 120] // Width: 80mm, Height: 120mm (like a receipt)
      }
    );
    doc.setFontSize(16); 
    doc.text("Freelancer Invoice", 10, 20);
    doc.text(`Client: ${element.name}`, 10, 40);
    doc.text(`Service: ${element.service}`, 10, 60);
    doc.text(`Price: $${element.price}`, 10, 80);
    doc.text(`Date: ${element.date}`, 10, 100);
    
    doc.save("invoice.pdf"); 
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData.map((element, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <p className="text-xl font-semibold text-center text-purple-500 mb-4">Invoice</p>
            <div className="space-y-2">
              <h1 className="text-lg font-medium text-gray-700"><b>Client Name:</b> {element.name}</h1>
              <h1 className="text-lg font-medium text-gray-700"><b>Service:</b> {element.service}</h1>
              <h1 className="text-lg font-medium text-gray-700"><b>Price:</b> ${element.price}</h1>
              <h1 className="text-lg font-medium text-gray-700"><b>Date:</b> {element.date}</h1>
            </div>
            <div className="flex justify-center mt-4">
              <button 
                onClick={(e) => handleDownload(e, element)} 
                className="bg-purple-500 text-white rounded-md py-2 px-6 hover:bg-purple-400 transition duration-300"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInvoices;
