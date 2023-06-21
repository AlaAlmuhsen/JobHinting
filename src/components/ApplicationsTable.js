import React from "react";

const ApplicationsTable = ({ applications, companyData }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Total Applicants:19</a>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
            <button type="button" className="btn btn-primary me-3">
              Filter
            </button>
          </form>
        </div>
      </nav>
      {applications
        .filter((application) => {
          return application.companyid == companyData.id;
        })
        .map((application) => (
          <table
            className="table align-middle bg-light text-dark"
            key={application.id}
          >
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Major</th>
                <th>Hiring Status</th>
                <th>Application Date</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      className="rounded-circle img-user-table"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">
                        {application.firstname} {application.lastname}
                      </p>
                      <p className="text-muted mb-0">{application.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{application.major}</p>
                </td>
                <td>
                  <span className="badge bg-info text-dark rounded-pill d-inline">
                    {application.status}
                  </span>
                </td>
                <td>
                  <p className="text-muted mb-0">{application.timeOfApply}</p>
                </td>

                <td>
                  <p className="fw-normal mb-1">{application.jobRole}</p>
                  <p className="text-muted mb-0">{application.joblevel}</p>
                </td>
                <td>
                  <button type="button" className="btn btn-primary me-3">
                    See Apllecation
                  </button>
                </td>
              </tr>
             
            </tbody>
          </table>
        ))}
    </>
  );
};

export default ApplicationsTable;

{
  /* 
// <table>
    //     <thead>
    //         <tr>
    //             <th>first</th>
    //             <th>last</th>
    //             <th>major</th>
    //             <th>birthday</th>
    //             <th>status</th>
    //             <th>phonenumber</th>
    //             <th>timeOfApply</th>
    //         </tr>
    //     </thead>
    //     <thead>
    //         {applications
    //         .filter((application) => {
    //             return application.companyid == companyData.id
    //         })
    //         .map((application) => (
    //             <tr key={application.id}>
    //                 <td>{application.firstname}</td>
    //                 <td>{application.lastname}</td>
    //                 <td>{application.major}</td>
    //                 <td>{application.birthday}</td>
    //                 <td>{application.status}</td>
    //                 <td>{application.phonenumber}</td>
    //                 <td>{application.timeOfApply }</td>
    //             </tr>
    //         ))}
    //     </thead>
    // </table> */
}
