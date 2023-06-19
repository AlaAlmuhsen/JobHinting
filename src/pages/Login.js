import React, { useState } from 'react'
import useFetch from '../customhooks/useFetch'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const {data : u , ispending} = useFetch('http://localhost:8000/users');
    const {data : c , isPending} = useFetch('http://localhost:8000/company');
    const [usertype , setUserType] = useState('');

    const [inputEmail , setInputEmail] = useState('')
    const [inputPassword , setInputPassword] = useState('')

    const navigate = useNavigate();

    // const [userInfo , setUserInfo] = (null);

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
            return inputEmail == userData.email && inputPassword == userData.password
        })
        if (userinfo.length === 1) {
            setUserType('user');
            localStorage.setItem('userData', JSON.stringify(userinfo));
            sessionStorage.setItem('userActive' , true);
            navigate('/');
        }
        else {
            setUserType('');
        }
    }


}

export default Login
