import React from 'react';
import Header from '../components/Header';
import JobSearch from '../components/JobSearch';
const Findjob = () => {
  
  // console.log(jobs)
  return (
    <div className='find-job'>
      <Header active='find'/>
      <JobSearch/>
    </div>
  )
}
export default Findjob;
