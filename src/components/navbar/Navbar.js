import React, {useState} from 'react'
import "./Navbar.css"
import { FiSearch, FiLoader } from "react-icons/fi"
import { CgCreditCard } from "react-icons/cg"
import { TbBusStop } from "react-icons/tb"
import {ImCross} from "react-icons/im"
import { AiOutlineHeart,AiOutlineRight, AiOutlineUser, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai"
import { NavLink, useLocation } from 'react-router-dom'


function Navbar() {
  const {pathname} = useLocation()
  const [division, setDivision] = useState(false)
  const NAVBAR_DATA = [
    "Barcha bo'limlar",
    "Yangiliklar",
    "Yangi kelganlar",
    "Chegirmalar",
    "Kitoblar",
    "Telefonlar va gadjetlar",
    "Televizorlar",
    "Gajetlar",
    "Mashina uchun qismlar"
  ]
  
  const WRAPPER_DATA = [
    { title: "Ramazon chegirmalari" },
    { title: "Kitoblar" },
    { title: "Telefon va gadjetlar" },
    { title: "Kompyuter texnologiyasi" },
    { title: "Iqlim tenologiyasi" },
    { title: "Maishiy texnika" },
    { title: "Televizorlar" },
    { title: "Idish tovoqlar" },
    { title: "Mebel" },
    { title: "Sport va dam olish" },
    { title: "Uy va ofis uchun texnika va jihozlar " },
    { title: "avto" },
    { title: "O'yinchoqlar, sovg'alar" },
    { title: "Kiyim, poyabzal va aksessuarlar" },
    { title: "Bolalar uchun tovarlar" },
    { title: "Go'zalik va salomatlik" },
    { title: "Geymerlar uchun" },
    { title: "Spotchilar uchun" }
]


const WRAPPER_RIGHT_PAGE_DATA = [
    {
        title: "Smartfon va telefonlar",
        names: "Aksessurlar va ehtiyot qismlar",
        names2: "Smartfonlar",
        names3: "Knopkali telefonlar",
        names4: "DECT-telefonlar"
    },
    {
        title: "Smartfon va telefonlar",
        names: "Aksessurlar va ehtiyot qismlar",
        names2: "Smartfonlar",
        names3: "Knopkali telefonlar",
        names4: "DECT-telefonlar"
    },
    {
        title: "Smartfon va telefonlar",
        names: "Aksessurlar va ehtiyot qismlar",
        names2: "Smartfonlar",
        names3: "Knopkali telefonlar",
        names4: "DECT-telefonlar"
    },
    {
        title: "Smartfon va telefonlar",
        names: "Aksessurlar va ehtiyot qismlar",
        names2: "Smartfonlar",
        names3: "Knopkali telefonlar",
        names4: "DECT-telefonlar"
    },
    {
        title: "Smartfon va telefonlar",
        names: "Aksessurlar va ehtiyot qismlar",
        names2: "Smartfonlar",
        names3: "Knopkali telefonlar",
        names4: "DECT-telefonlar"
    },
    {
        title: "Smartfon va telefonlar",
        names: "Aksessurlar va ehtiyot qismlar",
        names2: "Smartfonlar",
        names3: "Knopkali telefonlar",
        names4: "DECT-telefonlar"
    }
]
  if( pathname.includes("admin") ){
    return <></>
}

  return (
    <div className='navbar'>
      <div className="container">

      <div className="navbar__img">
        <NavLink to={"/"} className="nav__logo">
          <button className='nav__catalogg'>
            <AiOutlineMenu />
            <span>Barcha bo'limlar</span>
          </button>
          <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />
        </NavLink>
        <div className="nav__search">
          <input type="text" placeholder='Qidirish ...' />
          <button>
            <FiSearch />
          </button>
        </div>
        <div className="nav__child">
          <NavLink to={"/"} className='nav__item'>
            <CgCreditCard />
            <div className="nav__span">
              <span>To'lov</span>
            </div>
          </NavLink>
          <NavLink className="nav__item ">
            <TbBusStop />
            <div className="nav__span">
              <span>Trek</span>
            </div>
          </NavLink>
          <NavLink className="nav__item col">
            <AiOutlineGlobal />
            <div className="nav__span">
              <span>Inglis</span>
            </div>
          </NavLink>
          <NavLink to={"/cart"} className="nav__item">
            <AiOutlineShoppingCart />
            <div className="nav__span">
              <span>Savatcha</span>
            </div>
          </NavLink>
          <NavLink to={"/wishlist"} className="nav__item col">
            <AiOutlineHeart />
            <div className="nav__span">
              <span>Sevimlilar</span>
            </div>
          </NavLink>
          <NavLink to={"/login"} className="nav__item">
            <AiOutlineUser />
            <div className="nav__span">
              <span>Kirish</span>
            </div>
          </NavLink>
        </div>
      </div>
      <hr  />
      <div className="navbar__below">
        <ul className="nav__collection">
        <button onClick={() => setDivision(!division)} className="nav__section">
                    {
                        division ? <ImCross /> : <AiOutlineMenu />
                    }
                </button>
          {
            NAVBAR_DATA?.map((el, inx) => <li key={inx} className="nav__col-item">{el}
  
             </li>)
          }

        </ul>
      </div>
      <hr />
      </div>
{


                division ? <div className="katalog__page container">
                    <div className="parent">
                        <div className="parent__left">
                            <ul className='parent__left__box'>
                                {
                                    WRAPPER_DATA?.map((items, inx) =>
                                        <li key={inx} className="parent__left__child">
                                            <div className="parent__left__children">
                                                <div className="parent__left__logo">
                                                  <FiLoader style={{color: "red"}}/>
                                                </div>
                                                {items.title}
                                            </div>
                                            <AiOutlineRight />
                                        </li>
                                    )
                                }

                            </ul>
                        </div>
                        <div className="parent__right">
                            <h1 className='parent__right__nickname'>Elektronika <AiOutlineRight /></h1>
                            <div className="parent__right__boxcontainer">
                                {
                                    WRAPPER_RIGHT_PAGE_DATA?.map((items) => (
                                        <div className="parent__right__boxs">
                                            <h2 className='parent__right__container__title'>{items.title}</h2>
                                            <ul className="parent__right__container">
                                                <li className="parent__right__items">{items.names}</li>
                                                <li className="parent__right__items">{items.names2}</li>
                                                <li className="wrapper__right__items">{items.names3}</li>
                                                <li className="wrapper__right__items">{items.names4}</li>
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> : ""
            }


    </div>
  )
}

export default Navbar