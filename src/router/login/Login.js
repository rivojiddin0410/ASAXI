import React, { useState } from 'react'
import './Login.css'

const Login = () => {


    return (
        <div >
            <div className="log_in_page">
                <div className="login_box">
                    <h1 className='login_text'>Telefon raqamini kiriting</h1>
                    <p className='login_title'>Tasdiqlash kodini SMS orqali yuboramiz</p>
                    <input required type="number" placeholder="Phone number" />
                    <br />
                    <input required type="text" placeholder="ism" />
                    <br />
                    <button>Kodni olish</button>
                    <br />
                    <a className='login_password_title' href="">Parol bilan kirish</a>
                    <br />
                    <p className='login_info'>Avtotizatsiyadan o'tish orqali siz <a href="#">shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz</a></p>
                </div>
            </div>

        </div>
    )
}

export default Login
