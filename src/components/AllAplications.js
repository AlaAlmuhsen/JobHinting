import useFetch from "../customhooks/useFetch";
import ApplicationsTable from "./ApplicationsTable";




const AllAplications = () => {
    
    let companyData = JSON.parse(localStorage.getItem('companyData'))[0]; 
    const {data: applications , error , isPending} = useFetch('http://localhost:8000/application');
    // const {data: company , error , isPending} = useFetch('http://localhost:8000/company'.concat(company.id));

    return (
        <>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {applications && <ApplicationsTable applications={applications} companyData={companyData}/>}
        </>
    )
}


export default AllAplications

