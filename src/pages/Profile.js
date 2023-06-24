import React, { useState  } from 'react';
import {Link, useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
function Profile() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [jobTitle, setjobTitle] = useState('');
  const [birthday, setBirthday] = useState('');
  const [Status, setStatus] = useState('');
  const [Experience, setExperience] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [Location, setLocation] = useState('');
  const [Qualification, setQualification] = useState('');
  const [Education, setEducation] = useState('');
  const [Skills, setSkills] = useState('');
  const [jobRole, setjobRole] = useState('');
  const [Cv, setCv] = useState('');
//   const { jobid, companyid, jobLevel, typeOfEmployment, title, name } = useParams();
// let navigate=useNavigate();
let userData = localStorage.getItem('userData');
if (userData) {
userData = JSON.parse(userData);
}
    const handleSubmit = (e) => {
        e.preventDefault();
        const profileForm = {
          name: firstname+lastname,
          password: userData[0].password,
          email: userData[0].email,
          jobTitle,
          type: "user",
          avatar:"url",
          birthday,
          phonenumber,
          jobRole,
          Experience,
          Location,
          Qualification,
          Education,
          Skills,
          Cv,
        };
        localStorage.setItem('profileForm', JSON.stringify(profileForm));
        fetch('http://localhost:5000/users/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'  },
          body: JSON.stringify(profileForm),
        })
          .then(() => {
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
  return (
    <div id='profile'>
      <div className='row profile'>
        <div className='col-2' id='sidebar'>
            <img src='' alt='user Image'/>
            <p>{firstname} {lastname}</p>
        </div>
        <div className='col-10'>
            <form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <div className='row'>
                <div className="col-md-6 inputField">
                    <label>First Name</label>
                    <input
                    type="text"
                    required
                    value={firstname}
                    onChange={(e)=>{setFirstname(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Last Name</label>
                    <input
                    type="text"
                    required
                    value={lastname}
                    onChange={(e)=>{setLastname(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Location</label>
                    <input
                    type="text"
                    required
                    value={Location}
                    onChange={(e)=>{setLocation(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>birthday</label>
                    <input
                    type="date"
                    required
                    value={birthday}
                    onChange={(e)=>{setBirthday(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Status</label>
                    <select 
                    type="text"
                    required
                    value={Status}
                    onChange={(e)=>{setStatus(e.target.value)}}
                    >
                        <option>Single</option>
                        <option>Maried</option>
                    </select>
                </div>
                <div className="col-md-6 inputField">
                    <label>phone Number</label>
                    <input
                    type="text"
                    required
                    value={phonenumber}
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Work Experince</h2>
                <div className="col-md-6 inputField">
                    <label>Job title</label>
                    <input
                    type="text"
                    required
                    value={jobTitle}
                    onChange={(e)=>{setjobTitle(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Job Role</label>
                    <input
                    type="text"
                    required
                    value={jobRole}
                    onChange={(e)=>{setjobRole(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Education</label>
                    <input
                    type="text"
                    required
                    value={Education}
                    onChange={(e)=>{setEducation(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Experience</label>
                    <textarea
                    type="text"
                    required
                    value={Experience}
                    onChange={(e)=>{setExperience(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Skills</label>
                    <input
                    type="text"
                    required
                    value={Skills}
                    onChange={(e)=>{setSkills(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Cv</label>
                    <input
                    type="file"
                    required
                    value={Cv}
                    onChange={(e)=>{setCv(e.target.value)}}
                    />
                </div>
                <div className="col-md-6 inputField">
                    <label>Qualification</label>
                    <textarea
                    type="text"
                    required
                    value={Qualification}
                    onChange={(e)=>{setQualification(e.target.value)}}
                    />
                </div>
                </div>
                <br></br>
                <br></br>
                    {/* <Link to='/UpdateProfile'></Link> */}
                <button type="submit" id='submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}
export default Profile
