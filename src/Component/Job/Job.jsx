import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='w-[100px] ' src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 py-2 mr-4 font-extrabold border rounded text-[#7e90fe] border-[#7e90fe]'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 mr-4 font-extrabold border rounded text-[#7e90fe] border-[#7e90fe]'>{job_type}</button>
                </div>
                <div className='text-2xl flex gap-4'>
                    <h2 >{location}</h2>
                    <h2>{salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.array
}

export default Job;