import React, { useState } from 'react'
import useFetch from '../customhooks/useFetch'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {data : u } = useFetch('http://localhost:8000/users');
    const {data : c} = useFetch('http://localhost:8000/company');

    const [inputEmail , setInputEmail] = useState('')
    const [inputPassword , setInputPassword] = useState('')

    const navigate = useNavigate();


    function handleInputEmail(e){
        setInputEmail(e.target.value);
    }
    function handleInputPassword(e){
        setInputPassword(e.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="email" 
                required 
                onInput={handleInputEmail}
                value={inputEmail}
            />
            <input 
                type="password" 
                required
                onInput={handleInputPassword}
                value={inputPassword}
            />
            <input type="submit" />
        </form>
    )

    function onSubmit(e){
        e.preventDefault();

        let userinfo = u.filter((userData) => {
            return inputEmail === userData.email && inputPassword === userData.password
        })
        let companyinfo = c.filter((companyData) => {
            return inputEmail === companyData.email && inputPassword === companyData.password
        })
        localStorage.clear();
        sessionStorage.clear();
        if (userinfo.length === 1) {
            localStorage.setItem('userData', JSON.stringify(userinfo));
            sessionStorage.setItem('userActive' , true);
            navigate('/');
        }
        else if(companyinfo.length === 1){
            localStorage.setItem('COMPANYData', JSON.stringify(companyinfo));
            sessionStorage.setItem('companyActive' , true);
            navigate('/dashboard');
        }
    }


}

export default Login
