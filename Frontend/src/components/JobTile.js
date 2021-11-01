import React, { useEffect, useState } from 'react';
import styles from './JobTile.module.css';

function JobTile({ data }) {
    const [urlUp, setUrlUp] = useState(true);

    useEffect(() => {
        if(!data.job_url) return;
        /*fetch(data.job_url, {
            method: 'GET',
            mode: 'no-cors',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status >= 400) {
                    setUrlUp(false)
                };
            })
            .catch(err => {
                console.log(err);
            });*/
    }, [data]);

    return (
        <li className={styles.container} onClick={()=> window.open(data.job_url, "_blank")}>
            <p className={styles.text}>
                {data.id}
            </p>
            <p className={styles.text}>
                {data.job_title}
            </p>
            <p className={styles.text}>
                {data.company_name}
            </p>
            <p className={styles.text}>
                {data.job_source}
            </p>
            <p className={urlUp ? `${styles.text} ${styles.up}` : `${styles.text} ${styles.down}`}>
                {data.job_url}
            </p>
        </li>
    );
}

export default JobTile;