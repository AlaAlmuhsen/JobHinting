import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function JobSearch() {
  const [jobs, setJobs] = useState([]);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((jobs) => {
        setJobs(jobs);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        setisPending(false);
        setError(err.message);
      });
  }, []);

  function inputFunction(e) {
    setInputValue(e.target.value);
  }

  const filteredList = jobs.filter((job) =>
    job.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
    <div className="AllJob">
    <h1 id="title-of-card">All Jobs</h1>
      <input
        placeholder="Enter the job search"
        value={inputValue}
        onInput={inputFunction}
        id='inputField'
      />
    </div>
      <Row>
        {filteredList.slice(0, 12).map((job) => (
          <Col key={job.id} md={6} className="h-100">
            <Card id="card">
              <Card.Body>
                <Card.Title id="title-job">{job.title}</Card.Title>
                <Card.Text>{job.desc}</Card.Text>
                <Link to={`/jobdetails/${job.id}`} id="more">
                  Details
                </Link>
              </Card.Body>
            </Card>
            <br />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default JobSearch;
