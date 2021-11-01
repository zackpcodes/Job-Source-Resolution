import React, { useEffect, useState } from 'react';
import styles from './JobSources.module.css';
import JobSourceTile from './components/JobSourceTile';

function JobSources() {
  const [boards, setBoards] = useState();

  useEffect(() => {
    setBoards(<div className={styles.ldsellipsis}><div></div><div></div><div></div><div></div></div>);

    const nothingToSee = <h2 className={styles.noResponseText}>nothing to see here. :/</h2>;
    fetch('http://localhost:3001/jobsource/')
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          setBoards(nothingToSee);
        } else {
          setBoards(data.boards?.map((element) =>
            <JobSourceTile data={element} />
          ));
        };
      })
      .catch(err => {
        setBoards(nothingToSee);
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Job Sources</p>
      <div className={styles.jobSourceGrid}>
        <JobSourceTile data={{
    "name": "Tech Ladies",
    "rating": "Great",
    "root_domain": "hiretechladies.com",
    "logo_file": "https://storage.googleapis.com/pathrise-app/job_sources/techladies.jpg",
    "description": "For female software engineers. If you qualify, sign up."
  }}/>
        {boards}
      </div>
    </div>
  );
}

export default JobSources;
