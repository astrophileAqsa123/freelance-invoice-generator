import React from 'react';
import { jsPDF } from "jspdf";

const InVoice = (props) => {

  const handleDownload = (e, props) => {
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
    doc.text(`Client: ${props.data.name}`, 10, 40);
    doc.text(`Service: ${props.data.service}`, 10, 60);
    doc.text(`Price: $${props.data.price}`, 10, 80);
    doc.text(`Date: ${props.data.date}`, 10, 100);
    
    doc.save("invoice.pdf"); 
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <p className="text-xl font-semibold text-center text-purple-500 mb-4">Invoice</p>
        <div className="space-y-2">
          <h1 className="text-lg font-medium text-gray-700">
            <b>Client Name:</b> {props.data.name}
          </h1>
          <h1 className="text-lg font-medium text-gray-700">
            <b>Service:</b> {props.data.service}
          </h1>
          <h1 className="text-lg font-medium text-gray-700">
            <b>Price:</b> ${props.data.price}
          </h1>
          <h1 className="text-lg font-medium text-gray-700">
            <b>Date:</b> {props.data.date}
          </h1>
        </div>
        <div className="flex justify-center mt-4">
          <button 
            onClick={(e) => handleDownload(e, props)} 
            className="bg-purple-500 text-white rounded-md py-2 px-6 hover:bg-purple-400 transition duration-300"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default InVoice;
