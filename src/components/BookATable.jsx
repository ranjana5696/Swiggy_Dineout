import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import Resturants from './Resturants'
import { MyContext } from './ApiContextData'
import Loader from './Loader'

function BookATable() {

  const { loading } = useContext(MyContext);

  return (
    <>
      <Header />
          {loading ? <Loader/> : <Resturants title={'All Resturants'} />}
      <Footer />
    </>
  )
}

export default BookATable
