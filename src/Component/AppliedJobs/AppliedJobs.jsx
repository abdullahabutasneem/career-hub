import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleDisplayJob = option => {
        if(option === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if(option === 'remote') {
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJob);
        }
        else if(option === 'onsite') {
            const onsiteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJob);
        }
    }

    useEffect(()=> {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
        
    },[jobs])
    return (
        <div>
            <h2>Jobs I applied: {appliedJobs.length}</h2>
            
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={()=>handleDisplayJob('all')}>All</a></li>
                    <li><a onClick={()=>handleDisplayJob('onsite')}>Onsite</a></li>
                    <li><a onClick={()=>handleDisplayJob('remote')}>Remote</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}><span>{job.company_name} - {job.remote_or_onsite}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;