import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobsList.css';


const JobsList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="jobs-list">
            <h2>Jobs List</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job._id}>
                        <h3>{job.title} - {job.company}</h3>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default JobsList;
