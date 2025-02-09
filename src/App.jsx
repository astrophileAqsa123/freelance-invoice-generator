import { useEffect, useContext,useState } from 'react'

import Header from './components/Header'
import Form from './components/Form'
import InVoice from './components/InVoice'
import AllInvoices from './components/AllInvoices'
import Search from './components/Search'
import { DataContext } from './context/DataProvider';
function App() {
  const [currentView, setCurrentView] = useState('form'); // One state to manage the view
  const [userData,setUserData]=useContext(DataContext);


  const handleView = () => {
    setCurrentView('view'); // Switch to AllInvoices view
  };

  const handleSearchClick = () => {
    setCurrentView('search'); // Switch to Search view
  };

  const handleGenerateClick = () => {
    setCurrentView('form'); // Switch to Form view
  };
  
 
  
  return (
    <>
     <Header onViewClick={handleView} onSearchClick={handleSearchClick} onGenerateClick={handleGenerateClick}/>
      {currentView==='view'?(<AllInvoices/>):currentView==='search'?(<Search/>):(<Form/>)} 
     
     
    </>
  )
}

export default App
