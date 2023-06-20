import React from 'react'
import Header from '../components/Header'
// import { useParams } from 'react-router-dom'
// import useFetch from '../customhooks/useFetch';

const Findjob = () => {
  // const {title}=useParams();
  // const { data : jobs }=useFetch('http://localhost:8000/jobs/'+title);
  // console.log(jobs)
  return (
    <div className='find-job'>
        <Header active='find'/>
        <p>find job</p>
        {/* <p>{jobs.title}</p> */}
    </div>
  )
}

export default Findjob;
