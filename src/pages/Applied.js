import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import man from '../images/apply.png'
function Applied() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [Experience, setExperience] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [Location, setLocation] = useState('');
  const [Qualification, setQualification] = useState('');
  const [Cv, setCv] = useState('');
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');
  const { jobid, companyid, jobLevel, typeOfEmployment, title, name } = useParams();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    setCurrentDate(formattedDate);
  }, []);

  let userData = localStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const application = {
      companyid: companyid,
      jobid: jobid,
      firstname,
      lastname,
      email: userData[0].email,
      major: title,
      birthday,
      status: 'pending',
      phonenumber,
      timeOfApply: currentDate,
      jobRole: typeOfEmployment,
      joblevel: jobLevel,
      Experience,
      Location,
      Qualification,
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
        <Header />
        <div id='AplliedContent'>
        <form onSubmit={handleSubmit} id='appliedForm'>
        <h1 id='applyNow'>Apply Now</h1>
        <div className='row g-4 AppliedPageForm'>
        <div className="col-md-6 input-box">
        <label>Company Name</label>
        <input
            type="text"
            required
            value={name}
            disabled
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Job Title</label>
        <input
            type="text"
            required
            value={title}
            disabled
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Job Role</label>
        <input
            type="text"
            required
            value={typeOfEmployment}
            disabled
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Job Level</label>
        <input
            type="text"
            required
            value={jobLevel}
            disabled
          />
        </div>
        <div className="col-md-6 input-box">
        <label>First Name</label>
          <input
            type="text"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Last Name</label>
          <input
            type="text"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Birthday</label>
          <input
            type="date"
            required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Location</label>
          <input
            type="text"
            required
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Phone Number</label>
          <input
            type="text"
            required
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Experience</label>
          <input
            type="text"
            required
            value={Experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="col-md-12 input-box">
        <label>Qualification</label>
          <textarea
            type="text"
            required
            value={Qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Cv</label>
          <input
            type="text"
            required
            value={Cv}
            onChange={(e) => setCv(e.target.value)}
          />
        </div>
        <div className="col-md-6 input-box">
        <label>Time of Apply</label>
          <input
            type="text"
            required
            value={currentDate}
            disabled
          />
        </div>
          <button type="submit" id='submit'>Submit</button>
        </div>
        </form>
        <img src={man} alt='man' id="man"/>
        </div>
        
        <Footer />
      
    </div>
  );
}

export default Applied;
