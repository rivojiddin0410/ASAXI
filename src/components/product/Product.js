import React from 'react'
import "./Product.css"
import { AiOutlineShoppingCart,AiFillStar, AiOutlineHeart,AiOutlineRight, AiFillHeart } from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"
import { useDispatch, useSelector, } from 'react-redux'
import {FiMessageSquare} from "react-icons/fi"
import { ADD_TO_HEART, REMOVE_FROM_HEART, ADD_TO_CART } from "../../page/action/actionType"
import { Link } from "react-router-dom"
import {deleteDoc,doc} from "firebase/firestore"
import {db} from "../../server"

export const DATA = [
  {
    id: "pro-1",
    title: "Массажер для шеи Neck SKG N5  Массажер для шеи",
    pirce: 400_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/cdaa92fff7a21b6659521495b20c3e692023041311314585809lr9ofNl7ZU.png",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-2",
    title: "Телевизор Premier 50PRM800USV UHD Smart TV",
    pirce: 3000_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/1c395a8dce135849bd73c6dba3b548092022031810353611949v1BzRRVurW.jpg.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-3",
    title: "Сушильная машина BOSCH WTN8543SME",
    pirce: 160_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/b6d767d2f8ed5d21a44b0e5886680cb92021120911124663215O8PcOvkmCT.png.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-4",
    title: "Xiaomi Deerma DX900 Green changyutgichi",
    pirce: 22_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/3c048da7784c75683a823ef9d72a0aea2021082817551721511xa6BDF0SEK.jpg.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-5",
    title: "Стиральная машина Bosch WDU28590OE 10 Кг с сушкой",
    pirce: 19_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2021120409402884312kp4apF0ury.jpg.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-6",
    title: "Acer Aspire A315-59G-50FH, Core I5-1235U, DDR4 8GB, HDD 1000Gb,",
    pirce: 12_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/ff33f1b12213e021c2c4a888141953ba2022112700020697860h6haqHt6p0.jpg.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-7",
    title: "Стиральная машина Bosch WAX32MX0ME 10 Кг",
    pirce: 19_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b20220723115727937954aqLhXD4HD.jpg.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-8",
    title: "Смарт-часы Haylou RS489 PLUS Black chirne",
    pirce: 255_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/757b505cfd34c64c85ca5b5690ee52932022110815554697697zjh71q46Ge.png.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-9",
    title: "Стиральная машина BOSCH WAV28L91ME (9 Кг)",
    pirce: 11_000,
    url: "https://assets.asaxiy.uz/product/items/desktop/eccbc87e4b5ce2fe28308fd9f2a7baf32021120911080218182lJ7jneNzcb.jpg.webp",
    icons: <AiOutlineShoppingCart />
  },
  {
    id: "pro-10",
    title: "Стиральная машина Bosch WAV28K90ME 9 Кг",
    pirce: 9_000,
    url: "https://assets.asaxiy.uz/product/main_image/desktop//61aaf12ca0493.jpg.webp",
    icons: <AiOutlineShoppingCart />
  },
];
 export const DATA_TYP = [
  {
    id: "pro-1",
    brend: "Массажер для шеи Neck SKG N5"
  },
  {
    id: "pro-2",
    brend: "Телевизор Premier 50PRM800USV"
  },
  {
    id: "pro-3",
    brend: "Сушильная машина BOSCH"
  },
  {
    id: "pro-4",
    brend: "Xiaomi Deerma DX900 Green"
  },
  {
    id: "pro-5",
    brend: "Стиральная машина Bosch"
  },
  {
    id: "pro-6",
    brend: "Acer Aspire A315-59G-50FH,"
  },
  {
    id: "pro-7",
    brend: "Стиральная машина Bosch"
  },
  {
    id: "pro-8",
    brend: "Haylou Model: RS4 PLUS"
  },
  {
    id: "pro-9",
    brend: "Стиральная машина BOSCH"
  },
  {
    id: "pro-10",
    brend: "Стиральная машина Bosch"
  },
]


function Product({ data, admin, setRefresh }) {
  const dispatch = useDispatch()
  const heart = useSelector(s => s.heart)
  const handleDeletePro = async(id)=>{
      if (window.confirm("are you sure")) {
          await deleteDoc(doc(db, "blog", id))
          .then()
          .catch()
          .finally(()=>setRefresh(p=> !p))
      }
  }

  const deleteProduct = async(id)=>{
      await deleteDoc(doc(db, "blog", id))
  }

  return (
    <div className='product'>
      <p className='product__mintext'>Yangi chegirmalar</p>
      <div className="product__wrapper">
        {
          DATA?.map(item => ( <div className='product__card' >
            <Link to={`/product/${item.id}`} state={item} className="pro__card-img">
              <img src={item.url} alt="" />
            </Link>
            <p className='pro__card-title'>{item?.title}</p>
            <i className='icon'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <FiMessageSquare/></i>
            <del className='del'>{Math.round(item.pirce * 1.2)} so'm</del>
            <span className='pro__card-monthly'>{Math.round((item.pirce * 1.4) / 12)} so'm</span>

            <div className='pro__bottom'>
              <div  onClick={() => dispatch({ type: ADD_TO_CART, payload: item })} className='pro__cart'>
                <button className='pro__bts'>Bir kilikda olish</button>
              </div>
            </div>
            
            <div className="pro__heart">
            {
                                admin ? 
                                <button onClick={()=> handleDeletePro(item.id)}>Delete</button> 
                                :
                                <button className='add_to_cart'><HiOutlineShoppingBag onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })} /></button>
                            }
              {
                heart?.some(i => i.id === item.id) ?
                  <AiFillHeart className='ikonka' style={{ color: "#008DFF" }} onClick={() => dispatch({ type: REMOVE_FROM_HEART, payload: item })} />

                  :
                  <AiOutlineHeart className='ikonka' style={{ color: "black" }} onClick={() => dispatch({ type: ADD_TO_HEART, payload: item })} />
              }
            </div>
          </div>))
        }
      </div>

    </div>
  )
}
export default Product
