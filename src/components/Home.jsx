import React, { useContext,useEffect,useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import BestOffers from './BestOffers'
import Resturants from './Resturants'
import Loader from './Loader'
import { MyContext } from './ApiContextData';
import Model from './Model'

function Home() {

  const { data, loading } = useContext(MyContext);
  const [currLocation,setCurrentLocation] = useState('')
  useEffect(()=>{
    setTimeout(() => {
      setCurrentLocation(localStorage.getItem("SelectedCity"));
    }, 3000);
  },[])
  


  return (
    <>  
        <Model/>
        <Header />
        <Banner />
        <BestOffers />
        {loading ? <Loader /> : <Resturants title={'Restaurants Near You'} itemsToShow={'4'} currLocation={currLocation} />}
        <Footer />
    </>
  )
}

export default Home;
