// import React, { useState  } from 'react';
// import {Link, useHistory } from 'react-router-dom';
// // import { useParams } from 'react-router-dom';
// function Profile() {
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [jobTitle, setjobTitle] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [Status, setStatus] = useState('');
//   const [Experience, setExperience] = useState('');
//   const [phonenumber, setPhoneNumber] = useState('');
//   const [Location, setLocation] = useState('');
//   const [Qualification, setQualification] = useState('');
//   const [Education, setEducation] = useState('');
//   const [Skills, setSkills] = useState('');
//   const [jobRole, setjobRole] = useState('');
//   const [Cv, setCv] = useState('');
// //   const { jobid, companyid, jobLevel, typeOfEmployment, title, name } = useParams();
// // let navigate=useNavigate();
// let userData = localStorage.getItem('userData');
// if (userData) {
// userData = JSON.parse(userData);
// }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const profileForm = {
//           name: firstname+lastname,
//           password: userData[0].password,
//           email: userData[0].email,
//           jobTitle,
//           type: "user",
//           avatar:"url",
//           birthday,
//           phonenumber,
//           jobRole,
//           Experience,
//           Location,
//           Qualification,
//           Education,
//           Skills,
//           Cv,
//         };
//         localStorage.setItem('profileForm', JSON.stringify(profileForm));
//         fetch('http://localhost:5000/users/', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json'  },
//           body: JSON.stringify(profileForm),
//         })
//           .then(() => {
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//       };
//   return (
//     <div id='profile'>
//       <div className='row profile'>
//         <div className='col-2' id='sidebar'>
//             <img src='' alt='user Image'/>
//             <p>{firstname} {lastname}</p>
//         </div>
//         <div className='col-10'>
//             <form onSubmit={handleSubmit}>
//                 <h2>Personal Information</h2>
//                 <div className='row'>
//                 <div className="col-md-6 inputField">
//                     <label>First Name</label>
//                     <input
//                     type="text"
//                     required
//                     value={firstname}
//                     onChange={(e)=>{setFirstname(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Last Name</label>
//                     <input
//                     type="text"
//                     required
//                     value={lastname}
//                     onChange={(e)=>{setLastname(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Location</label>
//                     <input
//                     type="text"
//                     required
//                     value={Location}
//                     onChange={(e)=>{setLocation(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>birthday</label>
//                     <input
//                     type="date"
//                     required
//                     value={birthday}
//                     onChange={(e)=>{setBirthday(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Status</label>
//                     <select
//                     type="text"
//                     required
//                     value={Status}
//                     onChange={(e)=>{setStatus(e.target.value)}}
//                     >
//                         <option>Single</option>
//                         <option>Maried</option>
//                     </select>
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>phone Number</label>
//                     <input
//                     type="text"
//                     required
//                     value={phonenumber}
//                     onChange={(e)=>{setPhoneNumber(e.target.value)}}
//                     />
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <h2>Work Experince</h2>
//                 <div className="col-md-6 inputField">
//                     <label>Job title</label>
//                     <input
//                     type="text"
//                     required
//                     value={jobTitle}
//                     onChange={(e)=>{setjobTitle(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Job Role</label>
//                     <input
//                     type="text"
//                     required
//                     value={jobRole}
//                     onChange={(e)=>{setjobRole(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Education</label>
//                     <input
//                     type="text"
//                     required
//                     value={Education}
//                     onChange={(e)=>{setEducation(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Experience</label>
//                     <textarea
//                     type="text"
//                     required
//                     value={Experience}
//                     onChange={(e)=>{setExperience(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Skills</label>
//                     <input
//                     type="text"
//                     required
//                     value={Skills}
//                     onChange={(e)=>{setSkills(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Cv</label>
//                     <input
//                     type="file"
//                     required
//                     value={Cv}
//                     onChange={(e)=>{setCv(e.target.value)}}
//                     />
//                 </div>
//                 <div className="col-md-6 inputField">
//                     <label>Qualification</label>
//                     <textarea
//                     type="text"
//                     required
//                     value={Qualification}
//                     onChange={(e)=>{setQualification(e.target.value)}}
//                     />
//                 </div>
//                 </div>
//                 <br></br>
//                 <br></br>
//                     {/* <Link to='/UpdateProfile'></Link> */}
//                 <button type="submit" id='submit'>Submit</button>
//             </form>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Profile
import React from "react";
import useFetch from "../customhooks/useFetch";
import Header from "../components/Header";


