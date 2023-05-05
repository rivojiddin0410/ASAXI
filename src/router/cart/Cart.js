import React, { useState, useRef } from 'react'
import Empty from '../../components/empty/Empty'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { MdCleaningServices } from 'react-icons/md'


const BOT_TOKEN = "6118574510:AAEt8p_nLt_0FSVmNrROtM26Tn9rW4KZZzg"
const CHAT_ID = "-1001971778228"

// "CHAT_ID"ni olish
// https://api.telegram.org/bot6177477299:AAGxctBJLmZ3iEaFH_0VTtU8vi0bja-ze5k/getUpdates

// xabar yuborish
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Cart = () => {
    const cart = useSelector(s => s.cart)
    const dispatch = useDispatch()

    // useState yordamida qiymat olsak - Controlled form
    const [ name, setName ] = useState("")
    // useRef yordamida qiymat olsak - Uncontrolled form
    const tel = useRef()
    const address = useRef()

    const handleSubmitMsg = ()=>{
        let text = ""
        text += `Ismi: <b>${name}</b> %0A`
        text += `Tel: <b>${tel.current.value}</b> %0A`
        text += `Manzil: <b>${address.current.value}</b>  %0A%0A`

        cart?.forEach(item => {
            text += `Nomi: ${item.title} %0A`
            text += `Narxi: ${item.price} %0A`
            text += `Miqdori: ${item.quantity} %0A%0A`
        })
        text += `Jami: ${cart?.reduce((a,b)=> a+(b.price * b.quantity), 0)}`

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`

        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
        dispatch({type: "REMOVE_ALL_FROM_CART"})
    }











    let totalPirce = 0;
    for (let i = 0; i < cart.length; i++) {
        let itemTotalPirce = cart[i].pirce * cart[i].quantity;
        totalPirce += itemTotalPirce;
    }
    return (
        <div>

            {/* <h2>{cart?.reduce((a, b) => a + (b.price * b.quantity), 0)}</h2> */}
            {/* second version of getting total price */}

            {
                cart.length === 0 ?
                    <Empty
                        url="https://uzum.uz/static/img/shopocat.8cee444.png"
                        title="Savatda hozircha mahsulot yoʻq"
                        desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
                        btn="Bosh sahifa" />
                    :
                    <div className="cart_container container">
                        <div className="left_side_of_cart">
                            <div className="clear_all_cart" onClick={() => dispatch({ type: "REMOVE_ALL_FROM_CART" })}>
                                <button><span><MdCleaningServices /></span> Barchasini tozalash</button>
                            </div>
                            {cart?.map((item, inx) =>
                                <div className="cart_box" key={inx}>
                                    <div className="cart_product_img">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="cart_product_details">
                                        <p className='cart_product_name'>{item.title}</p>
                                        <p className='cart_product_name'>Sotuvchi : BEST PRODUCT</p>
                                    </div>

                                    <div className="cart_product_counters">
                                        <div className="cart_product_price_details">
                                            <button className="cart_inc_btn" onClick={() => dispatch({ type: "DEC_FROM_CART", payload: item })}>-</button>
                                            <p>{item.quantity}</p>
                                            <button className="cart_dec_btn" onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>+</button>
                                        </div>
                                    </div>

                                    <div className="cart_price_section">
                                        <p className='cart_price'>{item.pirce * item.quantity} so'm</p>
                                        <button className='cart_remove_button' onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}><BsFillTrashFill />Yo'q qilish</button>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div className="right_side_of_cart">
                            <div className="delivery_info_cart">
                                <h2>
                                    Savatdagi mahsulotlar soni 
                                </h2>
                                <p>Jami miqdor {500000 - totalPirce} so'm</p>
                            </div>
                            <div className="send_info_cart">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Ism' />
                                <input ref={tel} className='number_cart' type="number" placeholder='Telfon raqam' />
                                <input ref={address} type="text" placeholder='Adress' />
                                <button onClick={handleSubmitMsg}>Buyurtma </button>
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}

export default Cart



// import React, {useState,useRef} from 'react'
// import Empty from '../../components/empty/Empty'
// import "./Cart.css"
// import { useSelector, useDispatch } from 'react-redux'
// import { ADD_TO_CART, DECREMENT_FROM_CART, REMOVE_FROM_CART } from '../../page/action/actionType'


// const BOT_TOKEN = "6118574510:AAEt8p_nLt_0FSVmNrROtM26Tn9rW4KZZzg"
// const CHAT_ID ="-1001971778228"


// // CHAT_ID ni olish
// //https://api.telegram.org/bot6118574510:AAEt8p_nLt_0FSVmNrROtM26Tn9rW4KZZzg/getUpdates

// // xabar yuborish
// //https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]
// function Cart() {
//   const dispatch = useDispatch()

//   const cart = useSelector(s => s.cart)


//   //useState yordamida qiymat olSAK - Controlled form

//   const [name, setName] = useState("")

  
//   //useRef yordamida qiymat olSAK - Uncontrolled form

//   const tel = useRef()

//   const adress = useRef()





//   const handleSubmitMsg = ()=>{
//     let text = ""
//     text += `Ism: <b>${name}</b> %0A.`
//     text += `Tel: <b>${tel.current.value}</b> %0A`
//     text += `Manzil: <b>${adress.current.value}</b> %0A`

//     cart?.forEach(item => {
//       text += `Ism: ${item.title} %0A.`
//       text += `Tel: ${item.pirce} %0A`
//       text += `Manzil: ${item.quantity} %0A`
//     })
//     text += `Jami: ${cart?.reduce((a,b) =>a+(b.pirce * b.quantity),0)}`


//     let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`

//     let api = new XMLHttpRequest()
//     api.open("GET", url, true)
//     api.send()
//     dispatch({type:REMOVE_FROM_CART})
//   }

//   return (
//     <div>
//       {
//         !cart.length ?
//           <Empty
//             url="https://uzum.uz/static/img/shopocat.8cee444.png"
//             title="Savatda hozircha mahsulot yoʻq"
//             desk="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
//             btn="Bosh sahifa"
//           /> :
//           <div className="container__all">
//             <h1>Savatingiz, <span>1 mahsulot</span></h1>
//             <div className="container__box">
//                   <div className="container__box__1">
//                     <h2 className='container__h2'>Hammasini yechish <span>Yetkazib berishning eng yaqin sanasi:</span></h2>
//                     <button>M04 1 (Erta)</button>
//                   </div>
//             {
//               cart?.map((item, inx) =>
//                 <div key={inx}>
//                   <hr className='hhr' />
//                   <div className="container__box__2">
//                     <img src={item?.url} width={80} alt="" />
//                     <div className="container__box__3">
//                       <p>{item?.title}</p>
//                       <div className="container__box__3__but">
//                       <h3>Sotuvchi: <span>Energy Life</span></h3>
//                       <div className="container__box__3__butt">
//                         <button onClick={() => dispatch({ type: DECREMENT_FROM_CART, payload: item })}>-</button>
//                         <span>{item?.quantity}</span>
//                         <button onClick={() => dispatch({ type: ADD_TO_CART, payload: item })}>+</button>
//                       </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>)
//             }
//             </div>
//             <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='ism'/>
//             <input ref={tel} type="number" placeholder='telfon raqam'/>
//             <input ref={adress} type="text"placeholder='Adress' />
//             <button onClick={handleSubmitMsg}>Buyertma berish</button>
//           </div>
//       }
//     </div>
//   )
// }

// export default Cart