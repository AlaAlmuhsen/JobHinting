import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useNavigate} from "react-router-dom";
function Applied() {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [major,setMajor]=useState('');
    const [birthday,setBirthday]=useState('');
    const [JobLevel,setJobLevel]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [jobRole,setJobRole]=useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const application = {firstname, lastname, email,major,birthday,JobLevel,phoneNumber,jobRole };
        fetch('http://localhost:5000/application/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application)
        }).then(() => {
          // history.go(-1);
          navigate('/');
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

            <label>email</label>
            <input
            type="text" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>birthday</label>
            <input
            type="text" 
            required
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>major</label>
            <input
            type="text"
            required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>status</label>
            <input
            type="text"
            required
            value={JobLevel}
            onChange={(e) => setJobLevel(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>phone number</label>
            <input/>
            <br></br>
            <br></br>

            <label>job Role</label>
            <input
            type="text"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>job level</label>
            <input
            type="text"
            required
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            />
            <button>submit</button>
        </form>
      <Footer/>
    </div>
  )
}

export default Applied
