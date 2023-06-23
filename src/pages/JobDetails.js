import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const JobDetails = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setJobData(data);
        setIsPending(false);
        setError(null);

        const companyId = data.companyId;
        if (companyId) {
          fetch(`http://localhost:5000/company/${companyId}`)
            .then((res) => {
              if (!res.ok) {
                throw Error('Could not fetch the data for the company');
              }
              return res.json();
            })
            .then((company) => {
              setCompanyData(company);
            })
            .catch((err) => {
              setError(err.message);
            });
        }
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [id]);
  return (
    <div >
    <Header/>
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {jobData && companyData && (
        <div id='details-body'>
        <p>{jobData.title}</p>
        <p>{jobData.desc}</p>
          <h1>{companyData.type}</h1>
          <p>{companyData.email}</p>
          <img src={companyData.logo} alt='companyLogo' id='companyId'/>
          <h2>{companyData.name}</h2>
          <p>{companyData.indusrty}</p>
          <Link to={`/Applied/${jobData.id}/${jobData.companyId}/${jobData.jobLevel}/${jobData.typeOfEmployment}/${jobData.title}`}>Applied</Link>
        </div>
      )}
      <Footer/>
    </div>
  );
};
export default JobDetails;
