import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useNavigate} from "react-router-dom";
function Applied() {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [birthday,setBirthday]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const application = {companyid:"3",jobid:"2",firstname, lastname, email:'email',major:"major",birthday,status:"status",phoneNumber,timeOfApply:"20/12/1999",jobRole:'jobRole',JobLevel:'JobLevel' };
        fetch('http://localhost:5000/application/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application)
        }).then(() => {
          // history.go(-1);
          navigate('/findJob');
        })
      }
  return (
    <div id='AppliedPage'>
      <Header/>
        <form onSubmit={handleSubmit}>
            <label>first name</label>
            <input
            type="text" 
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            />
            <br></br>
            <br></br>
            <label>last name</label>
            <input
            type="text" 
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            />
            <br></br>
            <br></br>
            <label>birthday</label>
            <input
            type="date" 
            required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            />
            <br></br>
            <br></br>
            <label>phone number</label>
            <input
            type="text"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br></br>
            <br></br>
            <button>submit</button>
        </form>
      <Footer/>
    </div>
  )
}

export default Applied
