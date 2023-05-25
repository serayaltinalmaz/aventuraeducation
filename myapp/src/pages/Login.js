import React from 'react'
import Lottie from 'react-lottie-player'
import login from '../lotties/login.json'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const LoginNavigate = () => {
        navigate("/products");
        };
    return (
        <>
        <div className='loginlottie'><Lottie
                    animationData={login}
                    play
                    style={{ width: 200, height: 200 }} /></div>
        <div className='logincontainer'>
        <div className='username'>
            <p className='username-password'>Kullanıcı Adı</p>
            <input/>
        </div>
        <div className='password'>
            <p className='username-password'>Şifre</p>
            <input type='password'/>
        </div>
        <button className='loginbutton' onClick={LoginNavigate}>Giriş Yap</button>
        </div>
        </>
    )
}

export default Login