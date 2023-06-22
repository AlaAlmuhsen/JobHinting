import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
function JobSearch() {
  const [jobs, setJobs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { category } = useParams();
  // const history = useHistory();
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  useEffect(() => {
    setInputValue(""); // Clear the search input whenever the category changes
  }, [category]);

  useEffect(() => {
    let filteredList = category
      ? jobs.filter((job) => job.category === category)
      : jobs.filter((job) =>
      job.title.toLowerCase().includes(inputValue.toLowerCase())
        );
    setFilteredList(filteredList);
  }, [category, inputValue, jobs]);

  function inputFunction(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <div className="AllJob">
        <h1 id="title-of-card">All Jobs</h1>
        <input
          placeholder="Enter the job search"
          value={inputValue}
          onChange={inputFunction}
          id="inputField"
        />
      </div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
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
