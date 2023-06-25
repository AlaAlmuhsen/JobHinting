import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function JobSearch() {
  const [jobs, setJobs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  let [filteredList, setFilteredList] = useState([]);
  const { category } = useParams();

  let [typeOfEmploymentValue, settypeofEmploymentValue] = useState({
    "Full-time": false,
    "Part-time": false,
  });

  let [joblevelValue, setjoblevelValue] = useState({
    Junior: false,
    Senior: false,
  });

  let [categoryValue, setccategoryValue] = useState({
    Technology: false,
    Engineering: false,
    Business: false,
    Meadical: false,
    Sales: false,
    Marketing: false,
    Accounting: false,
    Teaching: false,
  });

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
    let fetchResult = jobs.filter((job) => job.category === category);
    setFilteredList(fetchResult);
  }, [jobs]);

  function inputFunction(e) {
    setInputValue(e.target.value);
    let searchResult = jobs.filter((job) =>
      job.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredList(searchResult);
  }
  // *********************************************************************************************************
  //added Part-time for the 9 ids
  
 
  useEffect(() => {
     if(category === null)
    setFilteredList(jobs);
  }, [jobs]);

  //function get the value of the checkbox
  const handleCheckboxValue = (e) => {
    let value = "";

    value = e.target.checked === true ? e.target.value : e.target.id;

    //when checked
    value === "Full-time" && (typeOfEmploymentValue["Full-time"] = true);

    value === "Part-time" && (typeOfEmploymentValue["Part-time"] = true);

    value === "Technology" && (categoryValue["Technology"] = true);

    value === "Engineering" && (categoryValue["Engineering"] = true);

    value === "Business" && (categoryValue["Business"] = true);

    value === "Meadical" && (categoryValue["Meadical"] = true);

    value === "Sales" && (categoryValue["Sales"] = true);

    value === "Marketing" && (categoryValue["Marketing"] = true);

    value === "Accounting" && (categoryValue["Accounting"] = true);

    value === "Teaching" && (categoryValue["Teaching"] = true);

    value === "Senior" && (joblevelValue["Senior"] = true);

    value === "Junior" && (joblevelValue["Junior"] = true);

    //when not checked working on ID
    value === "Fulltime" && (typeOfEmploymentValue["Full-time"] = false);

    value === "Parttime" && (typeOfEmploymentValue["Part-time"] = false);

    value === "technology" && (categoryValue["Technology"] = false);

    value === "engineering" && (categoryValue["Engineering"] = false);

    value === "business" && (categoryValue["Business"] = false);

    value === "meadical" && (categoryValue["Meadical"] = false);

    value === "sales" && (categoryValue["Sales"] = false);

    value === "marketing" && (categoryValue["Marketing"] = false);

    value === "accounting" && (categoryValue["Accounting"] = false);

    value === "teaching" && (categoryValue["Teaching"] = false);

    value === "senior" && (joblevelValue["Senior"] = false);

    value === "junior" && (joblevelValue["Junior"] = false);

    //filters section

    //typeOfEmployment filter section
    let truetypeOfEmployment = Object.keys(typeOfEmploymentValue).filter(
      (prop) => typeOfEmploymentValue[prop] === true
    );

    let typeOfEmploymentResult = truetypeOfEmployment.map((prop) =>
      jobs.filter((job) => job.typeOfEmployment === prop)
    );

    if(typeOfEmploymentResult != null){
    setFilteredList(typeOfEmploymentResult[0]);
  }

    // Category filter section
    let trueCategories = Object.keys(categoryValue).filter(
      (prop) => categoryValue[prop] === true
    );

    let categoryResult = trueCategories.map((prop) =>
      jobs.filter((job) => job.category === prop)
    );

    if(categoryResult != null){
       setFilteredList(categoryResult[0]);
    }
   

    // Job level filter section
    let truejoblevel = Object.keys(joblevelValue).filter(
      (prop) => joblevelValue[prop] === true
    );

    let joblevelResult = truejoblevel.map((prop) =>
      jobs.filter((job) => job.jobLevel === prop)
    );

    if(joblevelResult != null){
       setFilteredList(joblevelResult[0]);
    }
    // console.log(joblevelResult[0])
  };

  return (
    <>
      <div style={{ color: "white" }}>
        <h6>Type of Employment</h6>
        <div className="form-check">
          <label className="form-check-label" htmlFor="Fulltime">
            <input
              className="form-check-input"
              type="checkbox"
              value="Full-time"
              id="Fulltime"
              onChange={handleCheckboxValue}
            />
            Full-time
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="Parttime">
            <input
              className="form-check-input"
              type="checkbox"
              value="Part-time"
              id="Parttime"
              onChange={handleCheckboxValue}
            />
            Part-time
          </label>
        </div>
        <br />

        <h6>Categories</h6>
        <div className="form-check">
          <label className="form-check-label" htmlFor="technology">
            <input
              className="form-check-input"
              type="checkbox"
              value="Technology"
              id="technology"
              onChange={handleCheckboxValue}
            />
            Technology
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="engineering">
            <input
              className="form-check-input"
              type="checkbox"
              value="Engineering"
              id="engineering"
              onChange={handleCheckboxValue}
            />
            Engineering
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="business">
            <input
              className="form-check-input"
              type="checkbox"
              value="Business"
              id="business"
              onChange={handleCheckboxValue}
            />
            Business
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="meadical">
            <input
              className="form-check-input"
              type="checkbox"
              value="Meadical"
              id="meadical"
              onChange={handleCheckboxValue}
            />
            Meadical
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="sales">
            <input
              className="form-check-input"
              type="checkbox"
              value="Sales"
              id="sales"
              onChange={handleCheckboxValue}
            />
            Sales
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="marketing">
            <input
              className="form-check-input"
              type="checkbox"
              value="Marketing"
              id="marketing"
              onChange={handleCheckboxValue}
            />
            Marketing
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="accounting">
            <input
              className="form-check-input"
              type="checkbox"
              value="Accounting"
              id="accounting"
              onChange={handleCheckboxValue}
            />
            Accounting
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="teaching">
            <input
              className="form-check-input"
              type="checkbox"
              value="Teaching"
              id="teaching"
              onChange={handleCheckboxValue}
            />
            Teaching
          </label>
        </div>
        <br />

        <h6>Job Level</h6>
        <div className="form-check">
          <label className="form-check-label" htmlFor="senior">
            <input
              className="form-check-input"
              type="checkbox"
              value="Senior"
              id="senior"
              onChange={handleCheckboxValue}
            />
            Senior
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="Junior">
            <input
              className="form-check-input"
              type="checkbox"
              value="Junior"
              id="Junior"
              onChange={handleCheckboxValue}
            />
            Junior
          </label>
        </div>
      </div>
      {/* end of filter section */}

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
                {/* <Card.Text>{job.typeOfEmployment}</Card.Text>
                <Card.Text>{job.jobLevel}</Card.Text>
                <Card.Text>{job.category}</Card.Text> */}
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
