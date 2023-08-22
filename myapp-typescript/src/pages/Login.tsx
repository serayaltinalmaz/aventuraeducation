import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import kopke from "../lotties/kopke.json";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../mycss/Login.css';
import Button from '../component/Button';
import InputComponent from '../component/InputComponent';
import axios from 'axios';
import loginanimation from "../lotties/loginanimation.json"
const Login = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        username: Yup.string().required('Kullanıcı adı zorunludur').max(15, 'Kullanıcı adı en fazla 15 karakter olmalıdır.'),
        password: Yup.string().required('Şifre zorunludur')
    });
    const LoginNavigate = () => {
        navigate("/products");
    };
    const RegisterNavigate = () => {
        navigate("/register");
    };
    const [loginLoading, setLoginLoading] = useState(false);

    const getLogin = async () => {
        const apiUrl = 'https://fakestoreapi.com/auth/login';
        try {
            const response = await axios.post(
                apiUrl,
                {
                    username: formik.values.username,
                    password: formik.values.password
                },
            );
            console.log(response);
            if(response.data.token){
                localStorage.setItem("token key",response.data.token)
                setLoginLoading(false);
                LoginNavigate();
            }
        } catch (error:any) {
            alert(error.response.data)
        }
    };
    
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async () => {
            setLoginLoading(true);
            getLogin()
        },
    });
    
    return (
        <div className='login-background' style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
            {loginLoading ? <Lottie
                animationData={loginanimation}
                play
                style={{ width: 510, height: 510 }}
        /> : 
    <form onSubmit={formik.handleSubmit}>
        <div className='kopke'>
            <Lottie
                animationData={kopke}
                play
                style={{ width: 200, height: 200 }}
            />
        </div>
        <div className='logincontainer'>
            <div className='username'>
                <InputComponent label="Kullanıcı Adı"
                    type="text"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                    <div className="error-message">{formik.errors.username}</div>
                )}
            </div>
            <div className='password'>
                <InputComponent label="Şifre"
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="error-message">{formik.errors.password}</div>
                )}
            </div>
            <div className='buttons'>
            <Button label="Giriş Yap" type="submit" className="loginbutton" disabled={!formik.isValid}  />
            <Button label="Kaydol" className="registerbutton" onClick={RegisterNavigate} />
            </div>
        </div>
    </form> }
        </div>

    );
};

export default Login;
