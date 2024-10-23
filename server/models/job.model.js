const mongoose = require('mongoose');

const jobDescriptionSchema = new mongoose.Schema({
    workplaceType: { type: String, required: true },
    location: { type: String, required: true },
    positionTitle: { type: String, required: true },
    jobFunction: { type: String, required: true },
    jobType: { type: String, required: true }, // Off-Campus, Internship, Fresher, Experience
    minEducation: { type: String, required: true },
    mainStream: { type: String, required: true },
    minExperience: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    qualifications: [{ type: String }],
    benefits: [{ type: String }],
});

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    jobRole: { type: String },
    qualification: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String, required: true },
    vacancies: { type: String },
    salary: { type: String },
    jobLocation: { type: String },
    venueLocation: { type: String },
    walkInDate: { type: String },
    eligibility: { type: String },
    postedDate: { type: String, required: true },
    jobType: { type: String, required: true },
    jobDescription: jobDescriptionSchema,
    posted: { type: String, required: true },
    applyNowLink: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
