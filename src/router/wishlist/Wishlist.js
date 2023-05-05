import React from 'react'
import Empty from '../../components/empty/Empty'
import { AiOutlineShoppingCart, AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'
import "./Wishlist.css"
import { Link } from "react-router-dom"
import { FiMessageSquare } from "react-icons/fi"
import { ADD_TO_CART, REMOVE_ALL_FROM_HEART ,REMOVE_FROM_HEART } from '../../page/action/actionType'
function Wishlist() {
  const dispatch = useDispatch()
  const heart = useSelector(s => s.heart)
  return (
    <div className='wishlist'>
      {
        heart.length === 0 ?
          <Empty
            url="https://uzum.uz/static/img/hearts.cf414be.png"
            title="Sizga yoqqani qo'shing"
            desk="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qolad"
            btn="Akkountga kirish "
          />
          :
          <div className='wishlist__wrapper' >
            <button  onClick={() => dispatch({ type: REMOVE_ALL_FROM_HEART})}  className='wishlist__all__clean'>Barchasini tozalash</button>
            {
              heart?.map((item, inx) => <div className='' key={inx}>


                <div className="wishlist__all">

                  <img className='wishlist__img' src={item.url} alt="" />

                  <p >{item?.title}</p>


                    <del className=''>{Math.round(item.pirce * 1.2)} so'm</del>
                    <span className='wishlist__span'>{Math.round((item.pirce * 1.4) / 12)} so'm</span>

                  <div className="but">

                    <button onClick={() => dispatch({ type: ADD_TO_CART, payload: item })} className='wishlist__bts'>Savatchaga qo'shish</button>
                    <button onClick={() => dispatch({ type: REMOVE_FROM_HEART, payload: item })} className='wishlist__btn'>O'chirish</button>

                  </div>

                </div>

              </div>)
            }


          </div>


      }
    </div>
  )
}

export default Wishlist