import { useEffect, useState } from "react";
import JobsCards from "./JobsCards";

function JobSearch() {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setdata(data);
        setisPending(false);
        setError(null);
        setFilteredList(data);
      })
      .catch((err) => {
        setisPending(false);
        setError(err.message);
      });
  }, []);
  useEffect(() => {
    if (data && inputValue) {
      setFilteredList(
        data.filter(
          (job) =>
            job.title.toLowerCase().includes(inputValue.toLowerCase()) ||
            job.category.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      setFilteredList(data);
    }
  }, [data, inputValue]);
  function handleInput(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
    <div className="AllJob">
      <h1 id="title-of-card">All Jobs</h1>
      <div className="search-form">
        <input
          type="text"
          onChange={handleInput}
          onBlur={handleInput}
          value={inputValue}
          id="inputField"
        />
        </div>
      </div>
      <div className="Jobs-body">
        {error && <h1>{error}</h1>}
        {isPending && <h1>Loading...</h1>}
        {data && <JobsCards jobs={filteredList || data} />}
      </div>
    </>
  );
}

export default JobSearch;
