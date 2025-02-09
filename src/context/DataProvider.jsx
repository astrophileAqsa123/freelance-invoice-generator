import React,{createContext, useEffect, useState} from 'react'
import { getFromLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const DataContext=createContext()
//localStorage.clear();
const DataProvider = ({children}) => {
    const [userData, setUserData] = useState([])
    
    useEffect(() => {
      const data = getFromLocalStorage();
      if (data) {
          setUserData(data); 
      } else {
          setLocalStorage(); 
          setUserData(getFromLocalStorage());
      }
  }, []);
    
  useEffect(() => {
    if (userData.length > 0) {
        localStorage.setItem("invoices", JSON.stringify(userData));
    }
}, [userData]);
   
  return (
    <div>
        <DataContext.Provider value={[userData,setUserData]}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default DataProvider