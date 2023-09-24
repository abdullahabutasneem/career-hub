const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobid=> jobid === id);
    if(!exists) {
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));
    }
}

export {saveJobApplication, getStoredJobApplication}