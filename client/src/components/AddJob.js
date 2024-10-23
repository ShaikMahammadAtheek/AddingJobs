// import React, { useState } from 'react';
// import axios from 'axios';
// import './AddJob.css';

// const AddJob = () => {
//     const [job, setJob] = useState({
//         title: '',
//         company: '',
//         description: '',
//         imageUrl: '',
//         jobRole: '',
//         qualification: '',
//         location: '',
//         experience: '',
//         vacancies: '',
//         salary: '',
//         jobLocation: '',
//         venueLocation: '',
//         walkInDate: '',
//         eligibility: '',
//         postedDate: new Date().toISOString().split('T')[0],
//         jobType: '',
//         posted: '',
//         applyNowLink: ''
//     });

//     const handleChange = (e) => {
//         setJob({ ...job, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`${process.env.REACT_APP_API_URL}/jobs/add`, job);
//             console.log('Job added:', response.data);
//         } catch (error) {
//             console.error('Error adding job:', error);
//         }
//     };

//     return (
//         <form className="add-job-form" onSubmit={handleSubmit}>
//             <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
//             <input type="text" name="company" placeholder="Company" onChange={handleChange} required />
//             <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
//             <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} required />
//             <input type="text" name="jobRole" placeholder="Job Role" onChange={handleChange} />
//             <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required />
//             <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
//             <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required />
//             <input type="text" name="vacancies" placeholder="Vacancies" onChange={handleChange} />
//             <input type="text" name="salary" placeholder="Salary" onChange={handleChange} />
//             <input type="text" name="jobLocation" placeholder="Job Location" onChange={handleChange} />
//             <input type="text" name="venueLocation" placeholder="Venue Location" onChange={handleChange} />
//             <input type="date" name="walkInDate" onChange={handleChange} />
//             <input type="text" name="eligibility" placeholder="Eligibility" onChange={handleChange} />
//             <input type="text" name="posted" placeholder="Posted By" onChange={handleChange} required />
//             <input type="text" name="applyNowLink" placeholder="Apply Now Link" onChange={handleChange} />
//             <select name="jobType" onChange={handleChange} required>
//                 <option value="">Select Job Type</option>
//                 <option value="Off-Campus">Off-Campus</option>
//                 <option value="Internship">Internship</option>
//                 <option value="Fresher">Fresher</option>
//                 <option value="Experience">Experience</option>
//             </select>
//             <button type="submit">Add Job</button>
//         </form>
//     );
// };

// export default AddJob;











import React, { useState } from 'react';
import axios from 'axios';
import './AddJob.css';

