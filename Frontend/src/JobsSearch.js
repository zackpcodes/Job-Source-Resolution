import React, { useEffect, useState } from 'react';
import styles from './JobsSearch.module.css';
import { useLocation } from "react-router-dom";
import JobTile from './components/JobTile';

function JobsSearch() {
    const [jobs, setJobs] = useState();
    const location = useLocation();

    useEffect(() => {
        setJobs(<div className={styles.ldsellipsis}><div></div><div></div><div></div><div></div></div>);
        const jobsListHeader = (
            <div className={styles.jobsListHeader}>
                <p className={styles.text}>Job ID</p>
                <p className={styles.text}>Job Title</p>
                <p className={styles.text}>Company Name</p>
                <p className={styles.text}>Job Source</p>
                <p className={styles.text}>Job URL</p>
            </div>);
        const nothingToSee = <h2 className={styles.noResponseText}>nothing to see here. :/</h2>;

        fetch('http://34.125.24.177:3001/jobsource/jobs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ job_source: location.state.data.job_source })
        })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    setJobs(nothingToSee);
                } else {
                    let tempJobs = data.jobs?.map((element) => <JobTile data={element} />);
                    tempJobs.unshift(jobsListHeader);
                    setJobs(tempJobs);
                };
            })
            .catch(err => {
                setJobs(nothingToSee);
                console.log(err);
            });
    }, [location]);

    return (
        <div className={styles.container}>
            <p className={styles.title}>Job Source: {location.state.data.job_source}</p>
            <ul className={styles.jobsList}>
                {jobs}
            </ul>
        </div>
    );
}

export default JobsSearch;