import styles from './JobSourceTile.module.css';
import { useHistory } from "react-router-dom";


function JobSourceTile({ data }) {
    let history = useHistory();
    return (
        <div className={styles.container} onClick={() => history.push({ pathname: '/jobssearch', state:{ data: data }})}>
            <div className={styles.description}>
                <img className={styles.logo} src={data.logo_file} alt={data.job_source} width="70" height="70" />
                <p className={styles.descriptionText}>{data.description}</p>
            </div>
            <p className={data.rating === 'Great' ? `${styles.rating} ${styles.great}` : `${styles.rating} ${styles.okay}`}>{data.rating}</p>
        </div>
    );
}

export default JobSourceTile;
