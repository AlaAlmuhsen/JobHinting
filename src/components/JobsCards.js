
const JobsCards = ({jobs}) => {
  return (
    jobs.map((job) => (
        <div className="job-card" key={job.id}>{job.title}</div>
    ))
  )
}

export default JobsCards
