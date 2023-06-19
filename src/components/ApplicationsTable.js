import React from 'react'

const ApplicationsTable = ({applications , companyData}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>first</th>
                <th>last</th>
                <th>major</th>
                <th>birthday</th>
                <th>status</th>
                <th>phonenumber</th>
                <th>timeOfApply</th>
            </tr>
        </thead>
        <thead>
            {applications
            .filter((application) => {
                return application.companyid == companyData.id
            })
            .map((application) => (
                <tr key={application.id}>
                    <td>{application.firstname}</td>
                    <td>{application.lastname}</td>
                    <td>{application.major}</td>
                    <td>{application.birthday}</td>
                    <td>{application.status}</td>
                    <td>{application.phonenumber}</td>
                    <td>{application.timeOfApply }</td>
                </tr>
            ))}
        </thead>
    </table>
  )
}

export default ApplicationsTable


// "companyid": "1",
// "jobid" : "1",
// "firstname" : "fname",
// "lastname" : "lname",
// "major" : "major",
// "birthday" : "15/10/1998",
// "status" : "pending",
// "phonenumber" : "0777777777",
// "timeOfApply" : "19/6/2023",
// "id":"1"