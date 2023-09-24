import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { list } from "postcss";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(()=> {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
        }
        
    },[])
    return (
        <div>
            <h2>Jobs I applied: {appliedJobs.length}</h2>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Onsite</a></li>
                    <li><a>Remote</a></li>
                </ul>
            </div>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}><span>{job.company_name}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;