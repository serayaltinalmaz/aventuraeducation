import React, { useEffect } from 'react'
import Lottie from 'react-lottie-player';
import register from "../lotties/register.json";
import "../pages/Register.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '../component/Button';
import InputComponent from '../component/InputComponent';
const Registerpage = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required("Ad zorunludur"),
        surname: Yup.string().required("Soyad zorunludur"),
        mail: Yup.string().email("Geçerli bir e-posta adresi girin").required('E-posta zorunludur'),
        username: Yup.string().required('Kullanıcı adı zorunludur').max(15, 'Kullanıcı adı en fazla 15 karakter olmalıdır.'),
        password: Yup.string()
            .required('Şifre zorunludur')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Şifre en az bir büyük harf, bir sayı ve bir noktalama işareti içermelidir.'
            ),
        passwordagain: Yup.string()
            .required('Şifre tekrarı zorunludur')
            .oneOf([Yup.ref('password')], 'Şifreler eşleşmelidir'),
        acceptTerms: Yup.boolean()
        .oneOf([true], 'Gizlilik sözleşmesini kabul etmelisiniz.')
        .required('Gizlilik sözleşmesini kabul etmelisiniz.')
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            mail: "",
            username: "",
            password: "",
            passwordagain: "",
            acceptTerms: false,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(values);
        }
    })
    useEffect(() => {
    console.log(formik.errors)
    }, [formik])
    
    return (
        <div className='registerpage' style={{ minHeight: "100vh" }}>
            <div className='registercontainer'>
                <div className='reg-animation'>
                    <Lottie
                        animationData={register}
                        play
                        style={{ width: 400, height: 400 }}
                    />
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='reg-info'>
                        <InputComponent label="Ad"
                        className="info"
                            type='text'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors["name"]}
                        />

                        <InputComponent label="Soyad"
                        className="info"
                            type='text'
                            name='surname'
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors["surname"]}
                        />
                        
                        <InputComponent label="E-Posta"
                        className="info"
                            type='email'
                            name='mail'
                            value={formik.values.mail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors["mail"]}
                        />

                        <InputComponent label="Kullanıcı Adı"
                        className="info"
                            type='text'
                            name='username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors["username"]}
                        />
                        
                        <InputComponent label="Şifre"
                        className="info"
                            type='password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors["password"]}
                        />
                        
                        <InputComponent label="Şifre Tekrar"
                        className="info"
                            type='password'
                            name='passwordagain'
                            value={formik.values.passwordagain}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors["passwordagain"]}
                        />
                        
                        <div className='privacy'>
                            <input
                                type='checkbox'
                                name='acceptTerms'
                                checked={formik.values.acceptTerms}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                                <div className="error-message">{formik.errors.acceptTerms}</div>
                            )}
                            <p><Link to="privacy"> Gizlilik sözleşmesini</Link> kabul ediyorum.</p>
                        </div>
                        <Button label="Kaydet" type="submit" className="savebutton" disabled={!formik.isValid} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registerpage