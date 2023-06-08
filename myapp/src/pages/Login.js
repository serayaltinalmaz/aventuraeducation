import React from 'react';
import Lottie from 'react-lottie-player';
import kopke from "../lotties/kopke.json";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';


const Login = () => {

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        username: Yup.string().required('Kullanıcı adı zorunludur').max(15, 'Kullanıcı adı en fazla 15 karakter olmalıdır.'),
        password: Yup.string()
            .required('Şifre zorunludur')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Şifre en az bir büyük harf, bir sayı ve bir noktalama işareti içermelidir.'
            )
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            LoginNavigate();
        },
    });
    const LoginNavigate = () => {
        navigate("/products");
    };

    return (
        <div className='login-background' style={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}>
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
                        <p className='username-password'>Kullanıcı Adı</p>
                        <input
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
                        <p className='username-password'>Şifre</p>
                        <input
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
                    <button
                        type="submit"
                        className='loginbutton'
                        disabled={!formik.isValid}
                    >
                        Giriş Yap
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Login;
