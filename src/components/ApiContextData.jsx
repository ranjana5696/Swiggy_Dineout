import React, { createContext, useState, useEffect} from 'react'

export const MyContext = createContext();

const ApiContextData = ({children}) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchData = async () => {
          try {
            const response =  await fetch("https://dummyjson.com/users", {
              method:"GET"
            })
            if(response.ok) {
              const responseData = await response.json();
              setData(responseData.users);
            }
          } catch(error) {
            console.error("Error fetching restaurant data:", error);
          } finally {
            setLoading(false);
          }
        }
        fetchData();
      },[])

  return (
    <>
      <MyContext.Provider value={{ data, loading }}>
        {children}
      </MyContext.Provider>
    </>
  )
}

export default ApiContextData;
