import React, { useEffect, useState,useContext } from 'react'
import { DataContext } from '../context/DataProvider';
import InVoice from './InVoice'
import ServiceInvoice from './ServiceInvoice';
const Search = () => {
    const [client, setClient] = useState('');
    const [byService, setByService] = useState('');
    const [userData,setUserData]=useContext(DataContext);
    const [foundClient,setFoundClient]=useState(null)
    const [filteredClients,setFilteredClients]=useState([]);


    const handleSearch=()=>{
        const matchedClient=userData.find((e)=>e.name.toLowerCase()===client.toLowerCase());
        
        if (matchedClient) {
            setFoundClient(matchedClient); 
            
        } else {
            setFoundClient(null); 
            alert('Client not found!'); 
        }
    }

    const handleService=()=>{
        const matchedService=userData.filter((e)=>e.service===byService);
        if(matchedService.length>0){
            setFilteredClients(matchedService);
            setFoundClient(null);
        }
        else{
            setFilteredClients([]);
            alert("Service not found");
        }
    }
    useEffect(() => {
      console.log(filteredClients)
    }, [filteredClients])
    
    
    
  return (
    <div>
        <div>
            <input value={client} onChange={(e)=>{
                setClient(e.target.value)
            }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   w-1/2 p-2.5 mt-5 " placeholder="Search by Client"  />
            <button onClick={handleSearch} className="text-black bg-purple-400  font-medium rounded-lg text-sm w-20 h-10 mt-3 ml-2 hover:bg-purple-200">Search</button>
        </div>

        {foundClient&&<InVoice data={foundClient}/>}
        
        

        <div>
            <input type="text" value={byService} onChange={(e)=>{
                setByService(e.target.value);
            }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   w-1/2 p-2.5 mt-5 " placeholder="Search by Service"  />
            <button onClick={handleService} className="text-black bg-purple-400  font-medium rounded-lg text-sm w-20 h-10 mt-3 ml-2 hover:bg-purple-200">Search</button>
        </div>
        {filteredClients.length>0 && <ServiceInvoice data={filteredClients}/>} 
    </div>
  )
}

export default Search