const Profile = () => {

    let userData = JSON.parse(localStorage.getItem('userData'))[0];

  console.log(userData)
  const { data: users, error, isPending } = useFetch('http://localhost:5000/users/'+userData.id);
  console.log(userData.id)
 

   
       
  return (
      <>
    <Header />
    {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {users && (
     

     <div class="resume">
        <div class="resume_left">
          <div class="resume_profile">
            <img src={users.avatar} alt="profile_pic"/>
          </div>
          <div class="resume_content">
            <div class="resume_item resume_info">
              <div class="title">
                <p class="bold">{users.name}</p>
                <p class="regular">{users.jobtitle}</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fas fa-map-signs"></i>
                  </div>
                  <div class="data">
                   {users.Location} <br />  
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div class="data">
                    {users.phonenumber}
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="data">
                    {users.email}
                  </div>
                </li>
                
              </ul>
            </div>
            <div class="resume_item resume_skills">
              <div class="title">
                <p class="bold">skill's</p>
              </div>
              <ul>
                <li>
                  <div class="skill_name">
                    HTML
                  </div>
                  <div class="skill_progress">
                    <span ></span>
                  </div>
                  <div class="skill_per">80%</div>
                </li>
                <li>
                  <div class="skill_name">
                    CSS
                  </div>
                  <div class="skill_progress">
                    <span ></span>
                  </div>
                  <div class="skill_per">70%</div>
                </li>
                <li>
                  <div class="skill_name">
                    SASS
                  </div>
                  <div class="skill_progress">
                    <span></span>
                  </div>
                  <div class="skill_per">90%</div>
                </li>
                <li>
                  <div class="skill_name">
                    JS
                  </div>
                  <div class="skill_progress">
                    <span ></span>
                  </div>
                  <div class="skill_per">60%</div>
                </li>
                <li>
                  <div class="skill_name">
                    JQUERY
                  </div>
                  <div class="skill_progress">
                    <span ></span>
                  </div>
                  <div class="skill_per">88%</div>
                </li>
              </ul>
            </div>
            <div class="resume_item resume_social">
              <div class="title">
                <p class="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fab fa-facebook-square"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Facebook</p>
                    <p>Stephen@facebook</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-twitter-square"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Twitter</p>
                    <p>Stephen@twitter</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-youtube"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Youtube</p>
                    <p>Stephen@youtube</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="data">
                    <p class="semi-bold">Linkedin</p>
                    <p>Stephen@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
       </div>
       <div class="resume_right">
         <div class="resume_item resume_about">
             <div class="title">
                <p class="bold">About us</p>
              </div>
             <p>{users.Aboutus}</p>
         </div>
         <div class="resume_item resume_work">
             <div class="title">
                <p class="bold">Work Experience</p>
              </div>
             <ul>
                 <li>
                     <div class="date">2013 - 2015</div> 
                     <div class="info">
                          <p class="semi-bold">Lorem ipsum dolor sit amet.</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
                 <li>
                   <div class="date">2015 - 2017</div>
                   <div class="info">
                          <p class="semi-bold">Lorem ipsum dolor sit amet.</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
                 <li>
                   <div class="date">2017 - Present</div>
                   <div class="info">
                          <p class="semi-bold">Lorem ipsum dolor sit amet.</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
             </ul>
         </div>
         <div class="resume_item resume_education">
           <div class="title">
                <p class="bold">Education</p>
              </div>
           <ul>
                 <li>
                     <div class="date">2010 - 2013</div> 
                     <div class="info">
                          <p class="semi-bold">Web Designing (Texas University)</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
                 <li>
                   <div class="date">2000 - 2010</div>
                   <div class="info">
                          <p class="semi-bold">Texas International School</p> 
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                     </div>
                 </li>
             </ul>
         </div>
         <div class="resume_item resume_hobby">
           <div class="title">
                <p class="bold">Hobby</p>
              </div>
            <ul>
              <li><i class="fas fa-book"></i></li>
              <li><i class="fas fa-gamepad"></i></li>
              <li><i class="fas fa-music"></i></li>
              <li><i class="fab fa-pagelines"></i></li>
           </ul>
         </div>
       </div>
     </div>
     
            )}
    </>
  );
};

export default Profile;
