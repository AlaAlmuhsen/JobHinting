import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
const Home = () => {
    const [searchJob,setSearchJob]=useState('');
    const handelInput=(e)=>{
        setSearchJob(e.target.value);
    }
    return (
        <div className='home'>
            <Header active='home'/>
            <form>
                <input
                placeholder='Job title or keywords'
                value={searchJob}
                onChange={handelInput}
                />
                <Link to="/Findjob">search</Link>
            </form>
        </div>
    )
}
export default Home;