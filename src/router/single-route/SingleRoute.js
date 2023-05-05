import React from 'react'
import "./SingleRoute.css"
import { useParams } from "react-router-dom"
import { DATA_TYP } from '../../components/product/Product'
import { DATA } from "../../components/product/Product"
import { ADD_TO_HEART, REMOVE_FROM_HEART } from '../../page/action/actionType'
import { useDispatch, useSelector } from 'react-redux'
import { BsTelegram } from "react-icons/bs"
import { MdOutlineShoppingBasket } from "react-icons/md"
import { AiFillStar,AiFillHeart, AiFillFacebook, AiFillTwitterCircle,AiOutlineHeart, AiOutlineWhatsApp } from "react-icons/ai"
import { FiMessageSquare } from "react-icons/fi"
// import { useLocation } from 'react-router-dom'
import { GoChecklist } from 'react-icons/go'
function SingleRoute() {
  let params = useParams()
  const onItem = DATA?.find((onItem) => onItem.id === params.id)
  const oneItem = DATA_TYP?.find((oneItem) => oneItem.id === params.id)
  console.log(onItem);
  const dispatch = useDispatch()
  const heart = useSelector(s => s.heart)
  if (!onItem) {
    return <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>Mahsulot topilmadi</p>
    </div>
  }
  return (
    <>
      <div className="all">
        <div className="all__img">

          <div className="img">
            <div className="im">
              <img className='imm' src={onItem?.url} alt="" />
            </div>
            <div className="im">
              <img className='imm_m' src={onItem?.url} alt="" />
            </div>
            <div className="im">
              <img className='imm_m' src={onItem?.url} alt="" />
            </div>
          </div>
          <div className='SingleRoute'>
            <img className='single__img' src={onItem?.url} width={370} height={350} alt="" />
          </div>
        </div>
        <div className="SingleRoute__work">
          <div className="singel__park">
            <h2>{onItem?.title}</h2>
            <p>{onItem?.pirce} so'm<del>{onItem.pirce * 1.2} so'm</del></p>
            <j><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <p><FiMessageSquare className='icon__fi' /> 0 ta sharh</p></j>
            <h3>Brend: <span>{oneItem.brend}</span></h3>
            <h4>Miqdor: <span>Sotuvda bor</span></h4>
            <icon>Ulashish: <span><AiFillFacebook className='facebook' /><BsTelegram className='telegram' /><AiFillTwitterCircle className='twiter' /><AiOutlineWhatsApp className='whatsap' /></span></icon>
            <div className="bt">
              <button className='bt2' onClick={() => dispatch({ type: "ADD_TO_CART", payload: oneItem })}><MdOutlineShoppingBasket className='md_shop' /> Savatchaga qo'sh</button>
              <button className='bt1'>Bir kilikda olish</button>
            </div>
          </div>
        </div>
        {
          heart?.some(i => i.id === oneItem.id) ?
            <AiFillHeart className='heart' onClick={() => dispatch({ type: REMOVE_FROM_HEART, payload: oneItem })} />
            :
            <AiOutlineHeart className='heart' onClick={() => dispatch({ type: ADD_TO_HEART, payload: oneItem })} />
        }
      </div>
    </>
  )
}

export default SingleRoute