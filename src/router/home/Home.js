import React from 'react'
import Product from '../../components/product/Product';
import Banner from '../../components/banner/Banner';

import {db} from "../../server"
import { collection, getDocs } from 'firebase/firestore';
function Home() {

  // const [data, setData] = React.useState([])
  // const productsRef = collection(db, "blog")

  // React.useEffect(()=>{
  //   const fetchData = async()=>{
  //     const getData = await getDocs(productsRef)
  //     setData(getData.docs.map(i=> ({...i.data(), id: i.id})))
  //   }
  //   fetchData()
  // }, [])

  return (
    <div>
      <Banner />
      <div className="container">
        <Product  />
      </div>
    </div>
  )
}

export default Home