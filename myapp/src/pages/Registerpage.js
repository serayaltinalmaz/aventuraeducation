import React from 'react'
import Lottie from 'react-lottie-player';
import register from "../lotties/register.json";
import "../pages/Register.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
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
                        <p className='info'> Ad </p>
                        <input
                            type='text'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="error-message">{formik.errors.name}</div>
                        )}
                        <p className='info'> Soyad </p>
                        <input
                            type='text'
                            name='surname'
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.surname && formik.errors.surname && (
                            <div className="error-message">{formik.errors.surname}</div>
                        )}
                        <p className='info'> E-Posta </p>
                        <input
                            type='email'
                            name='mail'
                            value={formik.values.mail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.mail && formik.errors.mail && (
                            <div className="error-message">{formik.errors.mail}</div>
                        )}
                        <p className='info'> Kullanıcı Adı </p>
                        <input
                            type='text'
                            name='username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username && (
                            <div className="error-message">{formik.errors.username}</div>
                        )}
                        <p className='info'> Şifre </p>
                        <input
                            type='password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="error-message">{formik.errors.password}</div>
                        )}
                        <p className='info'> Şifre Tekrar </p>
                        <input
                            type='password'
                            name='passwordagain'
                            value={formik.values.passwordagain}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.passwordagain && formik.errors.passwordagain && (
                            <div className='error-message'>{formik.errors.passwordagain}</div>
                        )}
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
                        <button
                            type='submit'
                            className='savebutton'
                            disabled={!formik.isValid}
                        > Kaydet </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registerpage