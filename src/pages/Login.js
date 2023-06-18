import React, { useState } from 'react'
import useFetch from '../customhooks/useFetch'

const Login = () => {

    const {data : u , ispending} = useFetch('http://localhost:8000/users');
    const {data : c , isPending} = useFetch('http://localhost:8000/company');
    const [usertype , setUserType] = useState('');
    return (
        <form onSubmit={onSubmit}>
            <input type="email" required/>
            <input type="password" required/>
            <input type="submit" />
        </form>
    )

    function onSubmit(e){
        e.preventDefault();
        let users = {
            ...u,
            ...c
        }
        console.log(users)
    }
}

export default Login
