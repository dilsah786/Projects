// Create a context
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [indexForData, setIndexForData] = useState(0);
  const [items,setItems] = useState([]);




  const getIndexForSingleData = (idx) => {
    setIndexForData(idx);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://test.api.boxigo.in/sample-data/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.Customer_Estimate_Flow);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      let newData = data.map((d, index) => {
        if (index === indexForData) {
          setSingleData(JSON.parse(JSON.stringify(d)));
        }
        return d;
      });
    }
    setItems(singleData.items)
  }, [data, indexForData]);

  

  localStorage.setItem("SingleItemDetails", JSON.stringify(singleData));

  return (
    <DataContext.Provider value={{ data, singleData, getIndexForSingleData }}>
      {children}
    </DataContext.Provider>
  );
};
