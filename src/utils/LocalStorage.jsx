const fakeData = [
    {
      name: "John Doe",
      service: "Website Design",
      price: 500,
      date: "2025-02-07"
    },
    {
      name: "Jane Smith",
      service: "E-commerce Website",
      price: 1200,
      date: "2025-02-05"
    },
    {
      name: "Bob Johnson",
      service: "SEO Optimization",
      price: 300,
      date: "2025-02-03"
    },
    {
      name: "Alice Brown",
      service: "App Development",
      price: 1500,
      date: "2025-02-01"
    }
  ];

  export const setLocalStorage=()=>{
    localStorage.setItem('invoices', JSON.stringify(fakeData));
  }

  export const getFromLocalStorage=()=> {
    const data = localStorage.getItem('invoices'); 
    
    if (data) {
      return JSON.parse(data); 
    } else {
      return null; 
    }
  }

  