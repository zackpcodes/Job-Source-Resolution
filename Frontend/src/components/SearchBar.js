import React, { useEffect, useState } from 'react';
import styles from './JobsSearch.module.css';
import { useLocation } from "react-router-dom";

function SearchBar() {
    const [jobs, setJobs] = useState();
    const location = useLocation();

    return (
        <div className={styles.container}>
            
        </div>
    );
}

export default SearchBar;