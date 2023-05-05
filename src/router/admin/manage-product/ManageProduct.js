import React from 'react'
import "../Admin.css"
import {db} from "../../../server"
import { useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import Product from "../../../components/product/Product"


function ManageProduct() {
//   const [data, setData] = React.useState([])
//   const [refresh, setRefresh] = useState(false)
// const productRef = collection(db, "products")
// React.useEffect(()=>{
//   const fetchData = async()=>{
//     const getData = await getDocs (productRef)
//     setData(getData.docs.map(i=> ( {...i.data(), id: i.id})))
//   }
//   fetchData()
  
//   }, [refresh])
//   console.log(data);
  return (
    <div>
        <h2>Manage Product</h2>
        
        {/* <Product setRefresh={setRefresh} admin={true} data={data}/> */}
    </div>
  )
}

export default ManageProduct

