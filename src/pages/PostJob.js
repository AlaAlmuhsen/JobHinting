import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const PostJob = () => {
    const [title , setTitle] = useState('');
    const [category , setCategory] = useState('Technology');
    const [typeOfEmployment , setTypeOfEmployment] = useState('full-time');
    const [jobLevel , setJobLevel] = useState('Junior');
    const [capacity , setCapacity] = useState(1);
    const [dateOfPost , setDateOfPost] = useState(formatDate().split('-').join('/'));
    const [desc , setDesc] = useState('');
    return (
        <form className='post-job-form' onSubmit={onSubmit}>
            <h2>Post Job</h2>
            <div className="row">
                <div className="col-md-6 input-box">
                    <p>title</p>
                    <input 
                        type="text" 
                        placeholder='Job Title' 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-6 input-box">
                    <p>category</p>
                    <select 
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Technology">Technology</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Business">Business</option>
                        <option value="Meadical">Meadical</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Teaching">Teaching</option>
                    </select>
                </div>
                <div className="col-md-6 input-box">
                    <p>type of employment</p>
                    <select 
                        required 
                        value={typeOfEmployment}
                        onChange={(e) => setTypeOfEmployment(e.target.value)}
                    >
                        <option value="full-time">full-time</option>
                        <option value="part-time">part-time</option>
                    </select>
                </div>
                <div className="col-md-6 input-box">
                    <p>job Level</p>
                    <select 
                        required
                        value={jobLevel}
                        onChange={(e) => setJobLevel(e.target.value)}
                    >
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
                <div className="col-md-6 input-box">
                    <p>capacity</p>
                    <input 
                        type="number" 
                        min={1}
                        required
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                    />
                </div>
                <div className="col-md-6 input-box">
                    <p>date</p>
                    <input 
                        type="date" 
                        value={formatDate()} 
                        disabled/>
                </div>
                <div className="col-12 input-box">
                    <p>Description</p>
                    <textarea 
                        rows='5' 
                        placeholder='Job Description'
                        value={desc}
                        required
                        onInput={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className="col-md input-box d-flex justify-content-end">
                    <button type='submit' className='btn-post'>Post Job</button>
                </div>
            </div>
        </form>
    )
    function onSubmit(e){
        e.preventDefault();
        // console.log(title);
        // console.log(category);
        // console.log(typeOfEmployment)
        // console.log(jobLevel)
        // console.log(capacity)
        // console.log(dateOfPost)
        console.log(desc)
    }
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    function formatDate(date = new Date()) {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    }
}

export default PostJob


// "title": "UI/Ux",
//             "desc": "lorem lorem lorem lorem lorem",
//             "companyId": 1,
//             "dateOfPost": "2023/8/15",
//             "category": "tec",
//             "typeOfEmployment": "full-time",
//             "jobLevel": "junior",
//             "capacity" : "10",
//             "applied" : "0",
//             "id": 1

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const blog = {title, body , author};

//     setIsPending(true)

//     fetch('http://localhost:8000/blogs' , {
//         method: 'POST',
//         headers: { "Content-Type": 'application/json'},
//         body: JSON.stringify(blog)
//     })
//     .then(() => {
//         console.log("new blog added");
//         setIsPending(false);
//     })
//     navigate('/');
//     // navigate(-1);
// }