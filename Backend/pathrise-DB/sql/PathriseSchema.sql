-- Create pathrise database.
CREATE DATABASE pathrise;
-- Connect to pathrise database.
\c pathrise;

-- START creation of jobs table to house job info.
CREATE TABLE jobs (
    id INT PRIMARY KEY NOT NULL,
    job_title TEXT,
    company_name TEXT,
    job_url TEXT,
    job_source TEXT
);
-- END

-- START creation of boards table to hold job board info.
CREATE TABLE boards (
    job_source TEXT PRIMARY KEY NOT NULL,
    rating TEXT,
    root_domain TEXT,
    logo_file TEXT,
    description TEXT
);
-- END

COPY jobs(id, job_title, company_name, job_url, job_source)
FROM '/var/lib/dbdata/job_opportunities.csv'
DELIMITER ','
CSV HEADER;

COPY boards(job_source, rating, root_domain, logo_file, description)
FROM '/var/lib/dbdata/job_boards.csv'
DELIMITER ','
CSV HEADER;