const AddJob = () => {
    const [job, setJob] = useState({
        title: '',
        company: '',
        description: '',
        imageUrl: '',
        jobRole: '',
        qualification: '',
        location: '',
        experience: '',
        vacancies: '',
        salary: '',
        jobLocation: '',
        venueLocation: '',
        walkInDate: '',
        eligibility: '',
        postedDate: new Date().toISOString().split('T')[0],
        jobType: '',
        posted: '',
        applyNowLink: '',
        jobDescription: {
            workplaceType: '',
            location: '',
            positionTitle: '',
            jobFunction: '',
            jobType: '',
            minEducation: '',
            mainStream: '',
            minExperience: '',
            description: '',
            responsibilities: [],
            qualifications: [],
            benefits: []
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nameParts = name.split('.');

        if (nameParts.length === 2) {
            setJob({
                ...job,
                [nameParts[0]]: {
                    ...job[nameParts[0]],
                    [nameParts[1]]: value
                }
            });
        } else {
            setJob({ ...job, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/jobs/add`, job);
            console.log('Job added:', response.data);
        } catch (error) {
            console.error('Error adding job:', error);
        }
    };

    return (
        <form className="add-job-form" onSubmit={handleSubmit}>
            <label>Job Title</label>
            <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />

            <label>Company</label>
            <input type="text" name="company" placeholder="Company" onChange={handleChange} required />

            <label>Description</label>
            <textarea name="description" placeholder="Description" onChange={handleChange} required />

            <label>Image URL</label>
            <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} required />

            <label>Job Role</label>
            <input type="text" name="jobRole" placeholder="Job Role" onChange={handleChange} />

            <label>Qualification</label>
            <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required />

            <label>Location</label>
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />

            <label>Experience</label>
            <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required />

            <label>Vacancies</label>
            <input type="text" name="vacancies" placeholder="Vacancies" onChange={handleChange} />

            <label>Salary</label>
            <input type="text" name="salary" placeholder="Salary" onChange={handleChange} />

            <label>Job Location</label>
            <input type="text" name="jobLocation" placeholder="Job Location" onChange={handleChange} />

            <label>Venue Location</label>
            <input type="text" name="venueLocation" placeholder="Venue Location" onChange={handleChange} />

            <label>Walk-in Date</label>
            <input type="date" name="walkInDate" onChange={handleChange} />

            <label>Eligibility</label>
            <input type="text" name="eligibility" placeholder="Eligibility" onChange={handleChange} />

            <label>Posted By</label>
            <input type="text" name="posted" placeholder="Posted By" onChange={handleChange} required />

            <label>Apply Now Link</label>
            <input type="text" name="applyNowLink" placeholder="Apply Now Link" onChange={handleChange} />

            <label>Job Type</label>
            <select name="jobType" onChange={handleChange} required>
                <option value="">Select Job Type</option>
                <option value="Off-Campus">Off-Campus</option>
                <option value="Internship">Internship</option>
                <option value="Fresher">Fresher</option>
                <option value="Experience">Experience</option>
            </select>

            {/* Nested jobDescription */}
            <h3>Job Description</h3>

            <label>Workplace Type</label>
            <input type="text" name="jobDescription.workplaceType" placeholder="Workplace Type" onChange={handleChange} required />

            <label>Job Location</label>
            <input type="text" name="jobDescription.location" placeholder="Job Location" onChange={handleChange} required />

            <label>Position Title</label>
            <input type="text" name="jobDescription.positionTitle" placeholder="Position Title" onChange={handleChange} required />

            <label>Job Function</label>
            <input type="text" name="jobDescription.jobFunction" placeholder="Job Function" onChange={handleChange} required />

            <label>Job Type</label>
            <input type="text" name="jobDescription.jobType" placeholder="Job Type" onChange={handleChange} required />

            <label>Minimum Education</label>
            <input type="text" name="jobDescription.minEducation" placeholder="Minimum Education" onChange={handleChange} required />

            <label>Main Stream</label>
            <input type="text" name="jobDescription.mainStream" placeholder="Main Stream" onChange={handleChange} required />

            <label>Minimum Experience</label>
            <input type="text" name="jobDescription.minExperience" placeholder="Minimum Experience" onChange={handleChange} required />

            <label>Job Description</label>
            <textarea name="jobDescription.description" placeholder="Job Description" onChange={handleChange} required />

            <label>Responsibilities (comma separated)</label>
            <textarea name="jobDescription.responsibilities" placeholder="Responsibilities (comma separated)" onChange={(e) => handleChange({ target: { name: 'jobDescription.responsibilities', value: e.target.value.split(',') } })} />

            <label>Qualifications (comma separated)</label>
            <textarea name="jobDescription.qualifications" placeholder="Qualifications (comma separated)" onChange={(e) => handleChange({ target: { name: 'jobDescription.qualifications', value: e.target.value.split(',') } })} />

            <label>Benefits (comma separated)</label>
            <textarea name="jobDescription.benefits" placeholder="Benefits (comma separated)" onChange={(e) => handleChange({ target: { name: 'jobDescription.benefits', value: e.target.value.split(',') } })} />

            <button type="submit">Add Job</button>
        </form>
    );
};

export default AddJob;
