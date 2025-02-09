import React from 'react'

const ServiceInvoice = (props) => {
  return (
    <div>
     {props.data.map((e)=>{
        return <div  className="flex  justify-center items-center  mt-3 border-6  border-purple-500 w-[50%] h-50 ">

        <p>Invoice:</p>
        <div className="p-6  text-black">
        <h1 className='p-2 border-gray-500 border-2'><b>Client Name:</b>{e.name}</h1>
        <h1 className='p-2 border-gray-500 border-2'><b>Service: </b> {e.service} </h1>
        <h1 className='p-2 border-gray-500 border-2'><b>Price:</b> {e.price}</h1>
        <h1 className='p-2 border-gray-500 border-2'><b>Date: </b>{e.date} </h1>  
            </div>
        </div>
     })}
    </div>
  )
}

export default ServiceInvoice