import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate,useParams } from 'react-router-dom';

function Applied() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');
  const { jobid ,companyid,jobLevel,typeOfEmployment,title,email} = useParams();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const application = {
      companyid:companyid ,
      jobid: jobid,
      firstname,
      lastname,
      email: email,
      major: title,
      birthday,
      status: "pending",
      phoneNumber,
      timeOfApply: currentDate,
      jobRole: typeOfEmployment,
      JobLevel: jobLevel,
    };
    fetch('http://localhost:5000/application/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(application),
    })
      .then(() => {
        navigate('/findJob');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
 return (
    <div id="AppliedPage">
      <div id="contentAppliedPage">
        <Header />
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          <br />
          <label>Last Name</label>
          <input
            type="text"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <br />
          <label>Birthday</label>
          <input
            type="date"
            required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <br />
          <br />
          <label>Phone Number</label>
          <input
            type="text"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default Applied;
