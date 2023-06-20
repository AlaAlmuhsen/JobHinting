import { useEffect, useState } from "react";
import JobsCards from "./JobsCards";

function JobSearch() {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue , setInputValue] = useState('')
  const [filteredList , setFilteredList] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resourse");
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
  function handleInput(e) {
    setInputValue(e.target.value);
    setFilteredList(data.filter((job) => {
      return job.title.toLowerCase().includes(inputValue.toLowerCase()) || job.category.toLowerCase().includes(inputValue.toLowerCase());
    }))
  }
  return (
    <>
      <div className="search-from">
        <input
          type="text"
          onChange={handleInput}
          onBlur={handleInput}
          value={inputValue}
          />
      </div>
      <div className="Jobs-body">
        {error && <h1>{error}</h1>}
        {isPending && <h1>{isPending}</h1>}
        {data && <JobsCards jobs = {filteredList} />}
      </div>
    </>
  );
}

export default JobSearch;
